import styled from "styled-components";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function TermsOfUse() {
  return (
    <article>
      <StyledBackLink href={"/"}>
        {" "}
        <IoIosArrowRoundBack />{" "}
      </StyledBackLink>
      <header>
        <h1>Terms of Use</h1>
      </header>
      <StyledSection>
        <p>
          Welcome to GameDalf! By accessing or using our application and its
          features, you agree to comply with and be bound by the following terms
          and conditions ("Terms of Use"). Please read these Terms of Use
          carefully before accessing or using the App. If you do not agree with
          these terms, you may not access or use the App.
        </p>
        <p>
          GameDalf utilizes the Board Game Geek Application Programming
          Interface (API) to provide users with access to board game information
          and related features. By using our App, you agree to comply with the
          Board Game Geek API Terms of Use as outlined on the Board Game Geek
          website.
        </p>
        <p>
          In order to access certain features of the App, you may be required to
          create a user account. You are responsible for maintaining the
          confidentiality of your account and password, and for all activities
          that occur under your account.
        </p>
        <p>
          You may not use the App for any unlawful purpose or in any way that
          violates these Terms of Use. Prohibited activities include, but are
          not limited to, reverse engineering, decompiling, or disassembling the
          App, as well as any unauthorized use of the Board Game Geek API.
        </p>
        <StyledBggLink
          href="https://boardgamegeek.com/wiki/page/XML_API_Terms_of_Use#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Board Game Geek's Terms of Use
        </StyledBggLink>
      </StyledSection>
    </article>
  );
}

const StyledSection = styled.section`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const StyledBackLink = styled(Link)`
  color: #111111;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledBggLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: #111111;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
