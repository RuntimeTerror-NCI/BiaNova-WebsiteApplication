import SearchBar from '../SearchBar/SearchBar';
import RecipeFilter from '../Recipe Filter/RecipeFilter';
import RecipeList from '../RecipeResult/RecipeList';

function RecipeSearch() {
	return (
		<div>
			<SearchBar />
			<RecipeFilter />
			<RecipeList />
		</div>
	);
}

export default RecipeSearch;
