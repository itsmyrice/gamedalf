import styled from "styled-components";
import { LuLogIn } from "react-icons/lu";

export default function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledTitle>
          Game<StyledSpan>dalf</StyledSpan>
        </StyledTitle>
        <LuLogIn />
      </StyledWrapper>
    </StyledHeader>
  );
}
const StyledTitle = styled.h1`
  color: #111111;
  display: flex;
  font-size: 20px;
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
  justify-content: space-between;
  align-items: center;
`;
const StyledHeader = styled.header`
  background-color: #f5f5f7;
  width: 100%;
  padding: 10px 0;
  z-index: 10000000;
`;
