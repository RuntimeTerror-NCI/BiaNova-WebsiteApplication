import Card from '../Card/Card';
import styled from 'styled-components';

function RecipeList({ recipes, onClick }) {
	return (
		<CardContainerStyled>
			{recipes.map(({ title, id, image }) => (
				<div key={id}>
					<Card title={title} img={image} onClick={id => onClick(id)}></Card>
				</div>
			))}
		</CardContainerStyled>
	);
}

const CardContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
`;

export default RecipeList;
