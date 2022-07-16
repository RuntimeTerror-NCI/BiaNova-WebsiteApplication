import { useForm } from "react-hook-form";
import styled from "styled-components";
// import React, { useState, useEffect, useRef } from "react";
import Form, { StyledLink } from "../../UI/Form";
import { PillButton } from "../../UI/Button.styles";
import axios from "axios";

function Signup() {
  //   const userRef = useRef();
  //   const errRef = useRef();
  //   const [userName, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [validUser, setValidUser] = useState(false);
  //   const [validEmail, setValidEmail] = useState(false);
  //   const [validPassword, setValidPassword] = useState(false);
  //   const [validconfirm, setValidConfirm] = useState(false);
  //   const [userFocus, setUserFocus] = useState(false);
  //   const [emailFocus, setEmailFocus] = useState(false);
  //   const [passwordFocus, setPasswordFocus] = useState(false);
  //   const [confirmFocus, setConfirmFocus] = useState(false);
  //   const [errMsg, setErrMsg] = useState("");
  //   const [success, setSuccess] = useState(false);
  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // useEffect(() => {
  //     userRef.current.focus();
  //   }, []);
  //   useEffect(() => {
  //     setValidUser(USER_REGEX.test(userName));
  //   }, [userName]);
  //   useEffect(() => {
  //     setValidPassword(PWD_REGEX.test(password));
  //     setValidConfirm(password === confirmPassword);
  //   }, [password, confirmPassword]);
  //   useEffect(() => {
  //     setErrMsg("");
  //   }, [userName, password, confirmPassword]);
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const v1 = USER_REGEX.test(userName);
  //     const v2 = PWD_REGEX.test(password);
  //     const v3 = EMAIL_REGEX.test(email);
  //     if (!v1 || !v2 || (!v3 && !password.match(confirmPassword))) {
  //       setErrMsg("Invalid Entry");
  //       return;
  //     } //end if
  //     try {
  //       const response = await axios.post(
  //         "https://bianova.herokuapp.com/register",
  //         {
  //           username: userName,
  //           password: password,
  //           email: email,
  //         }
  //       );
  //       setSuccess(true);
  //       setUsername("");
  //       setEmail("");
  //       setPassword("");
  //       setConfirmPassword("");
  //     } catch (err) {
  //       if (!err?.response) {
  //         setErrMsg("No Server Response");
  //       } else if (err.response?.status === 409) {
  //         setErrMsg("Username Taken");
  //       } else {
  //         setErrMsg("Registration Failed");
  //       }
  //       //   errRef.current.focus();
  //     }
  //   };
  //   function validateUserName(e) {
  //     if (USER_REGEX.test(e.target.value)) {
  //       setUsername(e.target.value);
  //     } else if (userFocus) {
  //       setErrMsg(`${e.target.value} is invalid`);
  //     }
  //   }
  //   function validateEmail(e) {
  //     if (EMAIL_REGEX.test(e.target.value)) {
  //       setEmail(e.target.value);
  //     } else if (emailFocus) {
  //       setErrMsg(`${e.target.value} is invalid`);
  //     }
  //   }
  //   function validatePassword(e) {
  //     if (PWD_REGEX.test(e.target.value)) {
  //       setPassword(e.target.value);
  //     } else if (passwordFocus) {
  //       setErrMsg(`${e.target.value} is invalid`);
  //     }
  //   }
  //   function validateConfirmPassword(e) {
  //     if (PWD_REGEX.test(e.target.value) && password === confirmPassword) {
  //       setConfirmPassword(e.target.value);
  //     } else {
  //       setErrMsg("passwords do not match");
  //     }
  //   }

  //   function ReactHookFormComponent() {
  //     const {
  //       register,
  //       handleSubmit,
  //       formState: { errors },
  //     } = useForm();
  //     const onSubmit = (data) => console.log(data);
  //     // {"email":"abc@gmail.com"}

  // return (
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <input
  //           {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
  //         />
  //         {errors.email?.type === "required" && (
  //           <span> This field is required</span>
  //         )}
  //         {errors.email?.type === "pattern" && <span> Invalid email</span>}
  //       </form>
  //     );
  //   }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Form>
      <FormHeader> Sign Up </FormHeader>

      <InputContainer>
        <Label> Username </Label>
        <Input
          {...register("Username", {
            required: true,
            maxLength: 20,
            pattern: { USER_REGEX },
          })}
        />

        {errors.username?.type === "required" && (
          <span> this field is required! </span>
        )}

        {errors.username?.type === "maxLength" && (
          <span> username too long! </span>
        )}

        {errors.username?.type === "pattern" && <span> Invalid Email! </span>}
      </InputContainer>

      {/* <InputContainer>
        <Label> Email </Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </InputContainer>
      <InputContainer>
        <Label> Password </Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <span>{}</span>
      </InputContainer>
      <InputContainer>
        <Label> Re-Enter Password </Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setConfirmFocus(true)}
          onBlur={() => setConfirmFocus(false)}
        />
        <span>{}</span>
      </InputContainer> */}
      <PillButton type="submit" onSubmit={handleSubmit(onSubmit)}>
        Sign Up!
      </PillButton>
      <LinkWrapper>
        <StyledLink to="/Login">Already have an Account?</StyledLink>
      </LinkWrapper>
    </Form>
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

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 0.2rem;
  outline: none;
`;

const LinkWrapper = styled.div`
  margin: auto;
  margin-top: 2rem;
`;

export default Signup;
