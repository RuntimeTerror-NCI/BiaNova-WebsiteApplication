import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  padding: 3rem 8rem 4rem;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
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
  width: 40%;
  flex-direction: right;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: rgb(131, 154, 168);
    width: 45%;
    height: 3.5rem;
  }
`;

function Form({ children }) {
  return (
    <Wrapper>
      <StyledForm>{children}</StyledForm>
    </Wrapper>
  );
}

export default Form;
