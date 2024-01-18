import styled from "styled-components";
import GameCard from "./GameCard";
export default function GameSearchedList({ data }) {
  return (
    <ListGames>
      {data.map((game) => (
        <SingleListItem key={game._id}>
          <GameCard game={game} />
        </SingleListItem>
      ))}
    </ListGames>
  );
}
const ListGames = styled.ul`
  width: 80%;
  margin-left: 10%;
  margin-top: 6rem;
  list-style: none;
`;
const SingleListItem = styled.li`
  border-radius: 1px solid black;
  margin-bottom: 20px;
`;
