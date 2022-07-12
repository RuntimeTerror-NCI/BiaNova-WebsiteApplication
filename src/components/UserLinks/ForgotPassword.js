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

const FormText = styled.p`
	width: 100%;
	margin-top: 0.5rem;
	border-radius: 0.2rem;
`;

const Label = styled.label``;

const Input = styled.input`
	width: 100%;
	height: 2rem;
	padding-left: 0.5rem;
	border-radius: 0.2rem;
	outline: none;
`;

const LinkWrapper = styled.div`
	margin: auto;
	margin-top: 2rem;
`;

function ForgotPassword() {
	return (
		<Form>
			<FormHeader> Forgot Password? </FormHeader>
			<FormText> Please Enter Your Email Below </FormText>

			<InputContainer>
				<Label> Email </Label>
				<Input type='text' name='email' required />
			</InputContainer>

			<PillButton type='submit'>Send Verification Email</PillButton>
			<LinkWrapper>
				<StyledLink to='/Signup'>No Account?</StyledLink>
			</LinkWrapper>
		</Form>
	);
}

export default ForgotPassword;
