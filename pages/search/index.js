import styled from "styled-components";
import VerticalGameList from "@/components/VerticalGameList";

import { useState } from "react";
import useSWR from "swr";

export default function SearchPage({ isFavorite, toggleFavorite }) {
  const { data, isLoading } = useSWR("./api/games");
  const [searchInput, setSearchInput] = useState("");

  const [showFilters, setShowFilters] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const [formData, setFormData] = useState({
    keyword: "",
    minAge: "",
    players: "",
    yearpublished: "",
    playtime: "",
  });

  const searchedGames =
    searchInput.length > 0
      ? data.filter((game) =>
          `${game.name}`.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

  function handleSubmit(event) {
    event.preventDefault();

    formData.keyword &&
      setFilteredResults(
        data.filter(
          (game) => game.name.toLowerCase() === formData.keyword.toLowerCase()
        ),
        ...filteredResults
      );

    formData.minAge &&
      setFilteredResults(
        data.filter((game) => +game.minAge >= +formData.minAge),
        ...filteredResults
      );

    formData.players &&
      setFilteredResults(
        data.filter((game) => game.minPlayers <= formData.players && game.maxPlayers >= formData.players),
        ...filteredResults
      );

    formData.yearpublished &&
      setFilteredResults(
        data.filter(
          (game) => game.yearpublished === formData.yearpublished
        ),
        ...filteredResults
      );

    formData.playtime &&
      setFilteredResults(
        data.filter(
          (game) => game.minPlaytime <= formData.playtime && game.maxPlaytime >= formData.playtime
        ),
        ...filteredResults
      );

    console.log("🚀  filteredResults:", filteredResults);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <SearchInput
        type="text"
        id="text"
        placeholder="Insert name"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <button type="button" onClick={() => setShowFilters(!showFilters)}>
        Advanced Search
      </button>

      {showFilters && (
        <>
          <StyledForm onSubmit={handleSubmit}>
            <Label htmlFor="keyword">Keyword</Label>
            <Input
              type="text"
              name="keyword"
              id="keyword"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="minAge">Minimum Age</Label>
            <Input
              type="number"
              name="minAge"
              id="minAge"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="players">Players</Label>
            <Input
              type="number"
              name="player"
              id="players"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="yearpublished">Release Year (yyyy)</Label>
            <Input
              type="number"
              name="yearpublished"
              id="yearpublished"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="playtime">Playtime (minutes)</Label>
            <Input
              type="number"
              name="playtime"
              id="playtime"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        </>
      )}

      <VerticalGameList
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        data={searchedGames}
      />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  margin-block: 1rem;
`;

const SearchInput = styled.input`
  height: 4rem;
  margin-top: 2rem;
  width: 60%;
  font-size: 20px;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  box-shadow: 3px 3px 5px grey;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 4px;
  margin-top: 4px;
`;

const Label = styled.label`
  margin: 10px 0px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  border: 1px solid #0011ff;
  background-color: #0011ff;
  color: white;
  padding: 10px 40px;
  border-radius: 40px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  align-self: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #0011ff;
    transition: 0.3s ease-in-out;
  }
`;
