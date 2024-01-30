import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import styled from "styled-components";


export const profiles = [
  {
    name: "Oguz Kabasakal",
    position: "Web Developer | Audio Engineer | Composer",
    bio: " I am Oguz from Darmstadt, studying to become a Web Developer at Neue Fische and working on my Master's Degree on Expanded Media at Hochschule Darmstadt.",
    imageUrl: "/images/oguz.jpg",
    socialNetworks: [
      {
        icon: <CgWebsite />,
        link: "https://github.com/kabaskill",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/kabaskill",
      },
    ],
  },
  {
    name: "Kristian Kenjeres",
    position: "Web Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero doloremque reprehenderit!!.",
    imageUrl: "/images/pirate.jpg",
    socialNetworks: [
      {
        icon: <CgWebsite />,
        link: "https://www.kenjeres.com/",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/kkenjeres",
      },
      {
        icon: <CiLinkedin />,
        link: "https://www.linkedin.com/in/kristiankenjeres/",
      },
    ],
  },
  {
    name: "Glory Ann Conwi",
    position: "Web Developer | Sales Assistant",
    bio: "I am Glory Ann Conwi from Hamburg, Germany. Currently, I am learning to become a Web Developer.",
    imageUrl: "/images/glory.jpg",
    socialNetworks: [
      {
        icon: <FaGithub />,
        link: "https://github.com/itsmyrice",
      },
      {
        icon: <TiSocialFacebook />,
        link: "https://www.facebook.com/gloryconwi/",
      },
      {
        icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/glrynn93/",
      },
    ],
  },
];

export function SocialNetwork({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}

export default function TeamProfiles({
  name,
  position,
  socialNetworks,
  bio,
  imageUrl,
}) {
  return (
    <StyledProfileWrapper>
      <Image src={imageUrl} width={130} height={150} alt={name} />
      <StyledProfileContent>
      <h4>{name}</h4>
      <p>{position}</p>
      <p>
        {socialNetworks.map((social, index) => (
          <SocialNetwork key={index} {...social} />
        ))}
      </p>
      </StyledProfileContent>
      <p>{bio}</p>
    </StyledProfileWrapper>
  );
}

const StyledProfileWrapper = styled.article`
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
const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  svg {
    font-size: 1.3rem;
    margin: 0 0.1rem;
    &:hover {
      color: #111111;;
    }
  }
`;