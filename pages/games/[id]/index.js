import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: game,
    isLoading,
    error,
  } = useSWR(`/api/games?endpoint=/thing?id=${id}`);

  if(!id) return <small>ID not found</small>
  if (isLoading || error) return <small>loading...</small>;

  return (
    <>
      <StyledTitle>
        Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>
      <StyledSection>
        <StyledImageDisplay
          src={game.image}
          alt="game image"
          width={400}
          height={210}
        ></StyledImageDisplay>
        <StyledLink href="/">⬅️ Back</StyledLink>
        <StyledDiv>
          <StyledYearDisplay>{game.yearpublished.value}</StyledYearDisplay>
          <StyledDesciption>{game.description}</StyledDesciption>
        </StyledDiv>
      </StyledSection>
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

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
`;

const StyledImageDisplay = styled.img`
  margin: 2rem 0;
  border: 1px inherit black;
  box-shadow: 2px 3px 5px #ccccff;
  background-color: #ccccff;
  border-radius: 1rem;
  padding: 0.7rem;
  width: 50%;
  height: 50%;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #111111;
  margin-right: 20rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px ridge #ff8200;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledYearDisplay = styled.p`
  color: #ff8200;
  font-weight: bold;
`;

const StyledDesciption = styled.p`
  color: #111111;
  border-top: 1px inset black;
  border-bottom: 1px inset black;
  padding: 2rem 1rem;
  text-align: center;
`;
