import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import axios from 'axios';

function Favorites({ user, token }) {
	const [recipesLiked, setRecipesLiked] = useState([]);

	useEffect(() => {
		axios
			.get('https://bianova.herokuapp.com/profile', {
				params: {
					username: user,
				},
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			})
			.then(response => {
				setRecipesLiked(response.data['savedRecipes']);

				console.log(response);
			})
			.catch(err => console.log(err));
	}, [token, user]);

	return (
		<div>
			{recipesLiked.map(({ title, id, img }) => (
				<div key={id}>
					<Card title={title} img={img} token={token} user={user}></Card>
				</div>
			))}
		</div>
	);
}

export default Favorites;
