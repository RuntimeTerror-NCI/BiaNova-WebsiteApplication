import styled from 'styled-components';
// import { useState } from 'react';
import { Formik, useFormik, Field, Form } from 'formik';

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

function RecipeFilter() {
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			intolerances: [],
			diets: [],
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

	const diets = [
		'gluten free',
		'ketogenic',
		'vegetarian',
		'lacto-vegetarian',
		'ovo-vegetarian',
		'vegan',
		'pescetarian',
		'paleo',
		'primal',
		'low FODMAP',
		'whole 30',
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

	const handleDietChange = e => {
		const { checked, name } = e.target;
		if (checked) {
			formik.setFieldValue('diets', [...formik.values.diets, name]);
		} else {
			formik.setFieldValue(
				'diets',
				formik.values.diets.filter(val => val !== name)
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

	return (
		<Formik>
			<Form onSubmit={formik.handleSubmit}>
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
							<div role='group' aria-labelledby='checkbox-group'>
								{diets.map(diet => (
									<CheckboxItem key={diet}>
										<Checkbox
											type='checkbox'
											id={diet}
											name={diet}
											checked={formik.values.diets.includes(diet)}
											onChange={handleDietChange}
										/>
										<CheckboxLabel htmlFor={diet}> {diet} </CheckboxLabel>
									</CheckboxItem>
								))}
							</div>
						</CheckboxGroup>
					</CheckboxContainer>

					<CheckboxContainer>
						<CheckboxGroup>
							<LabelHead> Nutrition </LabelHead>
							<NutritionGroup role='group' aria-labelledby='checkbox-group'>
								{nutritions.map(nutrition => (
									<NutritionItem key={nutrition}>
										<Input
											type='number'
											id={nutrition}
											name={nutrition}
											checked={formik.values.nutritions.includes(nutrition)}
											onChange={handleNutritionChange}
										/>
										<CheckboxLabel htmlFor={nutrition}> {nutrition} </CheckboxLabel>
									</NutritionItem>
								))}
							</NutritionGroup>
						</CheckboxGroup>
					</CheckboxContainer>
				</FilterContainer>
			</Form>
		</Formik>
	);
}

export default RecipeFilter;
