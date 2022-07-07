import styled from 'styled-components';

import Modal from '../Modal/Modal';
import Form from '../../UI/Form';
import { LinkButton, PillButton } from '../../UI/Button.styles';

const InputContainer = styled.div`
	padding: 0.8rem 0;
	width: 25rem;
`;

const FormHeader = styled.h1`
	margin-top: 3rem;
`;

const FormText = styled.p`
	text-align: center;
	width: 100%;
	height: 4rem;
	margin-top: 0.5rem;
	padding-left: 0.5rem;
	border-radius: 0.2rem;
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

function ForgotPassword({ close }) {
	return (
		<Modal>
			<Button onClick={close}>&#x2715;</Button>
			<FormHeader> Forgot Password? </FormHeader>

			<Form>
				<FormText> Please Enter Your Details Below </FormText>

				<InputContainer>
					<Label> Email </Label>
					<Input type='text' name='email' required />
				</InputContainer>

				<InputContainer>
					<Label> Username </Label>
					<Input type='password' name='uname' required />
				</InputContainer>

				<PillButton type='submit'>Send Verification Email</PillButton>
			</Form>
			<div>
				<LinkButton> Forgot Username? </LinkButton>
				<LinkButton> No Account? Sign up! </LinkButton>
			</div>
		</Modal>
	);
}

export default ForgotPassword;
