import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";




export default function GameCard({ game }) {
  
  return (
    <StyledCard>
      <StyledFavoriteButton>
      <FavouriteButton />
      </StyledFavoriteButton>
      <StyledTitle>{game.name.value}</StyledTitle>
      <StyledRankTitle>{game.rank}</StyledRankTitle>
      <Link href={`/games/${game.id}`} aria-label="More details">
      <StyledImageDisplay
        src={game.thumbnail.value}
        alt={game.name.value}
        width={150}
        height={150}
        />
        </Link>
      <StyledYearDisplay>{game.yearpublished.value}</StyledYearDisplay>
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
`;

const StyledTitle = styled.h2`
  color: #CCCCFF;
`;

const StyledYearDisplay = styled.p`
color: #CCCCFF;
`;

const StyledImageDisplay = styled.img`
cursor: pointer;
`;

const StyledFavoriteButton = styled.div`
  position: relative;
  left: 100px;
  margin: 10px;
`;