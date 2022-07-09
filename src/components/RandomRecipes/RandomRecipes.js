require('dotenv').config()
import styled from 'styled-components';
import Card from '../Card/Card';

const RandomRecipe = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
`;
// const axios = require('axios');

// const options = {
// 	method: 'GET',
// 	url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?apiKey${process.env.REACT_APP_FOOD_API_KEY}&number=3',
// 	headers: {
// 		'X-RapidAPI-Key': '2ad55f65fbmshcfe0e39bda9c68bp12a597jsn89ff591ad860',
// 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
// 	},
// };

// let recipe = {
// 	image: '',
// 	title: '',
// 	content: '',
// };

// axios
// 	.request(options)
// 	.then(random => {
// 		console.log(random.data);
// 		recipe.image = random.data.recipes[0].image;
// 		recipe.title = random.data.recipes[0].title;
// 		recipe.content = random.data.recipes[0].summary;
// 	})
// 	.catch(function (error) {
// 		console.error(error);
// 	});

function RandomRecipes() {
	
		const [random, setRandom] = useState([]);
	  
		const getRandomRecipes = async () => {
		  const getData = localStorage.getItem("popular");
	  
		  if (getData) {
			setRandom(JSON.parse(getData));
		  } else {
			const resp = await fetch(
			  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=3`
			);
			const data = await resp.json();
			setRandom(data.recipes);
			localStorage.setItem("popular", JSON.stringify(data.recipes));
			console.log(data.recipes);
		  }
		


	return (
		<RandomRecipe className='card-containers'>
			<Card title={recipe.title} img={recipe.image} content={recipe.content} />
		</RandomRecipe>
	);
}

export default RandomRecipes;
