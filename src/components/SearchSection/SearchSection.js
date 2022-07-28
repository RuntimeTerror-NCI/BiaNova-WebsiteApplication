import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../UI/Spinner';

function SearchSection() {
	const [query, setQuery] = useState();
	const [recipeResults, setRecipeResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleParams = e => {
		let param = e.target.value;
		setQuery(`${param}`);
	};

	const handleRedirect = () => {
		navigate('/search', { state: recipeResults });
	};

	const saveSearchResults = results => {
		setRecipeResults(results);
	};

	const handleSearch = e => {
		if (e && e.preventDefault) {
			e.preventDefault();
		}

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
				saveSearchResults(results);

				if (recipeResults.length) {
					handleRedirect();
				}
			})

			.catch(error => {
				console.log(error);
			});
	};

	return (
		<SearchContainer>
			<h1> Recipes of the Day </h1>
			<p>
				We can do random card generation header can also be used for testing basically trying to
				fill space but a recipe of the week with randomised recipes could be good, if not.. can
				serve as a div that shows what we do and what clients can expect.{' '}
			</p>

			<SearchBar onChange={handleParams} onClick={handleSearch} />
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
