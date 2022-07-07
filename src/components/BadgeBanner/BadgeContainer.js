import styled from 'styled-components';

import favorite from '../../assets/imgs/badges/icons8-favorite-100.png';
import ingredients from '../../assets/imgs/badges/icons8-ingredients-100.png';
import search from '../../assets/imgs/badges/icons8-search-100.png';

import Badge from './Badge';

const BadgeContainerStyled = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 30vh;
	text-align: center;
	width: 80%;
`;

function BadgeContainer() {
	const badges = [
		{
			id: 1,
			image: ingredients,
			heading: 'Ingredients',
			text: 'Simply Input your Ingredients into the Field Below and Get Started Looking up your Recipes!',
		},

		{
			id: 2,
			image: favorite,
			heading: 'Favorites',
			text: 'Save Your Favorite Meals, Click the Heart Icon Beside Each Recipe!',
		},

		{
			id: 3,
			image: search,
			heading: 'Search',
			text: 'Search for any Recipe, specify by Allergens, or by any ingredient, we have it all!',
		},
	];

	return (
		<BadgeContainerStyled>
			{badges.map(badge => (
				<Badge image={badge.image} heading={badge.heading} text={badge.text} />
			))}
		</BadgeContainerStyled>
	);
}

export default BadgeContainer;