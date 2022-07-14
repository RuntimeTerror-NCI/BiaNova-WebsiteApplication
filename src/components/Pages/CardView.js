import styled from 'styled-components';

import { StyledLink } from '../../UI/Form';

function CardView(props, { title, id, image, diets, analyzedInstructions, summary, sourceUrl }) {
	console.log(props.params);
	return (
		<CardWrapper key={id}>
			<ViewImage>{image} </ViewImage>
			<ViewTitle> {title} </ViewTitle>
			<ViewInfo>
				<h3 className='diets'>{diets} </h3>
				<p className='summary'> {summary} </p>
				<p className='instructions'> {analyzedInstructions} </p>{' '}
			</ViewInfo>

			<StyledLink> {sourceUrl} </StyledLink>
		</CardWrapper>
	);
}

export const CardWrapper = styled.div`
	display: flex;
	width: 75vw;
	align-items: right;
	flex-wrap: nowrap;
	margin: auto;
`;

export const ViewImage = styled.div``;

export const ViewInfo = styled.div``;

export const ViewTitle = styled.div``;
export default CardView;
