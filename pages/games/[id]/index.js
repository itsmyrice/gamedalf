import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import FavouriteButton from "@/components/FavouriteButton";
import Link from "next/link";

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
      <StyledFavoriteButton>
        <FavouriteButton
          toggleFavorite={() => toggleFavorite(game._id)}
          isFavorite={checkIsFavorite}
        />
      </StyledFavoriteButton>
      <StyledImageDisplay
        src={game.image}
        alt={game.name}
        width={400}
        height={210}
      ></StyledImageDisplay>
      <StyledLink href="/">⬅️ Back</StyledLink>
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
  align-items: center;
  background-color: #e6e6fa;
`;

const StyledImageDisplay = styled.img`
  margin: 2rem 0;
  border: 1px inherit black;
  box-shadow: 2px 3px 5px #ccccff;
  background-color: #ccccff;
  border-radius: 1rem;
  padding: 0.7rem;
  width: 50%;
  height: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111111;
  margin-right: 8rem;
  word-spacing: 5px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px ridge #ff8200;
  }
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
  color: #111111;
  border-top: 1px inset black;
  border-bottom: 1px inset black;
  padding: 1rem 40px 1rem 1rem;
  text-align: center;
`;

const StyledFavoriteButton = styled.div`
  position: relative;
  left: 120px;
  margin: 10px;
`;
