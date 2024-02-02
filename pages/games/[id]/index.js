import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
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
      <StyledButton onClick={() => router.back()}>
        <IoIosArrowRoundBack />
      </StyledButton>
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
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Rating</StyledTh>
            <StyledTh>Age</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            {!game.userCreated ? (
              <StyledTd>{game.rating.slice(0, 3)}</StyledTd>
            ) : (
              <StyledTd> No ratings</StyledTd>
            )}
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
      <StyledPTexts>{game.categories.slice(0, 7)}</StyledPTexts>
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
  background-color: #f5f5f7;
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

const StyledPTexts = styled.p`
  border-top: 1px inset #d8d2d2;
  margin: 0 1rem;
  padding: 1rem 0;
  font-size: 0.8rem;
  text-align: center;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
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
