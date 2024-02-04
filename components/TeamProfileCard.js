import Image from "next/image";
import styled from "styled-components";
import { profiles } from "../data/ProfileData";
import Link from "next/link";
export default function TeamProfile() {
  return (
    <>
      {profiles.map((person) => (
        <StyledCard key={person.name}>
          <StyledImage
            src={person.imageUrl}
            width={130}
            height={150}
            alt={person.name}
          />
          <StyledName>{person.name}</StyledName>
          <StyledPosition>{person.position}</StyledPosition>
          <StyledList>
            {person.socialNetworks.map((social, index) => (
              <li key={index}>
                <StyledLink
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </StyledLink>
              </li>
            ))}
          </StyledList>
          <StyledBio>{person.bio}</StyledBio>
        </StyledCard>
      ))}
    </>
  );
}

const StyledCard = styled.div`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  border: 1px solid white;
  padding: 20px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const StyledPosition = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const StyledBio = styled.p`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: black;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;
