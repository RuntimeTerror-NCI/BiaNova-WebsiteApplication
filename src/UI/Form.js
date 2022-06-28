import styled from 'styled-components';

function Form({ ...props }) {
	const Form = styled.form`
		display: flex;
		padding: 3rem 8rem 4rem;
		flex-direction: column;
		align-items: flex-end;
	`;

	return <Form>{props.children}</Form>;
}

export default Form;
