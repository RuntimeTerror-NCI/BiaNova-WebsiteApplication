import Modal from "../Modal/Modal";
import { LinkButton, PillButton } from "../../UI/Button.styles";

import Form from "../../UI/Form";
import styled from "styled-components";

function ForgotPassword() {
  const InputContainer = styled.div`
    padding: 0.8rem 0;
    width: 25rem;
  `;

  const FormHeader = styled.h1`
    margin-top: 3rem;
  `;

  const FormText = styled.p`
    text-align: center;
    width: 100%;
    height: 4rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    border-radius: 0.2rem;
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

  return (
    <Modal>
      <FormHeader> Forgot Password? </FormHeader>

      <Form>
        <FormText> Please Enter Your Details Below </FormText>

        <InputContainer>
          <Label> Email </Label>
          <Input type="text" name="email" required />
        </InputContainer>

        <InputContainer>
          <Label> Username </Label>
          <Input type="password" name="uname" required />
        </InputContainer>

        <PillButton type="submit">Send Verification Email</PillButton>
      </Form>
      <div>
        <LinkButton> Forgot Username? </LinkButton>
        <LinkButton> No Account? Sign up! </LinkButton>
      </div>
    </Modal>
  );
}

export default ForgotPassword;
