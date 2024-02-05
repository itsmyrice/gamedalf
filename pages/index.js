import useSWR from "swr";
import HorizontalGameList from "@/components/HorizontalGameList";
import { styled } from "styled-components";
import Footer from "@/components/Footer";
import { fuzzySearch } from "@/utils/fuzzySearch";

export default function HomePage({ isFavorite, toggleFavorite, showModal }) {
  const { data, error, isLoading } = useSWR("/api/games");

  if (error)
    return (
      <small>
        "Sorry, we couldn't retrieve the game data at the moment. Please try
        again later."
      </small>
    );

  if (!data || isLoading) return <small>loading...</small>;

  const fantasyGames = fuzzySearch(data, "fantasy", 0.3, ["categories"]);
  const economyGames = fuzzySearch(data, "economy", 0.3, ["categories"]);
  const warfareGames = fuzzySearch(data, "warfare", 0.3, ["categories"]);
  const chessGames = fuzzySearch(data, "chess", 0.3, ["categories"]);
  const userCreatedGames = data.filter((game) => game.userCreated);
  const topRatedGames = data
    .toSorted((gameA, gameB) => gameB.rating - gameA.rating)
    .slice(0, 10);

  return (
    <StyledWrapper>
      {data && (
        <>
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={topRatedGames}
            categorieId="Top 10 Games"
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={fantasyGames}
            categorieId="Fantasy"
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={userCreatedGames}
            categorieId="Player Creations"
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={economyGames}
            categorieId="Economy"
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={warfareGames}
            categorieId="Warfare"
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={chessGames}
            categorieId="Chess"
            listLength={5}
            showModal={showModal}
          />
        </>
      )}
      <Footer />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  margin: 100px 0 150px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
