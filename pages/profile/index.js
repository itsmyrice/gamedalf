import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";

export default function ProfilePage() {
  return (
      <StyledSection>
        <StyledDivBigText>
          <h2>Profile</h2>
          <h3>Your games:</h3>
        </StyledDivBigText>
        <StyledDivSmallText>
          <p>
            <MdOutlineFolderOff /> No games yet.
          </p>
        </StyledDivSmallText>
      </StyledSection>
  );
}


const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-top: 1px ridge #111111;
  background-color: #6a5acd;
  padding-top: 2rem;
  color: #111111;
  width: auto;
  height: 100vh;
`;

const StyledDivBigText = styled.div`
display: flex;
flex-direction: column;
row-gap: 2rem;
padding-left: 2rem;
`;

const StyledDivSmallText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: underline;
`;