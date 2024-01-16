// import SearchInput from "@/components/search/SearchInput";
import GameSearchedList from "@/components/search/GameSearchedList";

import { useState } from "react";
import useSWR from "swr";

export default function SearchPage() {
  const { data } = useSWR("./api/games");
  const [searchInput, setSearchInput] = useState("");

  const searchedGames =
    searchInput.length > 0
      ? data.filter((game) =>
          `${game.name}`.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

  return (
    <>
      {/* <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} /> */}

      <Input
      type="text"
      id="text"
      placeholder="Insert name"
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
    />
      <GameSearchedList data={searchedGames} />
    </>
  );
}


const Input = styled.input`
  height: 4rem;
  margin-top: 2rem;
  margin-left: 20%;
  width: 60%;
  font-size: 20px;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  box-shadow: 3px 3px 5px grey;
`;
