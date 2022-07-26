import React from 'react';
import { Formik, Field, Form } from 'formik';

const RadioGroup = () => (
	<div>
		<Formik
			initialValues={{
				picked: '',
			}}
			onSubmit={async values => {
				await new Promise(r => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}>
			{({ values }) => (
				<Form>
					<div id='my-radio-group'>Picked</div>
					<div role='group' aria-labelledby='my-radio-group'>
						<label>
							<Field type='radio' name='picked' value='gluten-free' />
							glutenFree
						</label>

						<label>
							<Field type='radio' name='picked' value='keotgenic' />
							ketogenic
						</label>

						<label>
							<Field type='radio' name='picked' value='vegatarian' />
							vegatarian
						</label>

						<label>
							<Field type='radio' name='picked' value='lacto-vegatarian' />
							lactoVegetarian
						</label>

						<label>
							<Field type='radio' name='picked' value='ovo-vegatarian' />
							ovo-vegatarian
						</label>

						<label>
							<Field type='radio' name='picked' value='vegan' />
							vegan
						</label>

						<label>
							<Field type='radio' name='picked' value='pescatarian' />
							pescatarian
						</label>

						<label>
							<Field type='radio' name='picked' value='paleo' />
							paleo
						</label>

						<label>
							<Field type='radio' name='picked' value='primal' />
							primal
						</label>

						<label>
							<Field type='radio' name='picked' value='lowFodmap' />
							lowFodmap
						</label>

						<label>
							<Field type='radio' name='picked' value='Whole30' />
							Whole30
						</label>

						<div>Picked: {values.picked}</div>
					</div>

					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default RadioGroup;
