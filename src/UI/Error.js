import styled from 'styled-components';

function Error(props, { close }) {
	return (
		<Frame>
			<Content>
				<Button onClick={close}>x</Button>
				<p>{props.children}</p>
			</Content>
		</Frame>
	);
}

const Frame = styled.div`
	width: fit-content;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, 25%);
	background-color: white;
	border-bottom: 0.2rem solid red;
	border-radius: 0.2rem;
	overflow: hidden;
`;

const Content = styled.div`
	padding: 0.8rem 1.5rem;
`;

const Button = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

export default Error;
