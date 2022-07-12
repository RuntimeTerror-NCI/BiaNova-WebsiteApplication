import styled from 'styled-components';

import Form, { StyledLink } from '../../UI/Form';
import { PillButton } from '../../UI/Button.styles';

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

const LinkWrapper = styled.div`
	margin: auto;
	margin-top: 2rem;
`;

function Signup() {
	return (
		<Form>
			<FormHeader> Sign Up </FormHeader>
			<InputContainer>
				<Label> First Name </Label>
				<Input type='text' name='fname' required />
			</InputContainer>

			<InputContainer>
				<Label> Second Name </Label>
				<Input type='text' name='lname' required />
			</InputContainer>

			<InputContainer>
				<Label> Email </Label>
				<Input type='text' name='email' required />
			</InputContainer>

			<InputContainer>
				<Label> Username </Label>
				<Input type='text' name='uname' required />
			</InputContainer>

			<InputContainer>
				<Label> Password </Label>
				<Input type='password' name='pass' required />
			</InputContainer>

			<InputContainer>
				<Label> Re-Enter Password </Label>
				<Input type='password' name='pass' required />
			</InputContainer>

			<PillButton type='submit'>Sign Up!</PillButton>
			<LinkWrapper>
				<StyledLink to='/Login'>Already have an Account?</StyledLink>
			</LinkWrapper>
		</Form>
	);
}

export default Signup;
