import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";

export default function GameCard({ game, isFavorite, toggleFavorite }) {
  const checkIsFavorite = isFavorite(game._id);

  return (
    <Link href={`/games/${game._id}`} aria-label="More details">
      <StyledCard>
        <StyledImageWrapper>
          <StyledImageDisplay src={game.image} alt={game.name} />
          <FavouriteButton
            isFavorite={checkIsFavorite}
            toggleFavorite={() => toggleFavorite(game._id)}
          />
        </StyledImageWrapper>
        <StyledInfo>
          <StyledTitle>{game.name}</StyledTitle>
          <StyledRankTitle>{game.rating}</StyledRankTitle>
          <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>
        </StyledInfo>
      </StyledCard>
    </Link>
  );
}

const StyledRankTitle = styled.p`
  color: #ff8200;
  margin: 0;
`;

const StyledCard = styled.div`
  border: 1px ridge black;
  box-shadow: 0px 2px 6px #b56917;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  margin: 0.5em 0;
  text-decoration: und;
`;

const StyledYearDisplay = styled.p`
  color: #ccccff;
  margin: 0;
`;

const StyledImageDisplay = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
