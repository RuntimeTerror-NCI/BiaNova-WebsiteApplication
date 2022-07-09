import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const RandomRecipes = () => {
	const [random, setRandom] = useState([]);

	const getRandomRecipes = async () => {
		const getData = localStorage.getItem('rand');

		if (getData) {
			setRandom(JSON.parse(getData));
		} else {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
					'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
				},
			};

			fetch(
				'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=3',
				options
			)
				.then(response => response.json())
				.then(response => {
					setRandom(response.recipes);
					localStorage.setItem('rand', JSON.stringify(response.recipes));
					console.log(response);
				})
				.catch(err => console.error(err));

			console.log(random);
		}
	};

	useEffect(() => {
		getRandomRecipes();
	}, []);

	return (
		<RandomRecipesStyled>
			{random.map(({ title, id, image, summary, sourceUrl }) => (
				<Card key={id} title={title} img={image} content={summary} />
			))}
		</RandomRecipesStyled>
	);
};

const RandomRecipesStyled = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
`;

export default RandomRecipes;
