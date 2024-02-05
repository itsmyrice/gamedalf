import styled from "styled-components";
import GameCard from "./GameCard";
import { useSession } from "next-auth/react";

export default function VerticalGameList({
  isFavorite,
  toggleFavorite,
  data,
  showModal,
}) {
  return (
    <ListGames>
      {data.map((game) => (
        <li key={game._id}>
          <GameCard
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            game={game}
            showModal={showModal}
          />
        </li>
      ))}
    </ListGames>
  );
}
const ListGames = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
