import VerticalGameList from "@/components/VerticalGameList";
import styled from "styled-components";
import useSWR from "swr";
import { CiFolderOff } from "react-icons/ci";

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
    <>
      <StyledTitle>My Favorites</StyledTitle>
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
    </>
  );
}

const StyledTitle = styled.h2`
  margin: 2rem 0;
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
`;
