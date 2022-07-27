import styled from 'styled-components';
import { PillButton } from '../../UI/Button.styles';
import Spinner from '../../UI/Spinner';
import Error from '../../UI/Error';
import {
	StyledForm,
	InputField,
	Wrapper,
	Input,
	StyledInlineErrorMessage,
} from '../../UI/StyledForm';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
	username: Yup.string()
		.min(6, 'Your username is too short')
		.required('Please enter your username')
		.matches(/^[a-zA-Z0-9]+$/, 'Invalid characters')
		.trim(),
	email: Yup.string().email('This email is not valid').required('Please enter your email').trim(),
	password: Yup.string()
		.required('Please enter your password')
		.min(6, 'Your password is too short, it should have at least 6 characters')
		.matches(
			/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
			'Password must contain at least one uppercase letter and one number'
		)
		.trim(),
	confirmPassword: Yup.string()
		.required('Please retype your password')
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.trim(),
});

function Signup() {
	const [errMessage, setErrMessage] = useState('');
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const updatadeFormValues = values => {
		setFormValues(values);
	};

	return (
		<Wrapper>
			<Error errMsg={errMessage} />
			<Formik
				initialValues={formValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					updatadeFormValues(values);

					axios
						.post('https://bianova.herokuapp.com/register', {
							'username': formValues.username,
							'email': formValues.email,
							'password': formValues.password,
						})
						.then(response => {
							console.log(response);
						})
						.catch(error => {
							if (error.response.status === 409) {
								setErrMessage('This username already exists');
							} else {
								setErrMessage('Something went wrong');
							}
						});

					const timeOut = setTimeout(() => {
						actions.setSubmitting(false);

						clearTimeout(timeOut);
					}, 1000);
				}}>
				{({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
					return (
						<>
							<StyledForm name='signup' method='post' onSubmit={handleSubmit}>
								<InputField>
									<Label htmlFor='username'>Username</Label>
									<Input
										type='text'
										name='username'
										autoCapitalize='off'
										autoCorrect='off'
										valid={touched.username && !errors.username}
										error={touched.username && errors.username}
									/>

									{errors.username && touched.username && (
										<StyledInlineErrorMessage>{errors.username}</StyledInlineErrorMessage>
									)}
								</InputField>

								<InputField>
									<Label htmlFor='email'>Email</Label>
									<Input
										type='email'
										name='email'
										autoCapitalize='off'
										autoCorrect='off'
										autoComplete='email'
										valid={touched.email && !errors.email}
										error={touched.email && errors.email}
									/>

									{errors.email && touched.email && (
										<StyledInlineErrorMessage>{errors.email}</StyledInlineErrorMessage>
									)}
								</InputField>

								<InputField>
									<Label htmlFor='password'>Password</Label>
									<Input
										type='password'
										name='password'
										autoCapitalize='off'
										autoCorrect='off'
										valid={touched.password && !errors.password}
										error={touched.password && errors.password}
									/>

									{errors.password && touched.password && (
										<StyledInlineErrorMessage>{errors.password}</StyledInlineErrorMessage>
									)}
								</InputField>

								<InputField>
									<Label htmlFor='confirmPassword'>Confirm Password</Label>
									<Input
										type='password'
										name='confirmPassword'
										autoCapitalize='off'
										autoCorrect='off'
										valid={touched.confirmPassword && !errors.confirmPassword}
										error={touched.confirmPassword && errors.confirmPassword}
									/>

									{errors.confirmPassword && touched.confirmPassword && (
										<StyledInlineErrorMessage>{errors.confirmPassword}</StyledInlineErrorMessage>
									)}
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

const Label = styled.label``;

export default Signup;
