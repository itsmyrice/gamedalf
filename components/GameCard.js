import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";

export default function GameCard({ game, isFavorite, toggleFavorite }) {
  
  const checkIsFavorite = isFavorite(game._id)

  return (
    <StyledCard>
      <FavouriteButton
        isFavorite={checkIsFavorite}
        toggleFavorite={() => toggleFavorite(game._id)}
      />

      <StyledTitle>{game.name}</StyledTitle>
      <StyledRankTitle>{game.rating}</StyledRankTitle>
      <Link href={`/games/${game._id}`} aria-label="More details">
        <StyledImageDisplay
          src={game.image}
          alt={game.name}
          width={150}
          height={150}
        />
      </Link>
      <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>
    </StyledCard>
  );
}

const StyledRankTitle = styled.p`
  color: #ff8200;
`;
const StyledCard = styled.div`
  border: 1px ridge black;
  box-shadow: 0px 2px 6px #b56917;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 0px;
`;

const StyledTitle = styled.h2`
  color: #ccccff;
`;

const StyledYearDisplay = styled.p`
  color: #ccccff;
`;

const StyledImageDisplay = styled.img`
  cursor: pointer;
`;
