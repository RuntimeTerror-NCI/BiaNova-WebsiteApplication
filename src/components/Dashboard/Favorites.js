import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import axios from 'axios';
import { devices } from '../../mediaQueries/devices';

function Favorites({ user, token }) {
	const [data, setData] = useState([]);

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
			{data?.map(({ id, title, img }) => (
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
	flex-wrap: wrap;
	justify-content: center;

	@media ${devices.tablet} {
		margin: 50px 0;
	}

	@media ${devices.laptop} {
		margin: 0px;
		flex-basis: calc(100% / 4);
	}

	@media ${devices.laptopL} {
		margin: 0px;
		flex-basis: calc(100% / 5);
	}
`;
export default Favorites;
