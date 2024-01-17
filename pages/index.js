import useSWR from "swr";
import styled from "styled-components";
import GameList from "@/components/GameList";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/games");

  if (error)
    return (
      <small>
        "Sorry, we couldn't retrieve the game data at the moment. Please try
        again later."
      </small>
    );

  if (!data || isLoading) return <small>loading...</small>;

  return (
    <>
      <StyledTitle>
        Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>
      {data && (
        <div>
          <GameList data={data.slice(0, 25)} categorieId={0} />
          <GameList data={data.slice(26, 50)} categorieId={1} />
          <GameList data={data.slice(51, 75)} categorieId={2} />
        </div>
      )}
    </>
  );
}

const StyledTitle = styled.h1`
  color: #111111;
  display: flex;
  justify-content: center;
  margin: auto;
  text-shadow: 0px 1px 2px #b56917;
  background-color: white;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;
