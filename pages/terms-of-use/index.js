import styled from "styled-components";
import Link from "next/link";
import { StyledSection } from "../../styles";

export default function TermsOfUse() {
  return (
    <StyledSection>
      <h1>Terms of Use</h1>
      <StyledText>
        Welcome to GameDalf! By accessing or using our application and its
        features, you agree to comply with and be bound by the following terms
        and conditions ("Terms of Use"). Please read these Terms of Use
        carefully before accessing or using the App. If you do not agree with
        these terms, you may not access or use the App. <br />
        <br />
        GameDalf utilizes the Board Game Geek Application Programming Interface
        (API) to provide users with access to board game information and related
        features. By using our App, you agree to comply with the Board Game Geek
        API Terms of Use as outlined on the Board Game Geek website.
        <br />
        <br />
        In order to access certain features of the App, you may be required to
        create a user account. You are responsible for maintaining the
        confidentiality of your account and password, and for all activities
        that occur under your account.
        <br />
        <br />
        You may not use the App for any unlawful purpose or in any way that
        violates these Terms of Use. Prohibited activities include, but are not
        limited to, reverse engineering, decompiling, or disassembling the App,
        as well as any unauthorized use of the Board Game Geek API.
      </StyledText>
      <StyledLink
        href="https://boardgamegeek.com/wiki/page/XML_API_Terms_of_Use#"
        target="_blank"
      >
        Board Game Geek's Terms of Use
      </StyledLink>
    </StyledSection>
  );
}

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: black;
`;

const StyledText = styled.p`
  margin: 20px 0;
`;
