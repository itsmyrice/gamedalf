import styled from "styled-components";
import { LuLogIn } from "react-icons/lu";
export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>
        Game<StyledSpan>dalf</StyledSpan>
      </StyledTitle>
    </StyledHeader>
  );
}
const StyledTitle = styled.h1`
  color: #111111;
  font-size: 30px;
  text-shadow: 0px 1px 2px #b56917;
  background-color: transparent;
`;

const StyledSpan = styled.span`
  color: #ff8200;
  text-shadow: 0px 1px 2px #414a4c;
`;
const StyledWrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledHeader = styled.header`
  background: transaprent;
  width: 100%;
  padding: 20px 0;
  z-index: 10000000;
  position: fixed;
  top: 0;
`;
