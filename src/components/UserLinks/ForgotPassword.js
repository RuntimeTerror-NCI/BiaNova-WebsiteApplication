import styled from 'styled-components';
import React, { useState } from 'react';
import { Input, StyledInlineErrorMessage, InputField, Wrapper } from '../../UI/StyledForm';
import { PillButton } from '../../UI/Button.styles';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Label = styled.label``;

const validationScehma = Yup.object().shape({
	email: Yup.string().email('Email was not found').required('Please Enter A Valid Email'),
});

function ForgotPassword() {
	const [formValues, setFormValues] = useState();

	return (
		<Wrapper>
			<Formik
				initialValues={{
					email: '',
				}}
				validationSchema={validationScehma}
				onSubmit={(values, actions) => {
					console.log(values);
					setFormValues(values);

					const timeOut = setTimeout(() => {
						actions.setSubmitting(false);

						clearTimeout(timeOut);
					}, 1000);
				}}>
				{({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => {
					return (
						<>
							<Form>
								<InputField>
									<Label htmlFor='email'>
										Email
										<Input
											type='email'
											name='email'
											autoCapitalize='off'
											autoCorrect='off'
											autoComplete='email'
											placeholder='your email'
											valid={touched.email && !errors.email}
											error={touched.email && errors.email}
										/>
									</Label>
									<ErrorMessage name='email'>
										{msg => <StyledInlineErrorMessage> {msg} </StyledInlineErrorMessage>}
									</ErrorMessage>
								</InputField>

								<PillButton type='submit' disabled={!isValid || isSubmitting}>
									{isSubmitting ? `Submitting...` : `Submit`}
								</PillButton>
							</Form>
						</>
					);
				}}
			</Formik>
		</Wrapper>
	);
}

export default ForgotPassword;
