import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import axios from 'axios';
import {useOutlet} from "react-router-dom";

function Favorites({ user, token }) {
	const [recipesLiked, setRecipesLiked] = useState();

	const getRecipesLiked = () => {
		console.log('running getRecipesLiked');
		let url = 'https://bianova.herokuapp.com/profile';
		let data = {
			params: {
				username: user,
			},
		};

		let headers = {
			'Authorization': `Bearer ${token}`,
		};

		axios
			.get(url, {
				params: {
					username: user,
				},
				headers: headers,
			})
			.then(response => {
				// let id = response.data['savedRecipes']['id']
				// let title = response.data['savedRecipes']['title']
				// let image = response.data['savedRecipes']['img']
				setRecipesLiked(response.data['savedRecipes']);
				console.log(...response.data['savedRecipes']);
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
			{recipesLiked?.map(( {title, id, img}) => (
				<div key={id}>
					<Card id={id} title={title} img={img} token={token} user={user}></Card>
				</div>
			))}
		</div>
	);
}

export default Favorites;
