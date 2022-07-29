import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  StyledInlineErrorMessage,
  InputField,
  Wrapper,
  StyledForm,
} from "../../UI/StyledForm";
import { PillButton } from "../../UI/Button.styles";
import axios from "axios";
import Spinner from "../../UI/Spinner";
import Error from "../../UI/Error";

const validationScehma = Yup.object().shape({
  username: Yup.string().required("Please enter your username").trim(),
  password: Yup.string().required("Please enter your password").trim(),
});

function Login({ setToken, setUser }) {
  const [errMessage, setErrMessage] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  const updatedFormValues = (values) => {
    const newValues = values;
    setFormValues(newValues);
  };

  const updateCredentials = (user, token) => {
    setUser(user);
    setToken(token);
  };

  return (
    <Wrapper>
      <Error errMsg={errMessage} />
      <Formik
        initialValues={formValues}
        validationSchema={validationScehma}
        onSubmit={(values, actions) => {
          updatedFormValues(values);

          axios
            .post("https://bianova.herokuapp.com/login", {
              username: values.username,
              password: values.password,
            })
            .then((response) => {
              let [user, token] = response.data.split(" ");
              setUser(user);
              setToken(token);

              handleRedirect();
              window.location.reload(); //reload
            })
            .catch((error) => {
              console.log(error);
              setErrMessage("Something went wrong");
            });

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
          return (
            <>
              <StyledForm name="login" method="post" onSubmit={handleSubmit}>
                <InputField>
                  <Label htmlFor="username">
                    Username
                    <Input
                      type="text"
                      name="username"
                      autoCapitalize="off"
                      autoCorrect="off"
                      valid={touched.username && !errors.username}
                      error={touched.username && errors.username}
                    />
                  </Label>
                  <ErrorMessage name="username">
                    {(msg) => (
                      <StyledInlineErrorMessage>
                        {" "}
                        {msg}{" "}
                      </StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </InputField>

                <InputField>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />

                  {errors.password && touched.password && (
                    <StyledInlineErrorMessage>
                      {errors.password}
                    </StyledInlineErrorMessage>
                  )}
                </InputField>
                <PillButton type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submitting...` : `Submit`}
                </PillButton>
                {isSubmitting && <Spinner />}
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </Wrapper>
  );
}

const Label = styled.label``;

export default Login;
