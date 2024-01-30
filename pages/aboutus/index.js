import TechStack from "@/components/TechStack";
import TeamProfile from "@/components/TeamProfile";
import { profiles } from "@/components/TeamProfile";
import { techStacks } from "@/components/TechStack";
import Link from "next/link";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiGame } from "react-icons/bi";

export default function AboutUsPage() {
  return (
    <StyledPageWrapper>
      <StyledLink href={"/"}>
        <IoIosArrowRoundBack />
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          distinctio ea voluptatibus perferendis cumque alias dolorem laboriosam
          quod veniam. Adipisci accusantium nulla optio fugiat fuga at velit
          saepe non corrupti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          distinctio ea voluptatibus perferendis cumque alias dolorem laboriosam
          quod veniam. Adipisci accusantium nulla optio fugiat fuga at velit
          saepe non corrupti?
        </p>
      </StyledAppContent>
      <h3>Tech Stack</h3>
      <StyledTechWrapper>
        {techStacks.map((tech) => (
          <TechStack key={tech.name} {...tech} />
        ))}
      </StyledTechWrapper>
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.section`
  padding-bottom: 7rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #111111;
  font-size: 1.8rem;
  display: flex;
  &:hover {
    color: #ff8200;
    border-left: 1px solid #111111;
  }
`;

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
