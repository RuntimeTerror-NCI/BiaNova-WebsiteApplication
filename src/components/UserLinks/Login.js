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

const LinkWrapper = styled.div`
	margin: auto;
	margin-top: 2rem;
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

function Login() {
	return (
		<div>
			<Form>
				<FormHeader> Log In</FormHeader>
				<InputContainer>
					<Label>Username </Label>
					<Input type='text' name='uname' required />
				</InputContainer>
				<InputContainer>
					<Label>Password </Label>
					<Input type='password' name='pass' required />
				</InputContainer>

				<PillButton type='submit'>Log In</PillButton>
				<LinkWrapper>
					<StyledLink to='/forgot-password'>Forgot Password?</StyledLink> | {''}
					<StyledLink to='/Signup'>No Account?</StyledLink>
				</LinkWrapper>
			</Form>
		</div>
	);
}

export default Login;
