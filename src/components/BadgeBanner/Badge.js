import styled from 'styled-components';

const BadgeDiv = styled.div`
	max-width: 33%;

	padding: 0;
`;

const Icon = styled.img`
	width: 5rem;
	height: 5rem;
`;

const Heading = styled.h2`
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
`;

function Badge({ image, heading, text }) {
	return (
		<BadgeDiv>
			<Icon src={image} alt='' />
			<Heading> {heading} </Heading>
			<Text> {text} </Text>
		</BadgeDiv>
	);
}

export default Badge;
