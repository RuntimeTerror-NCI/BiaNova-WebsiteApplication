import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeFilter from '../Recipe/RecipeFilter';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../Card/Card';
import { useLocation } from 'react-router-dom';
import Error from '../../UI/Error';
import { devices } from '../../mediaQueries/devices';

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

	@media ${devices.tablet} {
		font-size: 0.9rem;
	}
`;

const StyledSearchPage = styled.div`
	flex: 1 0 auto;
`;

const SearchContainer = styled.div`
	width: 60%;
	margin: -2rem auto;

	@media ${devices.mobileL} {
		margin: -2rem 0.9rem;
	}
`;

const ResultsContainer = styled.div`
	margin: 50px;
	padding: 0px;
	display: flex;
	flex-flow: wrap;
	justify-content: center;
	flex-basis: calc(100% / 5);

	@media ${devices.tablet} {
		margin: 0px;
		flex-basis: calc(100% / 3);
	}

	@media ${devices.laptop} {
		margin: 0px;
		flex-basis: calc(100% / 4);
	}

	@media ${devices.laptopL} {
		margin: 0px;
		flex-basis: calc(100% / 5);
	}
`;

function SearchPage({ token, user, recipesLiked, setRecipesLiked }) {
	const [openFilter, setOpenFilter] = useState(false);
	const [filterIntolerances, setfilterIntolerances] = useState();
	const [filterDiet, setFilterDiet] = useState();
	const [searchParams, setSearchParams] = useState();
	const [recipeResults, setRecipeResults] = useState([]);
	const [errMsg, setErrMsg] = useState('');

	let location = useLocation();
	const rResults = location.state;

	useEffect(() => {
		if (rResults) {
			saveSearchResults(rResults);
		}
	}, [rResults]);

	const handleParams = e => {
		let param = e.target.value;
		setSearchParams(param);
	};

	const filteredIntolerances = param => {
		setfilterIntolerances(param);
	};

	const filteredDiet = param => {
		setFilterDiet(param);
	};

	const clearSearchResults = () => {
		setRecipeResults([]);
	};

	const saveSearchResults = results => {
		setRecipeResults(results);
	};

	const handleSearch = e => {
		e.preventDefault();

		let url = 'https://bianova.herokuapp.com/externalApi/';

		let query;
		if (searchParams !== '') {
			query = `${url}${searchParams}`;
		}
		if (filterIntolerances !== '') {
			query += `&intolerances=${filterIntolerances}`;
		}
		if (filterDiet !== '') {
			query += `&diet=${filterDiet}`;
		}

		axios
			.get(`${query}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
					'Access-Control-Allow-Headers':
						'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers',
				},
			})
			.then(response => {
				let results = response.data.results;

				if (results.length === 0) {
					clearSearchResults();
					setErrMsg("Couldn't find anything");
				}

				if (recipeResults.length === 0) {
					saveSearchResults(results);
				} else {
					clearSearchResults();
					saveSearchResults(results);
				}
			})
			.catch(error => {
				setErrMsg(error);
			});
	};

	return (
		<StyledSearchPage>
			{errMsg && <Error errMsg={errMsg} />}
			<SearchBar onChange={handleParams} onClick={handleSearch} />
			<SearchContainer>
				<Button onClick={() => setOpenFilter(prev => !prev)}>Filter</Button>
			</SearchContainer>
			<RecipeFilter
				filteredIntolerances={filteredIntolerances}
				filteredDiet={filteredDiet}
				open={openFilter}
			/>

			<ResultsContainer>
				{recipeResults.map(({ title, id, image }) => (
					<div key={id}>
						<Card
							id={id}
							title={title}
							img={image}
							token={token}
							user={user}
							recipesLiked={recipesLiked}></Card>
					</div>
				))}
			</ResultsContainer>
		</StyledSearchPage>
	);
}

export default SearchPage;
