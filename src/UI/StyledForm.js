import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import FilteredPropsInputField from './FilteredPropsInputField';
import { Form } from 'formik';
import { devices } from '../mediaQueries/devices';

export const StyledForm = styled(Form)`
	display: flex;
	padding: 2rem;
	flex-direction: column;
`;

export const StyledInlineErrorMessage = styled.div`
	background-color: rgb(255, 245, 245);
	color: rgb(120, 27, 0);
	display: block;

	padding: 0.5rem 0.75rem;
	margin-top: 0.5rem;
	white-space: pre-line;
`;

export const Input = styled(FilteredPropsInputField)`
	background-color: white;
	border: 1px solid lightgrey;
	border-radius: 4px;
	font-size: 1rem;
	line-height: 1.5rem;
	font-style: normal;
	font-weight: 400;
	width: 100%;
	max-width: 800px;
	margin-top: 0.5rem;
	resize: none;
	padding: 0.75rem 0.75rem;

	&:focus,
	&:active {
		box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
		border: 1px solid rgb(26, 33, 43);
		outline: none;
		max-width: 100%;
	}

	/* Autocomplete styles in Chrome*/
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		background-color: white;
		border: 1px solid lightgrey;
		box-shadow: 0 0 0px 1000px #fff inset;
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
		transition: background-color 5000s ease-in-out 0s;
		-webkit-text-fill-color: black;
	}

	${({ valid }) =>
		valid &&
		css`
			border: 0.1rem solid rgb(0, 156, 38);

			&:focus,
			&:active {
				border: 0.1rem solid rgb(0, 156, 38);
				box-shadow: rgb(106, 237, 97) 0 0 0.3rem 0.1rem, rgb(177, 247, 160) 0 0 0 3px;
				outline: none;
			}

			/* Autocomplete styles in Chrome*/
			&:-webkit-autofill,
			&:-webkit-autofill:hover,
			&:-webkit-autofill:focus {
				border: 1px solid rgb(0, 156, 38);
			}
		`}

	${({ error }) =>
		error &&
		css`
			border: 1px solid rgb(191, 49, 12);
			outline: none;

			&:focus,
			&:active {
				box-shadow: rgb(244, 129, 116) 0 0 0.3rem 0.1rem, rgb(251, 178, 174) 0 0 0 0.3rem;
				border: 0.1rem solid rgb(191, 49, 12);
				outline: none;
			}

			/* Autocomplete styles in Chrome*/
			&:-webkit-autofill,
			&:-webkit-autofill:hover,
			&:-webkit-autofill:focus {
				border: 1px solid rgb(191, 49, 12);
			}
		`}
`;

export const InputField = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1rem;
`;

export const Wrapper = styled.section`
	&,
	& * {
		box-sizing: border-box;
		display: block;
	}

	background-color: whitesmoke;
	font-size: 1rem;
	line-height: 1.5rem;
	max-width: 35em;
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.5rem;
	padding: 1rem 0.75rem;
	border: 1px solid lightgrey;
	border-radius: 4px;
`;

export const Frame = styled.div`
	flex: 1 0 auto;
`;

export const StyledInput = styled.input`
	width: 100%;
	height: 2rem;
	margin-top: 0.5rem;
	padding-left: 0.5rem;
	border-radius: 0.2rem;
	outline: none;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	transition: 0.2s all ease-in-out;
	&:hover {
		color: rgb(131, 154, 168);
	}
`;

export const LandingLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	font-size: 1.4rem;
	border-radius: 4rem;
	height: 3rem;
	text-decoration: none;
	background-color: white;
	color: black;
	width: 22rem;
	flex-direction: right;
	transition: 0.2s all ease-in-out;
	&:hover {
		background-color: rgb(131, 154, 168);
		width: 45%;
	}

	@media ${devices.laptopL} {
		font-size: 1.3rem;
		width: 18rem;
	}
`;
