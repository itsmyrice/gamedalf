import SearchInput from "../components/search/SearchInput"
import GameSearchList from "/components/search/GameSearchedList.js";
import { useState } from "react";
import useSWR from "swr";

export default function SearchPage() {
  const { data } = useSWR("./api/games");
  const [searchInput, setSearchInput] = useState("");
  
  const searchedGames =
    searchInput.length > 0
      ? data.filter((game) => `${game.name}`.toLowerCase().includes(searchInput.toLowerCase()))
      : [];

  return (
    <>
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <GameSearchList data={searchedGames} />
    </>
  );
}
