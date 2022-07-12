import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  padding: 3rem 8rem 4rem;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  margin: auto;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
`;

function Form({ children }) {
  return (
    <Wrapper>
      <StyledForm>{children}</StyledForm>
    </Wrapper>
  );
}

export default Form;
