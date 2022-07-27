import Welcome from '../Welcome/Welcome';
import BadgeBanner from '../BadgeBanner/BadgeBanner';
import SearchSection from '../SearchSection/SearchSection';
import RandomRecipes from '../Recipe/RandomRecipes';

function HomePage() {
	return (
		<div>
			<Welcome />
			<BadgeBanner />
			<SearchSection />
			<RandomRecipes />
		</div>
	);
}

export default HomePage;
