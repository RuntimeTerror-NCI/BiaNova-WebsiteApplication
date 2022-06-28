import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	text-decoration: none;
	border: none;
	background-color: transparent;
	text-align: center;
	transition: 0.2s all ease-in-out;
`;

export const PillButton = styled(Button)`
	background-color: #6bbcff;
	font-size: 1.2rem;
	font-weight: 600;
	color: #ffffff;
	padding: 0.8rem 1rem;
	margin-top: 1rem;
	border-radius: 1.5rem;
	width: 100%;

	&:hover {
		background-color: #5e90e6;
	}
`;

export const LinkButton = styled(Button)`
	padding: 2rem 0.8rem;
	font-weight: 600;
	font-size: 0.8rem;
	color: black;
	&:hover {
		color: #5e90e6;
	}
`;
