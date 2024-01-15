import useSWR from "swr";
import GameCard from "@/components/GameCard";
import styled from "styled-components";
import { DYNAMIC_URL } from "../utils/dynamicURLs";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    // fetchnig data with dynamic endpoints
    `/api/games?endpoint=/${DYNAMIC_URL.hot.boardgame}}`
  );

  if (error)
    return (
      <div>
        Sorry, we couldn't retrieve the game data at the moment. Please
        try again later.
      </div>
    );
  if (!data || isLoading) return <small>loading...</small>;

  return (
    <>
      <StyledTitle>
        Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>

      <GamesContainer>
        <StyledUList>
          {data.map((game) => (
            <li key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
        </StyledUList>
      </GamesContainer>
    </>
  );
}

const StyledTitle = styled.h1`
  color: #111111;
  display: flex;
  justify-content: center;
  margin: auto;
  text-shadow: 0px 1px 2px #b56917;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;

const GamesContainer = styled.section`
  background-color: #5a4fcf;
  color: #ffffff;
  margin: auto;
  padding: 80px 0px;
  width: 100vw;
`;

const StyledUList = styled.ul`
  max-width: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: auto;
`;
