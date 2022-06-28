import styled from 'styled-components';

import Backdrop from '../../UI/Backdrop';

function Modal({ ...props }) {
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
	`;

	return (
		<Backdrop>
			<Wrapper>{props.children}</Wrapper>
		</Backdrop>
	);
}

export default Modal;
