import styled from 'styled-components';
// import { useState } from 'react';
import { Formik, useFormik, Field, Form } from 'formik';

const CheckboxGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
`;

const FilterContainer = styled.div`
	display: flex;
	width: 100vw;
	margin-top: 5rem;
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

const Checkbox = styled.input`
	cursor: pointer;
	width: 1rem;
	height: 1rem;
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
										<Field
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
										<Field
											type='checkbox'
											id={diet}
											name={diet}
											checked={formik.values.diets.includes(diet)}
											onChange={handleDietChange}
										/>
										<label htmlFor={diet}> {diet} </label>
									</CheckboxItem>
								))}
							</div>
						</CheckboxGroup>
					</CheckboxContainer>

					<CheckboxContainer>
						<CheckboxGroup>
							<LabelHead> Nutrition </LabelHead>
							<div role='group' aria-labelledby='checkbox-group'>
								{nutritions.map(nutrition => (
									<CheckboxItem key={nutrition}>
										<Field
											type='number'
											id={nutrition}
											name={nutrition}
											checked={formik.values.nutritions.includes(nutrition)}
											onChange={handleNutritionChange}
										/>
										<label htmlFor={nutrition}> {nutrition} </label>
									</CheckboxItem>
								))}
							</div>
						</CheckboxGroup>
					</CheckboxContainer>
				</FilterContainer>
			</Form>
		</Formik>
	);
}

export default RecipeFilter;
