import styled from "styled-components";

import Modal from "../../UI/Modal";
import Form from "../../UI/Form";
import { LinkButton, PillButton } from "../../UI/Button.styles";

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

function Signup() {
  return (
    <Form>
      <FormHeader> Sign Up </FormHeader>
      <InputContainer>
        <Label> First Name </Label>
        <Input type="text" name="fname" required />
      </InputContainer>

      <InputContainer>
        <Label> Second Name </Label>
        <Input type="text" name="lname" required />
      </InputContainer>

      <InputContainer>
        <Label> Email </Label>
        <Input type="text" name="email" required />
      </InputContainer>

      <InputContainer>
        <Label> Username </Label>
        <Input type="text" name="uname" required />
      </InputContainer>

      <InputContainer>
        <Label> Password </Label>
        <Input type="password" name="pass" required />
      </InputContainer>

      <InputContainer>
        <Label> Re-Enter Password </Label>
        <Input type="password" name="pass" required />
      </InputContainer>

      <PillButton type="submit">Sign Up!</PillButton>
    </Form>
  );
}

export default Signup;
