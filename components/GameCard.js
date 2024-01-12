import Image from "next/image";
import styled from "styled-components";

export default function GameCard({ game }) {
  return (
    <>
      <h2>{game.name.value}</h2>
      <StyledRankTitle>{game.rank}</StyledRankTitle>
      <Image src={game.thumbnail.value} alt={game.name.value} width={100} height={100}></Image>
      <p>{game.yearpublished.value}</p>
    </>
  );
}


const StyledRankTitle = styled.p`
  color: #ff8200;
`;
