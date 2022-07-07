import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

const RandomRecipe = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
`;
const axios = require('axios');

const options = {
	method: 'GET',
	url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
	params: { tags: 'vegetarian,dessert', number: '3' },
	headers: {
		'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then(response => {
		console.log(response.data);
		// setRecipe(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});

function RandomRecipes() {
	// const [recipeData, setRecipe] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.request(options)
	// 		.then(response => {
	// 			console.log(response.data);
	// 			setRecipe(response.data);
	// 		})
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});

	// 	return () => {
	// 		console.log(recipeData);
	// 	};
	// });

	// const getRecipeFetch = async () => {
	// 	return await axios.request(recipeUrl).then(response => {
	// 		setRecipe(response.data);
	// 	});
	// };

	// useEffect(() => {

	// }, []); //passes in blank array so renders once

	return (
		<RandomRecipe className='card-containers'>
			<Card />
			<Card />
			<Card />
		</RandomRecipe>
	);
}

export default RandomRecipes;
