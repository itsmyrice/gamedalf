import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

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
      <StyledLink href={"/"}>
        <IoIosArrowRoundBack />
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
        width={400}
        height={210}
      ></StyledImageDisplay>
      <h1>{game.name}</h1>
      <StyledRating>{game.rating}</StyledRating>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Age</StyledTh>
            <StyledTh>Min.Players</StyledTh>
            <StyledTh2>Max. Players</StyledTh2>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>{game.minAge}+</StyledTd>
            <StyledTd>{game.minPlayers}</StyledTd>
            <StyledTd2>{game.maxPlayers}</StyledTd2>
          </tr>
        </tbody>
        <thead>
          <tr>
            <StyledTh>Year Released</StyledTh>
            <StyledTh>Playing Time</StyledTh>
            <StyledTh2>Minimum Playtime</StyledTh2>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>{game.yearpublished}</StyledTd>
            <StyledTd>{game.playtime}</StyledTd>
            <StyledTd2>{game.minPlaytime}</StyledTd2>
          </tr>
        </tbody>
      </StyledTable>
      <StyledContents>Categories</StyledContents>
      <StyledPTexts>{`${game.categories.join(
        ","
      )}`}</StyledPTexts>
      <StyledContents>Description</StyledContents>
      <StyledPTexts>{game.description}</StyledPTexts>
      {game.userCreated ? <p>{game.userCreated}</p> : ""}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
  margin-bottom: 5rem;
`;

const FavouriteButtonWrapper = styled.div`
  position: relative;
  left: 38%;
  bottom: 2.3rem;
`;

const StyledImageDisplay = styled.img`
  border: 1px inherit black;
  margin-bottom: 1rem;
  width: 85%;
  height: 60%;
`;

const StyledLink = styled(Link)`
  color: #111111;
  font-size: 2rem;
  position: relative;
  margin: 0.5rem 0;
  right: 45%;
  &:hover {
    color: #ff8200;
    border-left: 1px solid #111111;
  }
`;

const StyledRating = styled.p`
  color: #ff8200;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  display: inline;
  justify-content: space-between;
  box-shadow: 1px 0px 4px #8a8686;
  padding: 0.7rem;
  margin: 1rem;
  font-size: 0.9rem;
`;

const StyledTh = styled.th`
  border-right: 1px ridge #d8d2d2;
  padding: 0.7rem;
`;

const StyledTd = styled.td`
  padding: 0.7rem;
  color: #ff8200;
`;

const StyledTh2 = styled.th`
  padding: 0.7rem;
`;

const StyledTd2 = styled.td`
  color: #ff8200;
  padding: 0.7rem;
`;

const StyledContents = styled.h2`
  font-size: 1.1rem;
  margin: 1rem 0;
`;
const StyledPTexts = styled.p`
  border-top: 1px inset #d8d2d2;
  margin: 0 1rem;
  padding: 1rem 0;
  font-size: 0.8rem;
`;
