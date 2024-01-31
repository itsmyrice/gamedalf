import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

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
      <StyledLink href="/">
        <FaArrowLeft style={{ marginRight: "4px" }} />
        Back
      </StyledLink>
      <FavouriteButtonWrapper>
        <FavouriteButton
          toggleFavorite={() => toggleFavorite(game._id)}
          isFavorite={checkIsFavorite}
        />
      </FavouriteButtonWrapper>
      <StyledImageDisplay
        src={game.image}
        alt={game.name}
        width={400}
        height={210}
      ></StyledImageDisplay>
      <StyledDiv>
        <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>
        <StyledDesciption>{game.description}</StyledDesciption>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;
  position: relative;
`;

const StyledImageDisplay = styled.img`
  width: 100%;
  height: 50%;
`;

const StyledLink = styled(Link)`
  color: black;
  border: 1px solid white;
  border-radius: 20px;
  padding: 6px 20px;
  position: absolute;
  top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledYearDisplay = styled.p`
  color: #ff8200;
  font-weight: bold;
`;

const StyledDesciption = styled.p`
  color: white;
`;

const FavouriteButtonWrapper = styled.div``;
