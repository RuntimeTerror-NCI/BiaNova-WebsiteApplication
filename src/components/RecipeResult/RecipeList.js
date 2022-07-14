import React from "react";

function RecipeList() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=
	${params.query}`,
    options
  )
    // fetch(
    // 	`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=
    // ${params.query}&diet=${params.diet}&intolerances=${params.intolerance}&excludeIngredients=${params.excludeIngredients}
    // &instructionsRequired=${params.instructionsRequired}&addRecipeInformation=true&titleMatch=${params.titleMatch}&sort=
    // ${params.sort}&sortDirection=${params.sortDirection}&minCarbs=${params.minCarbs}&maxCarbs=${params.maxCarbs}&minProtein=
    // ${params.minProtein}&maxProtein=${params.maxProtein}&minCalories=${params.minCalories}&maxCalories=${params.maxCalories}&minFat=
    // ${params.minFat}&maxFat=${params.maxFat}&minSaturatedFat=${params.minSaturatedFat}&maxSaturatedFat=${params.maxSaturatedFat}&minSodium
    // =${params.minSodium}&maxSodium=${params.maxSodium}&minSugar=${params.minSodium}${params.maxSugar}&number=${params.number}`,
    // 	options
    // )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  //for ingredients
  // const options = {
  // 	method: 'GET',
  // 	url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  // 	params: {
  // 		query: 'chicken',
  // 		// diet: 'Vegetarian',
  // 		// intolerances: 'sesame',
  // 		// excludeIngredients: 'Chicken',
  // 		instructionsRequired: 'true',
  // 		addRecipeInformation: 'true',
  // 		// titleMatch: 'Crock Pot',
  // 		//  sort: 'calories',
  // 		// sortDirection: 'asc',
  // 		// minCarbs: '10',
  // 		// // maxCarbs: '100',
  // 		// // minProtein: '10',
  // 		// // maxProtein: '100',
  // 		// // minCalories: '50',
  // 		// // maxCalories: '800',
  // 		// // minFat: '10',
  // 		// // maxFat: '100',
  // 		// // minSaturatedFat: '0',
  // 		// // maxSaturatedFat: '100',
  // 		// // minSodium: '0',
  // 		// maxSodium: '100',
  // 		// minSugar: '0',
  // 		// maxSugar: '100',
  // 		//  number: '10',
  // 	},
  // 	headers: {
  // 		'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
  // 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  // 	},
  // };

  return <div>RecipeList</div>;
}

export default RecipeList;
