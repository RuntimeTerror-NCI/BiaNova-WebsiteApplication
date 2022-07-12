import styled from "styled-components";
import { Link } from "react-router-dom";

import ForgotPassword from "./ForgotPassword";
import Form from "../../UI/Form";
import { PillButton } from "../../UI/Button.styles";

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

function Login() {
  return (
    <div>
      <Form>
        <FormHeader> Log In</FormHeader>
        <InputContainer>
          <Label>Username </Label>
          <Input type="text" name="uname" required />
        </InputContainer>
        <InputContainer>
          <Label>Password </Label>
          <Input type="password" name="pass" required />
        </InputContainer>

        <PillButton type="submit">Log In</PillButton>
        <Link to="/forgot-password"> Hello </Link>
      </Form>
    </div>
  );
}

export default Login;
