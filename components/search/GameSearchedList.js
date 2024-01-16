import styled from "styled-components";
import GameCard from "../GameCard";
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
  border-radius: 1.4rem;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 5px grey;
  overflow: hidden;
  outline: none;
  height: 8rem;
`;