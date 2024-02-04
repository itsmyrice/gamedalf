import Link from "next/link";
import styled from "styled-components";
import { BiGame } from "react-icons/bi";
import { techStacks } from "../../data/TechStack";
import TeamProfileCard from "@/components/TeamProfileCard";
import Image from "next/image";
export default function AboutUsPage() {
  return (
    <StyledSection>
      <StyledGreetings>
        <StyledTitle>
          Hello, fellow adventurer! We are the Team
          <br />
          <StyledSpan>
            <BiGame />
            ameDalf.
          </StyledSpan>
        </StyledTitle>
        <p>
          'It's here not only on the dawn of the 5th day, it's here whenever,
          wherever you need it.'
        </p>
      </StyledGreetings>
      <StyledDiv>
        <StyledSubtitle>Meet the Team</StyledSubtitle>
        <TeamProfileCard />
      </StyledDiv>
      <StyledDiv>
        <StyledSubtitle>Let us introduce our app.</StyledSubtitle>

        <StyledDes>
          Gamedalf is an app tailored to be your companion in the vast world of
          board games. It doesn’t matter if you are a collector of board games
          or just looking for something to play with your friends, Gamedalf is
          there for you. You can choose your game from professionally curated
          recommendations or can search for one.
          <br />
          <br />
          Don’t feel like sifting through hundreds of games? Just click the dice
          icon and you can start playing immediately. The game is designed to
          introduce the core mechanics of board games like role playing and
          chance based outcomes.
          <br />
          <br />
          Are you a game creator? Just log in and add your games to the database
          to share them with the world. You can edit and delete them whenever
          you want. Don’t worry even if you’re not logged in you can still
          bookmark the games you like.
          <br />
          <br />
          We’re looking forward to hear your adventures!
        </StyledDes>
      </StyledDiv>
      <StyledDiv>
        <StyledSubtitle>Tech Stack</StyledSubtitle>
        <StyledTechDiv>
          {techStacks.map((item) => (
            <StyledList key={item.name}>
              <StyledLinks href={item.link}>
                <StyledImage
                  src={item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <Styledtext>{item.name}</Styledtext>
              </StyledLinks>
            </StyledList>
          ))}
        </StyledTechDiv>
      </StyledDiv>
    </StyledSection>
  );
}
const StyledTechDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled(Image)`
  height: 50px;
  width: 50px;
`;
const Styledtext = styled.p`
  font-size: 16px;
  color: black;
`;

const StyledLinks = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledSection = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 100px 5% 200px 5%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
`;
const StyledGreetings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const StyledTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const StyledSubtitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  text-decoration: underline;
`;
const StyledDiv = styled.div`
  font-size: 20px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledDes = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  padding: 6px 20px;
  cursor: pointer;
  color: black;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #4231cc;
  }
`;
