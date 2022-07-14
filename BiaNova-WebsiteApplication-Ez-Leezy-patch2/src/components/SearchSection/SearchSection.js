import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

function SearchSection() {
  return (
    <SearchContainer>
      <h1> Recipes of the Day </h1>
      <p>
        We can do random card generation header can also be used for testing
        basically trying to fill space but a recipe of the week with randomised
        recipes could be good, if not.. can serve as a div that shows what we do
        and what clients can expect.{" "}
      </p>

      <SearchBar />
    </SearchContainer>
  );
}
const SearchContainer = styled.div`
  text-align: center;
  margin: auto;
  width: 75%;

  h1 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  p {
    width: 80%;
    margin: auto;
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
export default SearchSection;
