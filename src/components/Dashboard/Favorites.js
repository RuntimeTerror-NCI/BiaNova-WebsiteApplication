import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import axios from 'axios';

function Favorites({ user, token }) {
	const [data, setData] = useState();

	useEffect(() => {
		if (localStorage.getItem('favourites') !== null) {
			localStorage.removeItem('favourites');
		}

		if (token) {
			let url = 'https://bianova.herokuapp.com/profile';
			let headers = {
				Authorization: `Bearer ${token}`,
			};

			axios
				.get(url, {
					params: {
						username: user,
					},
					headers: headers,
				})

				.then(response => {
					let savedRecipes = response.data['savedRecipesObjects'];
					setData(savedRecipes);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, []);

	return (
		<FavContainer>
			{data?.map(({ title, id, img }) => (
				<div key={id}>
					<Card id={id} title={title} img={img} token={token} user={user}></Card>
				</div>
			))}
		</FavContainer>
	);
}

const FavContainer = styled.div`
	margin: 50px;
	padding: 0px;
	display: flex;
	flex-flow: wrap;
	justify-content: center;
	flex-basis: calc(100% / 5);
`;
export default Favorites;
