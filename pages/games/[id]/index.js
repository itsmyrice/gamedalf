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
        width={200}
        height={200}
      ></StyledImageDisplay>
      <StyledDiv>
        <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>
        <StyledDesciption>{game.description}</StyledDesciption>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 100px 5% 200px 5%;
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
`;

const StyledYearDisplay = styled.p`
  color: #ff8200;
  font-weight: bold;
`;

const StyledDesciption = styled.p`
  color: black;
  font-size: 16px;
`;

const FavouriteButtonWrapper = styled.div``;
