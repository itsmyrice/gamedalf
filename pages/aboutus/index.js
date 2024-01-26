import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiGame } from "react-icons/bi";

import styled from "styled-components";

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
      <ProfileWrapper>
        <Image
          src="/images/oguz.jpg"
          width={130}
          height={150}
          alt="oguz image'"
        />
        <ProfileContent>
          <h4>Oguz Kabasakal</h4>
          <p>Web Developer</p>
          <p>Audio Engineer</p>
          <p>Composer</p>
          <p>Gamer</p>
          <p>Social Network:</p>
          <StyledAnchorTags>
            <a
              href="https://github.com/kabaskill"
              target="_blank"
              rel="github profile"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="http://oguzkabasakal.com/"
              target="_blank"
              rel="personal website"
            >
              <CgWebsite />
            </a>
          </StyledAnchorTags>
        </ProfileContent>
        <p>
          I am Oguz from Darmstadt, studying to become a Web Developer at Neue
          Fische and working on my Master's Degree on Expanded Media at
          Hochschule Darmstadt.
        </p>
      </ProfileWrapper>
      <ProfileWrapper>
        <Image
          src="/images/pirate.jpg"
          width={130}
          height={150}
          alt="pirate image'"
        />
        <ProfileContent>
          <h4>Kristian Kenjeres</h4>
          <p>Web Developer</p>
          <p>Social Network:</p>
          <StyledAnchorTags>
            <a
              href="https://github.com/kkenjeres"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.kenjeres.com/"
              target="_blank"
              rel="personal website"
            >
              <CgWebsite />
            </a>
            <a
              href="https://www.linkedin.com/in/kristiankenjeres/"
              target="_blank"
              rel="linkedin profile"
            >
              <CiLinkedin />
            </a>
          </StyledAnchorTags>
        </ProfileContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero
          doloremque reprehenderit!!
        </p>
      </ProfileWrapper>
      <ProfileWrapper>
        <Image
          src="/images/glory.jpg"
          width={130}
          height={150}
          alt="glory image"
        />
        <ProfileContent>
          <h4>Glory Ann Conwi</h4>
          <p>Web Developer</p>
          <p>Gamer</p>
          <p>Sales Assistant</p>
          <p>Social Network:</p>
          <StyledAnchorTags>
            <a
              href="https://github.com/itsmyrice"
              target="_blank"
              rel="github profile"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/gloryconwi/"
              target="_blank"
              rel="facebook profile"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.instagram.com/glrynn93/"
              target="_blank"
              rel="instagram profile"
            >
              <CiInstagram />
            </a>
          </StyledAnchorTags>
        </ProfileContent>
        <p>
          I am Glory Ann Conwi from Hamburg, Germany. Currently, I am learning
          to become a Web Developer.
        </p>
      </ProfileWrapper>

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
        <Image src="/images/js.jpg" width={50} height={50} alt="js image" />
        <Image
          src="/images/react.jpg"
          width={50}
          height={50}
          alt="react image"
        />
        <Image src="/images/git.jpg" width={50} height={50} alt="git image" />
        <Image
          src="/images/nextjs.jpg"
          width={50}
          height={50}
          alt="nextjs image"
        />
        <Image
          src="/images/styled.jpg"
          width={50}
          height={50}
          alt="styled image"
        />
        <Image
          src="/images/useswr.jpg"
          width={50}
          height={50}
          alt="useswr image"
        />
        <Image
          src="/images/mongodb.jpg"
          width={50}
          height={50}
          alt="mongodb image"
        />
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

const ProfileWrapper = styled.article`
  border: 1px ridge #111111;
  box-shadow: 3px 1px 5px #111111;
  background-color: #e5e4e2;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 0.5rem;
  column-gap: 1rem;
  align-items: center;
  margin: 0.5rem;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

const StyledAnchorTags = styled.span`
  font-size: 1.4rem;
  display: flex;
  column-gap: 0.5rem;
  svg {
    &:hover {
      color: #111111;
    }
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
