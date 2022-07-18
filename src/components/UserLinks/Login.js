import styled from "styled-components";
import React, { useState } from "react";
import StyledForm, { StyledLink, StyledInput } from "../../UI/StyledForm";
import { PillButton } from "../../UI/Button.styles";

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

function Login() {
  const [token, setToken] = useState();

  return (
    <div>
      <StyledForm>
        <FormHeader> Log In</FormHeader>
        <InputContainer>
          <Label>Username </Label>
          <StyledInput type="text" name="uname" required />
        </InputContainer>
        <InputContainer>
          <Label>Password </Label>
          <StyledInput type="password" name="pass" required />
        </InputContainer>

        <PillButton type="submit">Log In</PillButton>
        <LinkWrapper>
          <StyledLink to="/forgot-password">Forgot Password?</StyledLink> | {""}
          <StyledLink to="/Signup">No Account?</StyledLink>
        </LinkWrapper>
      </StyledForm>
    </div>
  );
}

export default Login;
