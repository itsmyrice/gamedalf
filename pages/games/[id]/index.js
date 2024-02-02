import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegStar, FaRegCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { GiTabletopPlayers } from "react-icons/gi";

import Image from "next/image";
export default function DetailsPage({ isFavorite, toggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: game,
    isLoading,
    error,
  } = useSWR(id ? `/api/games/${id}` : null);

  if (!id) return <small>ID not found</small>;
  if (isLoading || error) return <small>loading...</small>;

  const checkIsFavorite = isFavorite(game._id);
  return (
    <StyledSection>
      <StyledLinkButton href="/">
        <FaArrowLeft />
        Back
      </StyledLinkButton>
      <StyledWrapperBackground>
        <NestedWrapper>
          <StyledTitle>{game.name}</StyledTitle>
          <StyledWrapperIntro>
            <StyledImage
              src={game.image}
              alt={game.name}
              width={200}
              height={200}
            />
            <FavouriteButton
              toggleFavorite={() => toggleFavorite(game._id)}
              isFavorite={checkIsFavorite}
            />
            <StyledInfoWrapper>
              <StyledStats>
                <FaRegStar />
                {game.rating.slice(0, 3)}
              </StyledStats>
              <StyledStats>
                Age
                {game.minAge} +
              </StyledStats>
              <StyledStats>
                <FaRegCalendarAlt />
                {game.yearpublished}
              </StyledStats>
              <StyledStats>
                <IoTimeOutline />
                {game.playtime}
              </StyledStats>
              <StyledStats>
                <GiTabletopPlayers />
                <p>
                  {game.minPlayers} - {game.maxPlayers}
                </p>
              </StyledStats>
            </StyledInfoWrapper>
          </StyledWrapperIntro>
          <StyledWrapperAdditional>
            <StyledCategory>
              <StyledSubtitleCategory>Categories</StyledSubtitleCategory>
              <StyledTextCategories>
                {game.categories.slice(0, 5).join(", ")}
              </StyledTextCategories>
            </StyledCategory>
            <StyledDescription>
              <StyledSubtitleDesc>Description</StyledSubtitleDesc>
              <StyledTextDesc>{game.description}</StyledTextDesc>
            </StyledDescription>
          </StyledWrapperAdditional>
          {game.userCreated ? <p>{game.userCreated}</p> : ""}
        </NestedWrapper>
      </StyledWrapperBackground>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

const StyledLinkButton = styled(Link)`
  border: 1px solid white;
  border-radius: 20px;
  padding: 6px 20px;
  cursor: pointer;
  color: black;
  display: flex;
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  gap: 4px;
  align-items: center;
`;

const StyledWrapperBackground = styled.div`
  background: white;
  border-radius: 20px;
`;

const NestedWrapper = styled.div`
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  background: white;
  border-radius: 40px;
  margin: 20px 0;
`;

const StyledWrapperIntro = styled.div`
  position: relative;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  width: 100%;
  min-height: 350px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
`;

const StyledInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border-radius: 0 0 20px 20px;
  color: black;
  padding: 20px;
`;

const StyledWrapperAdditional = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 20px;
  background: #21272a;
`;
const StyledCategory = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 20px;
  background: white;
`;
const StyledSubtitleCategory = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
`;
const StyledTextCategories = styled.p`
  font-size: 18px;
  word-spacing: 5px;
  color: #3c4649;
  word-wrap: break-word;
  color: black;
`;
const StyledDescription = styled.div`
  border-radius: 20px;
  padding: 20px;
`;
const StyledSubtitleDesc = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  color: white;
`;

const StyledTextDesc = styled.p`
  font-size: 18px;
  word-spacing: 5px;
  color: #3c4649;
  word-wrap: break-word;
  color: white;
`;

const StyledStats = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
`;
