import styled, { keyframes } from 'styled-components';

import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Modal from '../Modal/Modal';
import Form from '../../UI/Form';
import { LinkButton, PillButton } from '../../UI/Button.styles';
import { useState } from 'react';

const InputContainer = styled.div`
	padding: 0.8rem 0;
	width: 25rem;
`;

const FormHeader = styled.h1`
	margin-top: 3rem;
`;

const Label = styled.label``;

const Input = styled.input`
	width: 100%;
	height: 2rem;
	margin-top: 0.5rem;
	padding-left: 0.5rem;
	border-radius: 0.2rem;
	outline: none;
`;

const Button = styled.button`
	position: fixed;
	top: 0;
	right: 0;
	transform: translate(100%, -100%);
	margin: 4rem;
	font-size: 2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	color: grey;
	transition: 0.2s all ease-in-out;
	&:hover {
		color: black;
	}
`;

function Login({ open, close }) {
	const [forgotpass, setForgotPass] = useState(false);
	if (!open) return null;
	return (
		<Modal>
			<Button onClick={close}>&#x2715;</Button>
			<FormHeader>Log In</FormHeader>
			<Form>
				<InputContainer>
					<Label>Username </Label>
					<Input type='text' name='uname' required />
				</InputContainer>
				<InputContainer>
					<Label>Password </Label>
					<Input type='password' name='pass' required />
				</InputContainer>

				<PillButton type='submit'>Log In</PillButton>
			</Form>
			<div>
				<LinkButton onClick={() => setForgotPass(prev => !prev)}>
					{' '}
					Forgot your Password?{' '}
				</LinkButton>
			</div>
			<ForgotPassword open={forgotpass} close={() => setForgotPass(prev => !prev)} />
		</Modal>
	);
}

export default Login;
