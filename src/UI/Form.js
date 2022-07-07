import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	padding: 3rem 8rem 4rem;
	flex-direction: column;
	align-items: flex-end;
`;

function Form({ children }) {
	return <StyledForm>{children}</StyledForm>;
}

export default Form;
