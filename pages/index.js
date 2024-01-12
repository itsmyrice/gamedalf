import useSWR from "swr";
import GameCard from "@/components/GameCard";
import styled from "styled-components";

export default function HomePage() {
  const dynamicUrl = "/hot?type=boardgame";
  const { data, error, isLoading } = useSWR(
    `/api/games?endpoint=${dynamicUrl}`
  );

  if (error) return <div>failed to load</div>;
  if (!data || isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <Styledh1>
        Game<StyledSpan>dalf</StyledSpan>
      </Styledh1>
      <GameCard data={data} />
    </div>
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
