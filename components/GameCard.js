import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function GameCard({ game }) {
  
  return (
    <Link href={`/games/${game._id}`} aria-label="More details">
    <StyledCard>

      <StyledTitle>{game.name}</StyledTitle>
      <StyledRankTitle>{game.rank}</StyledRankTitle>
      <Image
        src={game.image}
        alt={game.name}
        width={150}
        height={150}
      />
      <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>

    </StyledCard>
    </Link>
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