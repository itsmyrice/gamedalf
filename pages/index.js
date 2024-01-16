import useSWR from "swr";
import GameCard from "@/components/GameCard";
import styled from "styled-components";
//import { DYNAMIC_URL } from "../utils/dynamicURLs";

export default function HomePage() {
  // const dynamicUrl = DYNAMIC_URL;

  const { data, error, isLoading } = useSWR("./api/games");

  if (error) return <div>failed to load</div>;
  if (!data || isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <Styledh1>
        Game<StyledSpan>dalf</StyledSpan>
      </Styledh1>
      <StyledDiv>
        <StyledUList>
          {data.map((game) => (
            <StyledList key={game.id}>
              <GameCard game={game}></GameCard>
            </StyledList>
          ))}
        </StyledUList>
      </StyledDiv>
    </>
  );
}

const Styledh1 = styled.h1`
  color: #111111;
  display: flex;
  justify-content: center;
  text-shadow: 0px 1px 2px #b56917;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;

const StyledDiv = styled.div`
  background-color: #5a4fcf;
  color: #ffffff;
  margin: 0 auto;
  padding: 1rem;
`;

const StyledUList = styled.ul`
  width: 100%;
`;

const StyledList = styled.li`
  width: 70%;
  border: 1px solid #111111;
  box-shadow: 0px 2px 6px #b56917;
  list-style: none;
  margin: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #663399; // #32174D;
    border: 1px solid #ff8200;
  }
`;
