import TechStack from "@/components/TechStack";
import TeamProfile from "@/components/TeamProfile";
import { profiles } from "@/components/TeamProfile";
import { techStacks } from "@/components/TechStack";
import Link from "next/link";
import styled from "styled-components";
import { BiGame } from "react-icons/bi";
import { StyledSection } from "../../styles";
import { FaArrowLeft } from "react-icons/fa6";

export default function AboutUsPage() {
  return (
    <StyledSection>
      <StyledLink href="/">
        <FaArrowLeft style={{ marginRight: "4px" }} />
        Back
      </StyledLink>
      <StyledGreetings>
        <h2>
          Hello, fellow adventurer! We are the Team <BiGame />
          ameDalf.
        </h2>
      </StyledGreetings>
      <p>
        'It's here not only on the dawn of the 5th day, it's here whenever,
        wherever you need it.'
      </p>
      <h3>Lets us introduce ourselves.</h3>
      {profiles.map((profile) => (
        <TeamProfile key={profile.name} {...profile} />
      ))}

      <h3>Let us introduce our app.</h3>
      <StyledAppContent>
        Gamedalf is an app tailored to be your companion in the vast world of
        board games. It doesn’t matter if you are a collector of board games or
        just looking for something to play with your friends, Gamedalf is there
        for you. You can choose your game from professionally curated
        recommendations or can search for one.
        <br />
        <br />
        Don’t feel like sifting through hundreds of games? Just click the dice
        icon and you can start playing immediately. The game is designed to
        introduce the core mechanics of board games like role playing and chance
        based outcomes.
        <br />
        <br />
        Are you a game creator? Just log in and add your games to the database
        to share them with the world. You can edit and delete them whenever you
        want. Don’t worry even if you’re not logged in you can still bookmark
        the games you like.
        <br />
        <br />
        We’re looking forward to hear your adventures!
      </StyledAppContent>
      <h3>Tech Stack</h3>
      <StyledTechWrapper>
        {techStacks.map((tech) => (
          <TechStack key={tech.name} {...tech} />
        ))}
      </StyledTechWrapper>
    </StyledSection>
  );
}

const StyledGreetings = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: 1px 0px 3px #e5e4e2;
  svg {
    color: #ff8200;
  }
`;

const StyledAppContent = styled.div`
  border: 1px ridge #111111;
  background-color: #e5e4e2;
  box-shadow: 3px 1px 5px #111111;
  padding: 1rem;
  margin: 0.5rem;
`;

const StyledTechWrapper = styled.div`
  padding-top: 0.5rem;
  display: inline-flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  padding: 6px 20px;
  cursor: pointer;
  color: black;
`;
