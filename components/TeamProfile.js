import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

import styled from "styled-components";

export const profiles = [
  {
    name: "Oguz Kabasakal",
    position: "Web Developer | Audio Engineer",
    bio: " Developing by day, slaying demons by night.",
    imageUrl: "/images/oguz.jpg",
    socialNetworks: [
      {
        icon: <TfiWorld />,
        link: "https://www.oguzkabasakal.com/",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/kabaskill",
      },
      {
        icon: <CiLinkedin />,
        link: "https://www.linkedin.com/in/oguzkabasakal/",
      },
      {
        icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/mr.kabaskill/",
      },
    ],
  },
  {
    name: "Kristian Kenjeres",
    position: "Web Developer | Instagram Influencer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero doloremque reprehenderit!!.",
    imageUrl: "/images/pirate.jpg",
    socialNetworks: [
      {
        icon: <TfiWorld />,
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
      {
        icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/kristiankenjeres/",
      },
    ],
  },
  {
    name: "Glory Ann Conwi",
    position: "Web Developer | Sales Assistant",
    bio: "Game don't make you violent, lag does",
    imageUrl: "/images/glory.jpg",
    socialNetworks: [
      {
        icon: <FaGithub />,
        link: "https://github.com/itsmyrice",
      },
      {
        icon: <CiLinkedin />,
        link: "https://www.linkedin.com/in/glory-ann-conwi-04409129a/",
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

export default function TeamProfile({
  name,
  position,
  socialNetworks,
  bio,
  imageUrl,
}) {
  return (
    <StyledCard>
      <StyledDiv>
        <StyledImage src={imageUrl} width={130} height={150} alt={name} />
        <StyledName>{name}</StyledName>
        <StyledPosition>{position}</StyledPosition>
        <StyledProfileContent>
          <StyledUl>
            {socialNetworks.map((social) => (
              <li key={social.link}>
                <SocialNetwork {...social} />
              </li>
            ))}
          </StyledUl>
        </StyledProfileContent>
        <p>{bio}</p>
      </StyledDiv>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  border: 1px solid white;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 20px 10px;
`;
const StyledName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const StyledPosition = styled.p`
  font-size: 16px;
  font-weight: 300;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
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
      color: #111111;
    }
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;
