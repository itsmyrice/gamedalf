import styled from "styled-components";
import VerticalGameList from "@/components/VerticalGameList";

import { useState } from "react";
import useSWR from "swr";

export default function SearchPage({ isFavorite, toggleFavorite }) {
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
      <Input
        type="text"
        id="text"
        placeholder="Type name"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <VerticalGameList
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        data={searchedGames}
      />
    </>
  );
}

const Input = styled.input`
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  width: 80%;
  display: flex;
  margin: auto;
  &::placeholder {
    color: black;
    font-size: 12px;
  }
`;
