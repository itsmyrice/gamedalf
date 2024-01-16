import Image from "next/image";
import styled from "styled-components";

export default function GameCard({ game }) {
  return (
    <>
      <Image src={game.image} alt={game.id} height={200} width={230} />
      
    </>
  );
}

const StyledRankTitle = styled.p`
  color: #ff8200;
`;
