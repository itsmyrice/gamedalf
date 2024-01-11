import useSWR from "swr";
import GameCard from "@/components/GameCard";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("api/games", fetcher)
  console.log(data)

  if (error) return <div>failed to load</div>
  if (!data || isLoading) return <div>loading...</div>

  return (
    <div>
      <Styledh1>Game<StyledSpan>dalf</StyledSpan></Styledh1>
      <GameCard data={data}/>
    </div>
  );
}

const Styledh1 = styled.h1`
  color: #111111;
  display: flex;
  justify-content: center;
  text-shadow: 0px 1px 2px #B56917;
`;

const StyledSpan = styled.span`
color: #FF8200;
text-shadow: 0px 1px 2px #414A4C;
`;