import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <StyledLink href={"/aboutus"}>About Us</StyledLink>
      <StyledLink href={"/terms-of-use"}>Terms of Use</StyledLink>
      <p>&copy; 2024 GameDalf</p>
    </StyledFooterWrapper>
  );
}

const StyledFooterWrapper = styled.footer`
  width: 100%;
  margin: auto;
  background: transparent;
`;
const StyledLink = styled(Link)`
  color: white;
`;
