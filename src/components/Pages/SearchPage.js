import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeFilter from '../Recipe Filter/RecipeFilter';
import styled from 'styled-components';

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

function SearchPage() {
	const [openFilter, setOpenFilter] = useState(false);

	return (
		<div>
			<SearchBar />
			<SearchContainer>
				<Button onClick={() => setOpenFilter(prev => !prev)}>Filter</Button>
			</SearchContainer>

			<RecipeFilter open={openFilter} />
		</div>
	);
}

export default SearchPage;
