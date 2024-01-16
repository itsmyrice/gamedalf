import Search from "@/components/search/SearchInput";
import GameSearchList from "@/components/search/GameSearchedList.js";
import { useState } from "react";
import useSWR from "swr";

export default function SearchPage() {
  const { data } = useSWR("./api/games");
  const [searchInput, setSearchInput] = useState("");
  console.log(data);

  const searchedGames =
    searchInput.length > 0
      ? data.filter((post) => `${post.description}`.includes(searchInput))
      : [];
  console.log(searchedGames);

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <GameSearchList data={searchedGames} />
    </>
  );
}
