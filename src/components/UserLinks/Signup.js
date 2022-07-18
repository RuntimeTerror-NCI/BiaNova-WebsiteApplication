import styled from "styled-components";
import { Wrapper, StyledLink, StyledInput } from "../../UI/StyledForm";
import { PillButton } from "../../UI/Button.styles";
import React, { useState } from "react";
import { validEmail, validUsername, validPassword } from "../../UI/Regex";

const initialStates = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [state, setState] = useState(initialStates);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");

    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`you must provide the ${key}`);
        return;
      }

      if (!validUsername.test(state[key] === "username")) {
        setError("Please Enter a Valid Username!");
        return;
      }

      if (!validEmail.test(state[key] === "email")) {
        setError("Please Enter a Valid Email!");
        return;
      }

      if (!validPassword.test(state[key] === "password")) {
        setError("Please Enter a Valid Password!");
        return;
      }

      if (!validPassword.test(state[key] === "confirmPassword")) {
        setError("Please Enter a Valid Password!");
        return;
      }
    }

    setError("");
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value })); //creates properties computed on that value
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <FormHeader> Sign Up </FormHeader>

        <InputContainer>
          <Label> Username </Label>
          <StyledInput
            type="text"
            name="username"
            value={state.name}
            onChange={handleInput}
          />
        </InputContainer>

        <InputContainer>
          <Label> Email </Label>
          <StyledInput
            type="email"
            name="email"
            value={state.name}
            onChange={handleInput}
          />
        </InputContainer>

        <InputContainer>
          <Label> Password </Label>
          <StyledInput
            type="password"
            name="password"
            value={state.name}
            onChange={handleInput}
          />
        </InputContainer>

        <InputContainer>
          <Label> Re-Enter Password </Label>
          <StyledInput
            type="password"
            name="confirmPassword"
            onChange={handleInput}
            value={state.name}
          />
        </InputContainer>

        {error && (
          <div id="error">
            <p> {error} </p>
          </div>
        )}

        <PillButton type="submit">Sign Up!</PillButton>
        <LinkWrapper>
          <StyledLink to="/Login">Already have an Account?</StyledLink>
        </LinkWrapper>
      </StyledForm>
    </Wrapper>
  );
}

const InputContainer = styled.div`
  padding: 0.8rem 0;
  width: 25rem;
`;

const FormHeader = styled.h1`
  margin-top: 3rem;
`;

const Label = styled.label``;

const LinkWrapper = styled.div`
  margin: auto;
  margin-top: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  padding: 3rem 8rem 4rem;
  flex-direction: column;
`;

export default Signup;
