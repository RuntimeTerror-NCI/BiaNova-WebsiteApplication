import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Card from '../Card/Card';
import { devices } from '../../mediaQueries/devices';

const RandomRecipes = ({ token, user, favourites }) => {
	const [random, setRandom] = useState([]);

	const updateRandom = data => {
		setRandom(JSON.parse(data));
	};

	const getRandomRecipes = async () => {
		const getData = localStorage.getItem('rand');
		if (getData) {
			updateRandom(getData);
		} else {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
					'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
				},
			};

			fetch(
				'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3',
				options
			)
				.then(response => response.json())
				.then(response => {
					setRandom(response.recipes);
					localStorage.setItem('rand', JSON.stringify(response.recipes));
				})
				.catch(err => console.error(err));
		}
	};

	useEffect(() => {
		getRandomRecipes();
	}, []);

	return (
		<RandomRecipesStyled>
			{random.map(({ title, id, image, summary }) => (
				<Card
					key={id}
					id={id}
					title={title}
					img={image}
					content={summary}
					token={token}
					user={user}></Card>
			))}
		</RandomRecipesStyled>
	);
};

const RandomRecipesStyled = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;

	@media ${devices.tablet} {
		flex-direction: column;
		align-items: center;
	}
`;

export default RandomRecipes;
