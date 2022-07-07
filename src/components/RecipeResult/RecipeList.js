import React from 'react';
const axios = require('axios');

function RecipeList() {
	const intolerance = {
		dairy: false,
		egg: false,
		gluten: false,
		peanut: false,
		sesame: false,
		seafood: false,
		shellfish: false,
		soy: false,
		sulfite: false,
		treeNut: false,
		wheat: false,
	};

	const diet = {
		glutenFree: false,
		ketogenic: false,
		vegetarian: false,
		lactoVegetarian: false,
		ovoVegetarian: false,
		vegan: false,
		pescatarian: false,
		paleo: false,
		primal: false,
		lowFODMAP: false,
		whole30: false,
	};

	//for ingredients
	const options = {
		method: 'GET',
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
		params: {
			query: 'chicken',
			//diet: 'Vegetarian',
			//intolerances: 'sesame',
			//excludeIngredients: 'Chicken',
			instructionsRequired: 'true',
			addRecipeInformation: 'true',
			//titleMatch: 'Crock Pot',
			// sort: 'calories',
			// sortDirection: 'asc',
			// minCarbs: '10',
			// maxCarbs: '100',
			// minProtein: '10',
			// maxProtein: '100',
			// minCalories: '50',
			// maxCalories: '800',
			// minFat: '10',
			// maxFat: '100',
			// minSaturatedFat: '0',
			// maxSaturatedFat: '100',
			// minSodium: '0',
			// maxSodium: '100',
			// minSugar: '0',
			// maxSugar: '100',
			// number: '10',
		},
		headers: {
			'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
			'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
		},
	};

	// axios
	// 	.request(options)
	// 	.then(function (response) {
	// 		console.log(response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error);
	// 	});

	return <div>RecipeList</div>;
}

export default RecipeList;
