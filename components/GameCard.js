import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";



export default function GameCard({ game }) {
  
  return (
    <Link href={`/games/${game.id}`} aria-label="More details">
    <StyledCard>
      <StyledTitle>{game.name.value}</StyledTitle>
      <StyledRankTitle>{game.rank}</StyledRankTitle>
      <Image
        src={game.thumbnail.value}
        alt={game.name.value}
        width={150}
        height={150}
      />
      <StyledYearDisplay>{game.yearpublished.value}</StyledYearDisplay>
    </StyledCard>
    </Link>
  );
}

const StyledRankTitle = styled.p`
  color: #ff8200;x§
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

