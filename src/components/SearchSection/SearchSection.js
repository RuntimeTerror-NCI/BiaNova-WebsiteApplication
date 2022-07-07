import SearchBar from '../SearchBar/SearchBar';
import SearchContainer from './SearchContainer';

function SearchSection() {
	return (
		<SearchContainer>
			<h1> Recipes of the Day </h1>
			<p>
				We can do random card generation header can also be used for testing basically trying to
				fill space but a recipe of the week with randomised recipes could be good, if not.. can
				serve as a div that shows what we do and what clients can expect.{' '}
			</p>

			<SearchBar />
		</SearchContainer>
	);
}

export default SearchSection;
