import Modal from '../Modal/Modal';
import { LinkButton, PillButton } from '../../UI/Button.styles';

import Form from '../../UI/Form';
import styled from 'styled-components';

function Login() {
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

	// const { errorMessage, setErrorMessage } = useState({});

	// const renderErrorMessage = name => {
	// 	name === errorMessage.name && <div className='error'>{errorMessage.message}</div>;
	// };

	return (
		<Modal>
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
				<LinkButton> Forgot your Password? </LinkButton>
			</div>
		</Modal>
	);
}

export default Login;
