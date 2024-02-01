import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function DetailsPage({ isFavorite, toggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: game,
    isLoading,
    error,
  } = useSWR(id ? `/api/games/${id}` : null);

  if (!id) return <small>ID not found</small>;
  if (isLoading || error) return <small>loading...</small>;

  const checkIsFavorite = isFavorite(game._id);
  return (
    <StyledSection>
      <StyledLink href="/">
        <FaArrowLeft style={{ marginRight: "4px" }} />
        Back
      </StyledLink>
      <FavouriteButtonWrapper>
        <FavouriteButton
          toggleFavorite={() => toggleFavorite(game._id)}
          isFavorite={checkIsFavorite}
        />
      </FavouriteButtonWrapper>
      <StyledImageDisplay
        src={game.image}
        alt={game.name}
        width={200}
        height={200}
      ></StyledImageDisplay>
      <h1>{game.name}</h1>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Rating</StyledTh>
            <StyledTh>Age</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>{game.rating.slice(0, 3)}</StyledTd>
            <StyledTd>{game.minAge}+</StyledTd>
          </tr>
        </tbody>
        <thead>
          <tr>
            <StyledTh>Year Released</StyledTh>
            <StyledTh>Playing Time</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>{game.yearpublished}</StyledTd>
            <StyledTd>{game.playtime}</StyledTd>
          </tr>
        </tbody>
        <thead>
          <tr>           
            <StyledTh>Min. Players</StyledTh>
            <StyledTh>Max. Players</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>           
            <StyledTd>{game.minPlayers}</StyledTd>
            <StyledTd>{game.maxPlayers}</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
      <StyledContents>Categories</StyledContents>
      <StyledPTexts>{`${game.categories.slice(0, 7)}`}</StyledPTexts>
      <StyledContents>Description</StyledContents>
      <StyledPTexts>{game.description}</StyledPTexts>
      {game.userCreated ? <p>{game.userCreated}</p> : ""}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 100px 5% 200px 5%;
`;

const StyledImageDisplay = styled.img`
  width: 100%;
  height: 50%;
`;

const StyledLink = styled(Link)`
  color: black;
  border: 1px solid white;
  border-radius: 20px;
  padding: 6px 20px;
  position: absolute;
  top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  display: inline;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const StyledTh = styled.th`
  padding: 0.5rem 5rem;
`;

const StyledTd = styled.td`
  color: #ff8200;
`;

const StyledContents = styled.h2`
  font-size: 1.1rem;
  margin: 1rem 0;
`;

const StyledDesciption = styled.p`
  color: black;
  font-size: 16px;
  `
const StyledPTexts = styled.p`
  border-top: 1px inset #d8d2d2;
  margin: 0 1rem;
  padding: 1rem 0;
  font-size: 0.8rem;
  text-align: center;
`;

const FavouriteButtonWrapper = styled.div``;
