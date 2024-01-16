import useSWR from "swr";
import GameCard from "@/components/GameCard";
import { DYNAMIC_URL } from "../utils/dynamicURLs";
import styled from "styled-components";
import GameList from "@/components/GameList";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    // fetchnig data with dynamic endpoints
    `/api/games?endpoint=/${DYNAMIC_URL.hot.boardgame}}`
  );

  if (error)
    return (
      <div>
        Sorry, we couldn't retrieve the game data at the moment. Please try
        again later.
      </div>
    );
  if (!data || isLoading) return <small>loading...</small>;

  return (
    <>
      <StyledTitle>
        Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>
      {data && <GameList data={data} />} {/* Передайте data как пропс */}
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
