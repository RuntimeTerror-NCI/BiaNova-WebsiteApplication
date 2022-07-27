import styled from 'styled-components';
// import { useState } from 'react';
import { Formik, Field, Form } from 'formik';

const CheckboxGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	width: 13rem;
`;

const FilterContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 25rem;
	margin-top: 5rem;
	justify-content: center;
	margin-left: -7rem;
`;

const CheckboxContainer = styled.div`
	display: flex;
`;

const LabelHead = styled.label`
	font-weight: 2rem;
	font-size: 1.5rem;
	padding-bottom: 6px;
`;

const CheckboxItem = styled.div`
	display: flex;
	height: 2rem;
	align-items: center;
`;
const CheckboxLabel = styled.label`
	padding-left: 15px;
	width: 8rem;
`;

const Checkbox = styled(Field)`
	cursor: pointer;
	width: 1.2rem;
	height: 1.2rem;
`;

const RadioLabel = styled.label``;

const Radio = styled(Field)``;

function RecipeFilter({ open }) {
	const sleep = ms => new Promise(r => setTimeout(r, ms));

	if (!open) return null;

	return (
		<Formik
			initialValues={{
				picked: [],
				checked: [],
			}}
			onSubmit={async values => {
				await sleep(500);
				alert(JSON.stringify(values, null, 2));
				console.log(values);
			}}>
			{({ values }) => (
				<Form>
					<FilterContainer>
						<CheckboxContainer>
							<CheckboxGroup>
								<LabelHead> Intolerances </LabelHead>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Dairy'></Checkbox> Dairy
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Egg'></Checkbox> Egg
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Gluten'></Checkbox> Gluten
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Grain'></Checkbox> Grain
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Peanut'></Checkbox> Peanut
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Seafood'></Checkbox> Seafood
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Sesame'></Checkbox> Sesame
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Shellfish'></Checkbox> Shellfish
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Soy'></Checkbox> Soy
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Sulfite'></Checkbox> Sulfite
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Tree'></Checkbox> Tree Nut
									</CheckboxLabel>
								</CheckboxItem>

								<CheckboxItem>
									<CheckboxLabel>
										<Checkbox type='checkbox' name='checked' value='Wheat'></Checkbox> Wheat
									</CheckboxLabel>
								</CheckboxItem>

								<div>CheckSelection: {values.checked + ' '}</div>
							</CheckboxGroup>
						</CheckboxContainer>

						<CheckboxContainer>
							<CheckboxGroup>
								<LabelHead> Diets </LabelHead>
								<div role='group' aria-labelledby='my-radio-group'>
									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='gluten-free' />
											glutenFree
										</RadioLabel>
									</CheckboxItem>

									<RadioLabel>
										<Radio type='radio' name='picked' value='keotgenic' />
										ketogenic
									</RadioLabel>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='vegatarian' />
											vegatarian
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='lacto-vegatarian' />
											lactoVegetarian
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='ovo-vegatarian' />
											ovo-vegatarian
										</RadioLabel>
									</CheckboxItem>
									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='vegan' />
											vegan
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='pescatarian' />
											pescatarian
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='paleo' />
											paleo
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='primal' />
											primal
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='lowFodmap' />
											lowFodmap
										</RadioLabel>
									</CheckboxItem>

									<CheckboxItem>
										<RadioLabel>
											<Radio type='radio' name='picked' value='Whole30' />
											Whole30
										</RadioLabel>
									</CheckboxItem>
								</div>

								<div>RadioSelection: {values.picked}</div>
							</CheckboxGroup>
						</CheckboxContainer>
						<button type='submit'>Click</button>
					</FilterContainer>
				</Form>
			)}
		</Formik>
	);
}

export default RecipeFilter;
