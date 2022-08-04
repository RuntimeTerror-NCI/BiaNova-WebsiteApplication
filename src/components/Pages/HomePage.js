import Welcome from '../Welcome/Welcome';
import BadgeBanner from '../BadgeBanner/BadgeBanner';
import SearchSection from '../SearchSection/SearchSection';
import RandomRecipes from '../Recipe/RandomRecipes';

function HomePage({ token, user, recipesLiked, setRecipesLiked }) {
	return (
		<div>
			<Welcome />
			<BadgeBanner />
			<SearchSection recipesLiked={recipesLiked} setRecipesLiked={setRecipesLiked} />
			<RandomRecipes
				token={token}
				user={user}
				recipesLiked={recipesLiked}
				setRecipesLiked={setRecipesLiked}
			/>
		</div>
	);
}

export default HomePage;
