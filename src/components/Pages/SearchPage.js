import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import RecipeFilter from "../Recipe Filter/RecipeFilter";
import styled from "styled-components";
import RandomRecipes from "../RandomRecipes/RandomRecipes";
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0.4rem;
  margin-left: 1.1rem;
  transition: background-color 0.2s ease-in-out;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 0.2rem;

  &:hover {
    background-color: #84aa08;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const SearchContainer = styled.div`
  width: 60%;
  margin: -2rem auto;
`;

const ResultsContainer = styled.div`
  margin: 50px;
  padding: 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  flex-basis: calc(100% / 5);
  background-color: white;
`;

function SearchPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchParams, setSearchParams] = useState({});

  const params = {
    query: "chicken",
    excludeIngredients: "",
    intolerances: [
      "dairy",
      "egg",
      "gluten",
      "peanut",
      "sesame",
      "seafood",
      "shellfish",
      "soy",
      "sulfite",
      "treeNut",
      "wheat",
    ],
    diets: {
      glutenFree: "gluten free",
      ketogenic: "ketogenic",
      vegetarian: "vegetarian",
      lactoVegetarian: "lacto-vegetarian",
      ovoVegetarian: "ovo-vegetarian",
      vegan: "vegan",
      pescetarian: "pescetarian",
      paleo: "paleo",
      primal: "primal",
      lowFODMAP: "low FODMAP",
      whole30: "whole 30",
    },

    instructionsRequired: "true",
    addRecipeInformation: "true",
    titleMatch: "",
    sort: "calories",
    sortDirection: "asc",

    nutrition: {
      minCarbs: "0",
      maxCarbs: "0",
      minProtein: "0",
      maxProtein: "0",
      minCalories: "0",
      maxCalories: "0",
      minFat: "0",
      maxFat: "0",
      minSaturatedFat: "0",
      maxSaturatedFat: "0",
      minSodium: "0",
      maxSodium: "0",
      minSugar: "0",
      maxSugar: `&maxSugar= ${null}`,
    },
    number: "10",
  };

  return (
    <div>
      <SearchBar />
      <SearchContainer>
        <Button onClick={() => setOpenFilter((prev) => !prev)}>Filter</Button>
      </SearchContainer>
      <RecipeFilter
        searchParams={setSearchParams}
        params={params}
        open={openFilter}
      />
      {console.log(searchParams)}
      <ResultsContainer>
        <RandomRecipes />
        <RandomRecipes />
        <RandomRecipes />
        <RandomRecipes />
        <RandomRecipes />
        <RandomRecipes />
      </ResultsContainer>
    </div>
  );
}

export default SearchPage;
