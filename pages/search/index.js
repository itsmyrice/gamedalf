import styled from "styled-components";
import VerticalGameList from "@/components/VerticalGameList";
import Fuse from "fuse.js";
import { useState } from "react";
import useSWR from "swr";
import { FaTimes } from "react-icons/fa";

const INITIAL_FILTERS = {
  name: "",
  categories: "",
  rating: "",
  minAge: "",
  players: "",
  yearpublished: "",
  playtime: "",
};

export default function SearchPage({ isFavorite, toggleFavorite }) {
  const { data } = useSWR("./api/games");
  const [searchQuery, setSearchQuery] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filteredGameList = filterGames(data);   

  function fuzzySearch(data, query, threshold, keys) {
    const fuseOptions = {
      threshold: threshold,
      keys: keys,
    };

    const fuse = new Fuse(data, fuseOptions);

    if (query.length > 0) {
      const fuzzy = fuse.search(query);
      const fuzzyResults = fuzzy.map((object) => object.item);

      return fuzzyResults;
    } else {
      return [];
    }
  }

  function filterGames(data) {
    const filteredResultsName = filters.name
      ? fuzzySearch(data, filters.name, 0.6, ["name"])
      : data;

    const filteredResultsCategory = filters.categories
      ? fuzzySearch(filteredResultsName, filters.categories, 0.1, [
          "categories",
        ])
      : filteredResultsName;

    const filteredResultsRating = filters.rating
      ? filteredResultsCategory.filter(
          (game) => +game.rating >= +filters.rating
        )
      : filteredResultsCategory;

    const filteredResultsMinAge = filters.minAge
      ? filteredResultsRating.filter((game) => +game.minAge >= +filters.minAge)
      : filteredResultsRating;

    const filteredResultsPlayers = filters.players
      ? filteredResultsMinAge.filter(
          (game) =>
            +game.minPlayers <= +filters.players &&
            +game.maxPlayers >= +filters.players
        )
      : filteredResultsMinAge;

    const filteredResultsPlaytime = filters.playtime
      ? filteredResultsPlayers.filter(
          (game) =>
            +game.minPlaytime <= +filters.playtime &&
            +game.maxPlaytime >= +filters.playtime
        )
      : filteredResultsPlayers;

    const filteredResultsYear = filters.yearpublished
      ? filteredResultsPlaytime.filter(
          (game) => +game.yearpublished === +filters.yearpublished
        )
      : filteredResultsPlaytime;

    return filteredResultsYear;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const allInputsEmpty = Object.values(filters).every(
      (value) => value === ""
    );

    if (allInputsEmpty) {
      alert("Please fill at least one field");
      return;
    }

    if (filteredGameList.length === 0) {
      alert("No results");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevfilters) => ({ ...prevfilters, [name]: value }));
  };

  return (
    <>
      {!showFilters && (
        <>
          <SearchInput
            type="text"
            id="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <StyledButton
            type="button"
            onClick={() => {
              setSearchQuery("");

              setShowFilters(true);
            }}
          >
            Advanced Search
          </StyledButton>
        </>
      )}

      {showFilters && (
        <>
          <StyledForm onSubmit={handleSubmit}>
            <CloseButton
              onClick={() => {
                setShowFilters(false);
                setFilters(INITIAL_FILTERS);
              }}
            />
            <h2>Advanced Search</h2>
            <Label htmlFor="name">Name</Label>
            <FormInput
              type="text"
              name="name"
              id="name"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="Exact name"
            />
            <Label htmlFor="categories">Category</Label>
            <FormInput
              type="text"
              name="categories"
              id="categories"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="Genre, theme, etc."
            />
            <Label htmlFor="rating">Rating</Label>
            <FormInput
              type="number"
              name="rating"
              id="rating"
              step="0.1"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="(0-10)"
            />
            <Label htmlFor="minAge">Minimum Age</Label>
            <FormInput
              type="number"
              name="minAge"
              id="minAge"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="(1-99)"
            />
            <Label htmlFor="players">Players</Label>
            <FormInput
              type="number"
              name="players"
              id="players"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="min. 1"
            />
            <Label htmlFor="playtime">Playtime</Label>
            <FormInput
              type="number"
              name="playtime"
              id="playtime"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="in minutes"
            />
            <Label htmlFor="yearpublished">Release Year</Label>
            <FormInput
              type="number"
              name="yearpublished"
              id="yearpublished"
              defaultValue={""}
              onChange={handleInputChange}
              placeholder="yyyy"
            />

            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </>
      )}

      <VerticalGameList
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        data={
          showFilters
            ? filteredGameList
            : fuzzySearch(data, searchQuery, 0.8, ["name"])
        }
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
  width: 100%;
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
