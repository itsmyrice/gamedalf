import styled from "styled-components";
import GameCard from "./GameCard";
export default function VerticalGameList({ isFavorite, toggleFavorite, data }) {
  return (
    <ListGames>
      {data.map((game) => (
        <SingleListItem key={game._id}>
          <GameCard
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            game={game}
          />
        </SingleListItem>
      ))}
    </ListGames>
  );
}
const ListGames = styled.ul`
  margin-top: 40px;
  list-style: none;
  position: relative;
`;
const SingleListItem = styled.li`
  border-radius: 1px solid black;
  margin-bottom: 20px;
`;
