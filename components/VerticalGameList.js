import styled from "styled-components";
import GameCard from "./GameCard";

export default function VerticalGameList({
  isFavorite,
  toggleFavorite,
  data,
  showModal,
}) {
  return (
    <ListGames>
      {data.map((game) => (
        <SingleListItem key={game._id}>
          <GameCard
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            game={game}
            showModal={showModal}
          />
        </SingleListItem>
      ))}
    </ListGames>
  );
}
const ListGames = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SingleListItem = styled.li``;
