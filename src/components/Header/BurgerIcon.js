import styled from 'styled-components';
import { devices } from '../../mediaQueries/devices';

const TopLine = styled.div`
	height: 0.13rem;
	width: 2.4rem;
	border-radius: 1rem;
	background-color: black;
`;

const MidLine = styled.div`
	height: 0.13rem;
	width: 1.5rem;
	border-radius: 1rem;
	margin-top: 0.35rem;
	background-color: black;
	transition: width 0.2s ease-out;
`;

const BotLine = styled.div`
	height: 0.13rem;
	width: 0.7rem;
	border-radius: 1rem;
	margin-top: 0.35rem;
	background-color: black;
	transition: width 0.2s ease-in-out 0.1s;
`;

const BurgerIconStyled = styled.div`
	display: none;
	cursor: pointer;
	position: absolute;
	top: 2.8rem;
	right: 2.2rem;
	z-index: 20;
	&:hover ${MidLine} {
		width: 2.4rem;
	}

	&:hover ${BotLine} {
		width: 2.4rem;
	}

	@media ${devices.tablet} {
		display: block;
	}
`;

function BurgerIcon() {
	return (
		<BurgerIconStyled>
			<TopLine />
			<MidLine />
			<BotLine />
		</BurgerIconStyled>
	);
}

export default BurgerIcon;
