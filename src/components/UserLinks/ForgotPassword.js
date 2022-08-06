import styled from 'styled-components';
import React, { useState } from 'react';
import {
	Input,
	StyledInlineErrorMessage,
	InputField,
	Wrapper,
	StyledForm,
} from '../../UI/StyledForm';
import { useNavigate } from 'react-router-dom';
import { PillButton } from '../../UI/Button.styles';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Spinner from '../../UI/Spinner';
import Error from '../../UI/Error';

const Label = styled.label``;

const validationScehma = Yup.object().shape({
	username: Yup.string().required('Please enter your username').trim(),
});

function ForgotPassword(token, user) {
	const [formValues, setFormValues] = useState({
		username: '',
	});

	const updatedFormValues = values => {
		const newValues = values;
		setFormValues(newValues);
	};

	const [errMessage, setErrMessage] = useState('');

	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate('/');
	};

	return (
		<Wrapper>
			<Error errMsg={errMessage} />
			<Formik
				initialValues={formValues}
				validationSchema={validationScehma}
				onSubmit={(values, actions) => {
					updatedFormValues(values);
					let headers = {
						Authorization: `Bearer ${token}`,
					};

					axios
						.get('https://bianova.herokuapp.com/reset_email', {
							params: {
								username: values.username,
							},
							headers: headers,
						})
						.then(response => {
							console.log(response);
							handleRedirect();
							alert('Please Check Your Email For Reset Code!');
						})
						.catch(err => {
							console.log(err);
							setErrMessage('something went wrong...');
						});

					const timeOut = setTimeout(() => {
						actions.setSubmitting(false);

						clearTimeout(timeOut);
					}, 1000);
				}}>
				{({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
					return (
						<>
							<StyledForm name='forgot-password' method='get' onSubmit={handleSubmit}>
								<InputField>
									<Label htmlFor='username'>
										Username
										<Input
											type='username'
											name='username'
											autoCapitalize='off'
											autoCorrect='off'
											autoComplete='off'
											placeholder='Enter Username'
											valid={touched.username && !errors.username}
											error={touched.username && errors.username}
										/>
									</Label>
									<ErrorMessage name='username'>
										{msg => <StyledInlineErrorMessage> {msg} </StyledInlineErrorMessage>}
									</ErrorMessage>
								</InputField>

								<PillButton type='submit' disabled={!isValid || isSubmitting}>
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

export default ForgotPassword;
