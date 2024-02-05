import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import { FaRegStar, FaRegCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { GiTabletopPlayers } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function DetailsPage({ isFavorite, toggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const session = useSession();

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
      <BackButton />

      <StyledWrapperBackground>
        <NestedWrapper>
          <StyledTitle>{game.name}</StyledTitle>
          <StyledWrapperIntro>
            <StyledImage
              src={game.image}
              alt={game.name}
              width={500}
              height={500}
            />
            <FavouriteButton
              toggleFavorite={() => toggleFavorite(game._id)}
              isFavorite={checkIsFavorite}
            />
            <StyledInfoWrapper>
              <StyledStats>
                <FaRegStar />
                {!game.userCreated ? game.rating.slice(0, 3) : "No ratings"}
              </StyledStats>
              <StyledStats>
                <FaBirthdayCake />
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
                {game.minPlayers} - {game.maxPlayers}
              </StyledStats>
              <StyledStats>
                {game.userCreated ? (
                  <>
                    <StyledAvatar
                      src={game.user.image}
                      alt=""
                      width={50}
                      height={50}
                    />
                    Created by<HiglightSpan>{game.user.name}</HiglightSpan>
                  </>
                ) : (
                  ""
                )}
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
              <StyledTextDescription>{game.description}</StyledTextDescription>
            </StyledDescription>
          </StyledWrapperAdditional>
        </NestedWrapper>
      </StyledWrapperBackground>
      <StyledButton onClick={() => router.back()}>
        <IoIosArrowRoundBack />
      </StyledButton>
    </StyledSection>
  );
}

const HiglightSpan = styled.span`
  text-decoration: underline;
  color: #707070;
`;
const StyledAvatar = styled(Image)`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const StyledSection = styled.section`
  padding: 100px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

const StyledWrapperBackground = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
`;

const NestedWrapper = styled.div`
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  background: white;
  border-radius: 40px;
  padding-bottom: 20px;
  margin: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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
  color: black;
  padding: 20px 5%;
`;

const StyledWrapperAdditional = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 20px;
`;
const StyledCategory = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 20px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const StyledSubtitleCategory = styled.p`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
`;
const StyledTextCategories = styled.p`
  font-size: 16px;
  word-spacing: 2px;
  color: #3c4649;
  word-wrap: break-word;
  color: black;
`;
const StyledDescription = styled.div`
  border-radius: 20px 20px 20px 20px;
  padding: 20px;

  background: #aa770440;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const StyledSubtitleDesc = styled.p`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
`;

const StyledTextDescription = styled.p`
  font-size: 16px;
  word-spacing: 3px;
  word-wrap: break-word;
  color: black;
`;

const StyledStats = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #111111;
  font-size: 2rem;
  position: relative;
  margin: 0.5rem 0;
  right: 45%;
`;
