import styled from "styled-components";
import VerticalGameList from "@/components/VerticalGameList";

import Fuse from "fuse.js";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { FaTimes } from "react-icons/fa";

export default function SearchPage({ isFavorite, toggleFavorite }) {
  const { data } = useSWR("./api/games");
  const [searchQuery, setSearchQuery] = useState("");

  const [showFilters, setShowFilters] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const [formData, setFormData] = useState({
    keyword: "",
    categories: "",
    rating: "",
    minAge: "",
    players: "",
    yearpublished: "",
    playtime: "",
  });

  function searchedGames(query) {
    const fuseOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      minMatchCharLength: 2,
      // location: 0,
      threshold: 0.4,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ["name", "description"],
    };

    const fuse = new Fuse(data, fuseOptions);

    if (query.length > 0) {
      const fuzzy = fuse.search(query);
      const fuzzyResults = fuzzy.map((object) => object.item);
      console.log("🚀  fuzzyResults:", fuzzyResults);
      return fuzzyResults;
    } else {
      return [];
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const allInputsEmpty = Object.values(formData).every(
      (value) => value === ""
    );

    if (allInputsEmpty) {
      alert("Please fill at least one field");
      return;
    }

    let updatedResults = [...data];

    if (formData.keyword !== "") {
      updatedResults = updatedResults.filter((game) =>
        game.name.toLowerCase().includes(formData.keyword.toLowerCase())
      );
    }

    if (formData.categories !== "") {
      updatedResults = updatedResults.filter((game) =>
        game.categories.some((category) =>
          category.toLowerCase().includes(formData.categories.toLowerCase())
        )
      );
    }

    if (formData.rating !== "") {
      updatedResults = updatedResults.filter(
        (game) => +game.rating >= +formData.rating
      );
    }

    if (formData.minAge !== "") {
      updatedResults = updatedResults.filter(
        (game) => +game.minAge >= +formData.minAge
      );
    }

    if (formData.players !== "") {
      updatedResults = updatedResults.filter(
        (game) =>
          +game.minPlayers <= +formData.players &&
          +game.maxPlayers >= +formData.players
      );
    }

    if (formData.playtime !== "") {
      updatedResults = updatedResults.filter(
        (game) =>
          +game.minPlaytime <= +formData.playtime &&
          +game.maxPlaytime >= +formData.playtime
      );
    }

    if (formData.yearpublished !== "") {
      updatedResults = updatedResults.filter(
        (game) => +game.yearpublished === +formData.yearpublished
      );
    }

    setFilteredResults(updatedResults);
  }

  useEffect(() => {
    console.log("🚀  filteredResults:", filteredResults);
  }, [filteredResults]);

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
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      <StyledButton type="button" onClick={() => setShowFilters(!showFilters)}>
        Advanced Search
      </StyledButton>

      {showFilters && (
        <>
          <StyledForm onSubmit={handleSubmit}>
            <CloseButton onClick={() => setShowFilters(!showFilters)} />
            <Label htmlFor="keyword">Keyword</Label>
            <FormInput
              type="text"
              name="keyword"
              id="keyword"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="categories">Categories</Label>
            <FormInput
              type="text"
              name="categories"
              id="categories"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="rating">Rating</Label>
            <FormInput
              type="number"
              name="rating"
              id="rating"
              step="0.1"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="minAge">Minimum Age</Label>
            <FormInput
              type="number"
              name="minAge"
              id="minAge"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="players">Players</Label>
            <FormInput
              type="number"
              name="players"
              id="players"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="playtime">Playtime (minutes)</Label>
            <FormInput
              type="number"
              name="playtime"
              id="playtime"
              defaultValue={""}
              onChange={handleInputChange}
            />
            <Label htmlFor="yearpublished">Release Year (yyyy)</Label>
            <FormInput
              type="number"
              name="yearpublished"
              id="yearpublished"
              defaultValue={""}
              onChange={handleInputChange}
            />

            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </>
      )}

      <VerticalGameList
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        data={searchedGames(searchQuery)}
      />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin-block: 1rem;
`;

const SearchInput = styled.input`
  height: 3rem;
  margin-top: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  box-shadow: 3px 3px 5px grey;
`;

const FormInput = styled.input`
  border: 1px solid black;
  padding: 4px;
  margin-top: 4px;
`;

const Label = styled.label`
  margin: 10px 0px;
  font-size: 14px;
`;

const StyledButton = styled.button`
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

const CloseButton = styled(FaTimes)`
  align-self: flex-end;
  cursor: pointer;
  font-size: 20px;
`;
