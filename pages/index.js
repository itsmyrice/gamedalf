import useSWR from "swr";
import GameCard from "@/components/GameCard";
import styled from "styled-components";


export default function HomePage() {

  const { data, error, isLoading } = useSWR("/api/games");

  if (error)
    return (

      <small>
        "Sorry, we couldn't retrieve the game data at the moment. Please try again later."
      </small>
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
            <li key={game._id}>
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
  background-color: white;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;

const GamesContainer = styled.section`
  background-color: #5a4fcf;
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
