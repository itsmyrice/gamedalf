import VerticalGameList from "@/components/VerticalGameList";
import useSWR from "swr";

export default function FavoritesPage({ isFavorite, toggleFavorite, localGameData }) {
    const { data, isLoading, error } = useSWR("/api/games")

    if(!data || isLoading ) return <small>Loading...</small>
    if(error) return <small>Oops! Something went wrong. Please try again.</small>

    const favoriteGames = localGameData.filter((game) => game.isFavorite === true)
    

     const favoriteGamesData = favoriteGames.filter((game) => data.filter((item) => item._id === game.id))
     console.log(favoriteGamesData)


  return (
  <div>
        <h2>My Favorites</h2>      
        {favoriteGames.length === 0 ? (
            <p>You have no favorites yet.</p>
        ) : (
        <VerticalGameList data={favoriteGamesData} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
        )}
  </div>
  )
  
    }
