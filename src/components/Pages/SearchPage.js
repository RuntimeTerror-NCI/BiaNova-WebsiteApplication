import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeFilter from '../Recipe Filter/RecipeFilter';
import styled from 'styled-components';
import RecipeList from '../RecipeResult/RecipeList';
import axios from 'axios';

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
	const [query, setQuery] = useState();
	const [recipeResults, setRecipeResults] = useState([]);
	const [recipeDetails, setRecipeDetails] = useState('');

	const params = {
		query: 'chicken',
		excludeIngredients: '',
		intolerances: [
			'dairy',
			'egg',
			'gluten',
			'peanut',
			'sesame',
			'seafood',
			'shellfish',
			'soy',
			'sulfite',
			'treeNut',
			'wheat',
		],
		diets: {
			glutenFree: 'gluten free',
			ketogenic: 'ketogenic',
			vegetarian: 'vegetarian',
			lactoVegetarian: 'lacto-vegetarian',
			ovoVegetarian: 'ovo-vegetarian',
			vegan: 'vegan',
			pescetarian: 'pescetarian',
			paleo: 'paleo',
			primal: 'primal',
			lowFODMAP: 'low FODMAP',
			whole30: 'whole 30',
		},

		instructionsRequired: 'true',
		addRecipeInformation: 'true',
		titleMatch: '',
		sort: 'calories',
		sortDirection: 'asc',

		nutrition: {
			minCarbs: '',
			maxCarbs: '',
			minProtein: '',
			maxProtein: '',
			minCalories: '',
			maxCalories: '',
			minFat: '',
			maxFat: '',
			minSaturatedFat: '',
			maxSaturatedFat: '',
			minSodium: '',
			maxSodium: '',
			minSugar: '',
			maxSugar: '',
		},
		number: '10',
	};

	const handleParams = e => {
		let param = e.target.value;
		setQuery(param);
	};

	const clearSearchResults = () => {
		setRecipeResults([]);
	};

	const saveSearchResults = results => {
		setRecipeResults(results);
	};

	const updateRecipeDetails = id => {
		setRecipeDetails({ ...recipeDetails, id: id });
		console.log('[updateRecipeDetails]: ', recipeDetails);
	};

	const getRecipeId = id => {
		let selectedRecipe = id;
		// updateRecipeDetails(selectedRecipe);
		setRecipeDetails(selectedRecipe);
		console.log('[getRecipeId]: ', recipeDetails);
		console.log(selectedRecipe);
	};

	const handleShowRecipe = id => {
		getRecipeId(id);
		axios
			.get(`https://bianova.herokuapp.com/externalApiID/${recipeDetails}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
					'Access-Control-Allow-Headers':
						'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers',
				},
			})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handleSearch = e => {
		e.preventDefault();
		axios
			.get(`https://bianova.herokuapp.com/externalApi/${query}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
					'Access-Control-Allow-Headers':
						'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers',
				},
			})
			.then(response => {
				let results = response.data.results;
				console.log(response);
				if (recipeResults.length === 0) {
					saveSearchResults(results);
				} else {
					clearSearchResults();
					saveSearchResults(results);
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<SearchBar onChange={handleParams} onClick={handleSearch} />
			<SearchContainer>
				<Button onClick={() => setOpenFilter(prev => !prev)}>Filter</Button>
			</SearchContainer>
			<RecipeFilter searchParams={setSearchParams} params={params} open={openFilter} />

			<ResultsContainer>
				<RecipeList
					onClick={handleShowRecipe}
					recipeDetails={recipeDetails}
					recipes={recipeResults}
				/>
			</ResultsContainer>
		</div>
	);
}

export default SearchPage;
