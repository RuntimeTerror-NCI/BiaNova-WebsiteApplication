import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import LikePic from '../../assets/imgs/Like.png';
import UnlikePic from '../../assets/imgs/Unlike.png';
import axios from 'axios';

function Card({ img, title, id, token, user }) {
	const [like, setLike] = useState(false);
	const [recipe, setRecipe] = useState();

	let url = 'https://bianova.herokuapp.com/save';
	// let url = 'http://localhost:8080/save';

	let headers = {
		Authorization: `Bearer ${token}`,
	};

	const addFavorite = () => {
		// const recipe = { id: id, title: title, img: img };
		const recipe = { id: id, title: title, img: img };
		setRecipe(recipe);
		let data = {
			username: {'username': user},
			'recipe': recipe
		};


		axios
			.post(url, data, {
				headers: headers,
			})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		console.log('add ', recipe);
	};

	const removeFavorite = () => {
		const recipe = { id: id, title: title, img: img };
		setRecipe(recipe);
		console.log('remove ', recipe);
	};

	const handleLove = () => {
		setLike(prev => !prev);
		if (!like) {
			addFavorite();
		} else {
			removeFavorite();
		}
	};

	// const getRecipesLiked = () => {
	// 	axios
	// 		.get('https://bianova.herokuapp.com/profile', data, {
	// 			headers: headers,
	// 		})
	// 		.then(response => {
	// 			console.log(response);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// };

	// useEffect(() => {
	// 	getRecipesLiked();
	// }, []);

	return (
		<CardContainer>
			<ImageContainer>
				<img src={img} alt={title} />
			</ImageContainer>

			<CardContent>
				<h3>{title} </h3>
				<LikeWrapper onClick={() => handleLove()}>
					{like ? <Img src={LikePic} /> : <Img src={UnlikePic} />}
				</LikeWrapper>

				<View to={`/recipe/${id}`}>View Recipe</View>
			</CardContent>
		</CardContainer>
	);
}

const View = styled(Link)`
	display: flex;
	margin: auto;
	margin-bottom: 1rem;
	padding: 0.2rem 0.8rem;
	align-items: center;
	text-decoration: none;
	background-color: #b8e2ff;
	width: fit-content;
	height: 2rem;
	cursor: pointer;
	font-weight: 500;
	color: black;
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: #96d5ff;
	}
`;
const LikeWrapper = styled.div`
	width: fit-content;
	display: flex;
	margin: 0.8rem;
	cursor: pointer;
`;

const Img = styled.img`
	width: 2.5rem;
`;

const CardContainer = styled.div`
	justify-content: center;
	margin: 2rem;
	width: 18rem;
	display: flex;
	flex-direction: column;
	border-radius: 0.2rem;
	box-shadow: 0px 0px 15px 0px;
	transition: 0.3s;
	animation: ease-in;
	margin: 3rem 1.5rem;
	background-color: whitesmoke;
	&:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 15px 0px;
	}
`;

const CardContent = styled.div`
	margin: 1rem;
	margin-top: 0.3rem;

	h3 {
		margin-bottom: 0.5rem;
		text-align: center;
		font-size: 1.2rem;
	}
`;

const ImageContainer = styled.div`
	img {
		width: 100%;
		height: 10rem;
		object-position: 15% 75%;
		object-fit: cover;
		border-top-left-radius: 0.2rem;
		border-top-right-radius: 0.2rem;
	}
`;
export default memo(Card);
