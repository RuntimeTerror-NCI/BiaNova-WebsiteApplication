import styled, { keyframes } from 'styled-components';

import { Button } from './Button.styles';

function Backdrop({ ...props }) {
	const expandingAnimation = keyframes`
	0% {opacity: 0}
	20% {opacity:0.2}
	40% {opacity:0.4}
	60% {opacity: 0.6}
	80% {opacity: 0.8}
	100% {opacity: 1}
	`;

	const Backdrop = styled.div`
		background-color: white;
		height: 100vh;
		width: 100vw;
		z-index: 1000;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-name: ${expandingAnimation};
		animation-duration: 0.2s;
	`;

	const Header = styled.div``;

	const Button = styled.button``;

	return (
		<Backdrop>
			<Header>
				<Button>&#10006;</Button>
			</Header>
			{props.children}
		</Backdrop>
	);
}

export default Backdrop;
