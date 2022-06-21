import SearchBar from "../SearchBar/SearchBar";
import "./SearchSection.css";

function SearchSection() {
  return (
    <div className="section-container">
      <h1 className="section-header"> Recipes of the Day </h1>
      <p className="section-content">
        We can do random card generation header can also be used for testing
        basically trying to fill space but a recipe of the week with randomised
        recipes could be good, if not.. can serve as a div that shows what we do
        and what clients can expect.{" "}
      </p>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchSection;
