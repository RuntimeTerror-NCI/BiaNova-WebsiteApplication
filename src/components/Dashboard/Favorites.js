import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import axios from 'axios';

function Favorites({ user, token }) {
	const [recipesLiked, setRecipesLiked] = useState();

	const getRecipesLiked = () => {
		let url = 'https://bianova.herokuapp.com/profile';
		let data = {
			params: {
				username: user,
			},
		};

		let headers = {
			Authorization: `Bearer ${token}`,
		};

		axios
			.get(url, data, {
				headers: headers,
			})
			.then(response => {
				setRecipesLiked(response);
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(() => {
		getRecipesLiked();
	}, []);

	return (
		<div>
			{recipesLiked?.map(({ title, id, image }) => (
				<div key={id}>
					<Card id={id} title={title} img={image} token={token} user={user}></Card>
				</div>
			))}
		</div>
	);
}

export default Favorites;
