import VerticalGameList from "@/components/VerticalGameList";
import styled from "styled-components";
import useSWR from "swr";
import { CiFolderOff } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { StyledSection } from "../../styles";
export default function FavoritesPage({
  isFavorite,
  toggleFavorite,
  localGameData,
  showModal,
}) {
  const { data, isLoading, error } = useSWR("/api/games");

  if (!data || isLoading) return <small>Loading...</small>;
  if (error)
    return <small>Oops! Something went wrong. Please try again.</small>;

  const favoriteGames = localGameData
    .filter((game) => game.isFavorite)
    .map((game) => game.id);
  const favoriteGamesData = data.filter((game) =>
    favoriteGames.includes(game._id)
  );

  return (
    <StyledSection>
      <StyledTitle>
        <FaRegBookmark />
        My Favorites
      </StyledTitle>
      {favoriteGamesData.length === 0 ? (
        <StyledText>
          <CiFolderOff />
          You have no favorites yet.
        </StyledText>
      ) : (
        <VerticalGameList
          data={favoriteGamesData}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          showModal={showModal}
        />
      )}
    </StyledSection>
  );
}

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: auto;
`;
