import Image from "next/image";
import styled from "styled-components";

export default function GameCard({ game }) {
  return (
    <StyledCard>
      <StyledTitle>{game.name.value}</StyledTitle>
      <StyledRankTitle>{game.rank}</StyledRankTitle>
      <Image
        src={game.thumbnail.value}
        alt={game.name.value}
        width={100}
        height={100}
      />
      <p>{game.yearpublished.value}</p>
    </StyledCard>
  );
}

const StyledRankTitle = styled.p`
  color: #ff8200;
`;
const StyledCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 2px 6px #b56917;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background-color: #663399;
    border: 1px solid #ff8200;
  }
`;

const StyledTitle = styled.h2`
  font-size: 20px;
`;
