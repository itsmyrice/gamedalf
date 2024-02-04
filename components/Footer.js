import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <StyledLink href={"/aboutus"}>About Us</StyledLink>
      <StyledLink href={"/terms-of-use"}>Terms of Use</StyledLink>
    </StyledFooterWrapper>
  );
}

const StyledFooterWrapper = styled.footer`
  width: 100%;
  margin: auto;
  background: transparent;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  position: relative;

  &:first-child::after {
    content: "•";
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
