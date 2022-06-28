import styled from 'styled-components';

import { Button } from './Button.styles';

function Backdrop({ ...props }) {
	const Backdrop = styled.div`
		background-color: white;
		height: 100vh;
		width: 100vw;
		z-index: 1000;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
