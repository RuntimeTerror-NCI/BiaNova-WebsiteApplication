import React from 'react';

function RecipeList({ recipes, onClick }) {
	return (
		<div>
			{recipes.map(recipe => (
				<div onClick={() => onClick(recipe.id)} key={recipe.id}>
					<img src={recipe.image} alt={recipe.title} />
					<h1>{recipe.title}</h1>
				</div>
			))}
		</div>
	);
}

export default RecipeList;
