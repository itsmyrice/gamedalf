import styled from "styled-components"

export default function Header() {
    return  (
    <StyledTitle>
    Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>
    )
}
const StyledTitle = styled.h1`
  color: #111111;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0.5rem;
  text-shadow: 0px 1px 2px #b56917;
  background-color: white;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;