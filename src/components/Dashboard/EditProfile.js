import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import {
  Input,
  StyledInlineErrorMessage,
  InputField,
  Wrapper,
  StyledForm,
  Frame,
} from "../../UI/StyledForm";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("This email is not valid")
    .required("Please enter your email")
    .trim(),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Your password is too short, it should have at least 6 characters")
    .matches(
      /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
      "Password must contain at least one uppercase letter and one number"
    )
    .trim(),
});

function EditProfile({ user, token }) {
  const [errMessage, setErrMessage] = useState("");
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const updatedUserValues = (values) => {
    const newValues = values;
    setUserValues(newValues);
  };

  return (
    <Frame>
      <Wrapper>
        <Error errMsg={errMessage} />
        <Formik
          initalValues={userValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            updatedUserValues(values);

            axios
              .put("https://bianova.herokuapp.com/prrofile", {
                email: values.email,
                password: values.password,
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              })((error) => {
              setErrMessage(error);
            });

            const timeOut = setTimeout(() => {
              actions.setSubmitting(false);

              clearTimeout(timeOut);
            }, 1000);
          }}
        >
          {({ handleSubmit, isSubmitting, isValid }) => {
            return (
              <>
                <StyledForm
                  name="edit-profile"
                  method="put"
                  onSubmit={handleSubmit}
                >
                  <InputField>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      autoCapitalize="off"
                      autoCorrect="off"
                      valid={touched.username && !errors.username}
                      error={touched.username && errors.username}
                    />

                    {errors.username && touched.username && (
                      <StyledInlineErrorMessage>
                        {errors.username}
                      </StyledInlineErrorMessage>
                    )}
                  </InputField>

                  <InputField>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />

                    {errors.email && touched.email && (
                      <StyledInlineErrorMessage>
                        {errors.email}
                      </StyledInlineErrorMessage>
                    )}
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

                  <InputField>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      autoCapitalize="off"
                      autoCorrect="off"
                      valid={touched.confirmPassword && !errors.confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                    />

                    {errors.confirmPassword && touched.confirmPassword && (
                      <StyledInlineErrorMessage>
                        {errors.confirmPassword}
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
    </Frame>
  );
}
