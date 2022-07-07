import styled, { keyframes } from 'styled-components';

const expandingAnimation = keyframes`
	0% {opacity: 0}
	20% {opacity:0.2}
	40% {opacity:0.4}
	60% {opacity: 0.6}
	80% {opacity: 0.8}
	100% {opacity: 1}
	`;

const Overlay = styled.div`
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

function Modal({ children }) {
	return (
		<Overlay>
			<Wrapper>{children}</Wrapper>
		</Overlay>
	);
}

export default Modal;
