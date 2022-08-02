import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { PillButton } from '../../UI/Button.styles';
import { Input, InputField, Wrapper, StyledForm, Frame } from '../../UI/StyledForm';
import Error from '../../UI/Error';
import Spinner from '../../UI/Spinner';
import styled from 'styled-components';

const validationSchema = Yup.object().shape({
	email: Yup.string().email('This email is not valid').required('Please enter your email').trim(),
	password: Yup.string()
		.required('Please enter your password')
		.min(6, 'Your password is too short, it should have at least 6 characters')
		.matches(
			/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
			'Password must contain at least one uppercase letter and one number'
		)
		.trim(),
});

function EditProfile({ user, token }) {
	const [errMessage, setErrMessage] = useState('');

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		axios.get('https://bianova.herokuapp.com/profile', {
			username: user,
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		});
	};

	return (
		<Frame>
			<Wrapper>
				<Error errMsg={errMessage} />
				<Formik
					validationSchema={validationSchema}
					onSubmit={(values, actions) => {
						axios
							.put('https://bianova.herokuapp.com/profile', {
								email: values.email,
								password: values.password,
							})
							.then(response => {
								console.log(response);
							})
							.catch(error => {
								console.log(error);
							})(error => {
							setErrMessage(error);
						});

						const timeOut = setTimeout(() => {
							actions.setSubmitting(false);

							clearTimeout(timeOut);
						}, 1000);
					}}>
					{({ handleSubmit, isSubmitting, isValid }) => {
						return (
							<>
								<StyledForm name='edit-profile' method='put' onSubmit={handleSubmit}>
									<InputField>
										<Label htmlFor='email'>Email</Label>
										<Input />
									</InputField>

									<InputField>
										<Label htmlFor='password'>Password</Label>
										<Input />
									</InputField>

									<InputField>
										<Label htmlFor='confirmPassword'>Confirm Password</Label>
										<Input />
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
		</Frame>
	);
}

const Label = styled.label``;

export default EditProfile;
