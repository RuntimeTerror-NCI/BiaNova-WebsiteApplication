import styled from 'styled-components';
import { devices } from '../../mediaQueries/devices';
import favorite from '../../assets/imgs/badges/icons8-favorite-100.png';
import ingredients from '../../assets/imgs/badges/icons8-ingredients-100.png';
import search from '../../assets/imgs/badges/icons8-search-100.png';

import Badge from './Badge';

const BadgeContainerStyled = styled.div`
	height: 100%;
	display: flex;
	gap: 3%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 90%;
	text-align: center;

	@media ${devices.mobileL} {
		flex-direction: column;
		width: 100%;
	}
`;

function BadgeContainer() {
	const badges = [
		{
			id: 1,
			image: ingredients,
			heading: 'Ingredients',
			text: 'Input Some Ingredients To Get Started and Look Up Some of Our Delicious Recipes!',
		},

		{
			id: 2,
			image: favorite,
			heading: 'Favorites',
			text: 'Save Your Favorite Meals, Click the Heart Icon Beside Each Recipe You Want Saved!',
		},

		{
			id: 3,
			image: search,
			heading: 'Search',
			text: 'Search for any Recipe, specify by Diets, Food Intolerances or Ingredients!',
		},
	];

	return (
		<BadgeContainerStyled>
			{badges.map(badge => (
				<Badge key={badge.id} image={badge.image} heading={badge.heading} text={badge.text} />
			))}
		</BadgeContainerStyled>
	);
}

export default BadgeContainer;
