import styled from 'styled-components';
// import { useState } from 'react';
import { Formik, useFormik, Field, Form } from 'formik';
import { useState } from 'react';

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

const NutritionGroup = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 25rem;
	width: fit-content;
`;

const NutritionItem = styled.div`
	display: flex;
	margin-bottom: 1.2rem;
	align-items: center;
	flex: 1 1 1;
`;

const Input = styled(Field)`
	width: 4rem;
	height: 1.3rem;
`;

const RadioLabel = styled.label``;

const Radio = styled(Field)``;

function RecipeFilter() {
	const [state, setState] = useState('');
	const [nutrition, setNutrition] = useState([]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			intolerances: [],
			nutritions: [],
		},
		onSubmit: values => {
			console.log(values);
		},
	});

	const intolerances = [
		'dairy',
		'egg',
		'gluten',
		'peanut',
		'sesame',
		'seafood',
		'shellfish',
		'soy',
		'sulfite',
		'treeNut',
		'wheat',
	];

	const nutritions = [
		'minCarbs',
		'maxCarbs',
		'minProtein',
		'maxProtein',
		'minCalories',
		'maxCalories',
		'minFat',
		'maxFat',
		'minSaturatedFat',
		'maxSaturatedFat',
		'minSodium',
		'maxSodium',
		'minSugar',
		'maxSugar',
	];

	const handleIntoleranceChange = e => {
		const { checked, name } = e.target;
		if (checked) {
			formik.setFieldValue('intolerances', [...formik.values.intolerances, name]);
		} else {
			formik.setFieldValue(
				'intolerances',
				formik.values.intolerances.filter(val => val !== name)
			);
		}
	};

	const handleNutritionChange = e => {
		const { checked, name } = e.target;
		if (checked) {
			formik.setFieldValue('nutritions', [...formik.values.nutritions, name]);
		} else {
			formik.setFieldValue(
				'nutritions',
				formik.values.nutritions.filter(val => val !== name)
			);
		}
	};

	const onChange = e => {
		let nutr = [];
		if (e.target.value.trim() >= 0) {
			setState(e.target.value);
		}
		nutr.push(state);
		setNutrition(nutr);
		console.log('nutrition: ' + nutrition, 'nutr ' + nutr, e.target.name, e.target.value);
	};

	const sleep = ms => new Promise(r => setTimeout(r, ms));
	return (
		<Formik
			initialValues={{
				picked: [],
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
								<div role='group' aria-labelledby='checkbox-group'>
									{intolerances.map(intolerance => (
										<CheckboxItem key={intolerance}>
											<Checkbox
												type='checkbox'
												id={intolerance}
												name={intolerance}
												checked={formik.values.intolerances.includes(intolerance)}
												onChange={handleIntoleranceChange}
											/>
											<CheckboxLabel htmlFor={intolerance}> {intolerance} </CheckboxLabel>
										</CheckboxItem>
									))}
								</div>
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
									<div>Picked: {values.picked}</div>
								</div>
							</CheckboxGroup>
						</CheckboxContainer>

						<CheckboxContainer>
							<CheckboxGroup>
								<LabelHead> Nutrition </LabelHead>
								<NutritionGroup role='group' aria-labelledby='checkbox-group'>
									<NutritionItem>
										<Input
											type='number'
											name='minCarbs'
											value={state}
											onChange={e => onChange(e)}
										/>
										<CheckboxLabel> MinCarbs </CheckboxLabel>
									</NutritionItem>
								</NutritionGroup>
							</CheckboxGroup>
						</CheckboxContainer>
					</FilterContainer>
					<button type='submit'>Click</button>
				</Form>
			)}
		</Formik>
	);
}

export default RecipeFilter;
