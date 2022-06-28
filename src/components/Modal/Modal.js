import styled, { keyframes } from 'styled-components';

import Backdrop from '../../UI/Backdrop';

function Modal({ ...props }) {
	const expandingAnimation = keyframes`
	0% {opacity: 0}
	20% {opacity:0.2}
	40% {opacity:0.4}
	60% {opacity: 0.6}
	80% {opacity: 0.8}
	100% {opacity: 1}
	`;

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		border: 0.1rem solid black;
		border-radius: 0.4rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-name: ${expandingAnimation};
		animation-duration: 0.2s;
	`;

	return (
		<Backdrop>
			<Wrapper>{props.children}</Wrapper>
		</Backdrop>
	);
}

export default Modal;
