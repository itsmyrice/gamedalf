import styled from "styled-components";

export default function GameCard({data}) {
    return (
      <StyledDiv>
        <StyledUList>
            {data.map(game => 
            ( <StyledList key={game.id}>
                <h2>{game.name.value}</h2>
                <StyledP>{game.rank}</StyledP>
                <p>{game.thumbnail.value}</p>
                <p>{game.yearpublished.value}</p>
            </StyledList> )) }
        </StyledUList>
      </StyledDiv>
    );
  }

  const StyledDiv = styled.div`
  background-color: #5A4FCF;
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
box-shadow: 0px 2px 6px #B56917;
list-style: none;
margin: 2rem;
border-radius: 2rem;
display: flex;
flex-direction: column;
align-items: center;

&:hover {
    background-color: #663399; // #32174D;
    border: 1px solid #FF8200;
  }
`;

const StyledP = styled.p`
color: #FF8200;
`;
