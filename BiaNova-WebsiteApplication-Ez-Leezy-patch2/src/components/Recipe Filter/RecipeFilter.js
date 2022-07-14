import styled from 'styled-components';
import { useState } from 'react';

const InputContainer = styled.div`
	padding: 0.8rem 0;
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const LabelHead = styled.label`
	font-weight: 2rem;
	font-size: 1.5rem;
	padding-bottom: 6px;
`;

const Input = styled.input`
	height: 30px;
	width: 50px;
	padding: 0.5rem;
`;

const Checkbox = styled.input`
	cursor: pointer;
	width: 1rem;
	height: 1rem;
`;

const StyledForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	background-color: white;
	width: 90%;
	margin: auto;
	padding: 2rem 4rem;
`;

const CheckboxContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const InputGroup = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px 60px;
	justify-content: center;
`;

const CheckboxItem = styled.div`
	display: flex;
	height: 2rem;
	align-items: center;
`;

const CheckboxGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
`;

const CheckboxLabel = styled.label`
	padding-left: 15px;
	width: 8rem;
`;

const InputLabel = styled.label`
	width: 5rem;
`;

const RecipeFilterStyled = styled.div`
	margin-top: 2rem;
`;

const RadioButton = styled.input`
	width: 1rem;
	height: 1rem;
	cursor: pointer;
`;

function RecipeFilter({ open, params }) {
	const [filterParams, setFilterParams] = useState({
		intolerances: [],
		diet: '',
		nutrition: [],
	});

	const [nutrition, setNutrition] = useState([]);

	const [intolerances, setIntolerances] = useState([{ name: '', isChecked: false }]);

	function handleCheckboxSelection(e) {
		let capture = e.target.checked;
		let value = e.target.checked.value;
		console.log(capture, value);
	}

	function handleNutrition(e, i) {
		let newNutrition = [...nutrition];
		let capture = e.target.value;
		let text = e.currentTarget.name.toString();

		if (capture > 0) {
			if (newNutrition.includes(`&${text}`)) {
				console.log('found' + newNutrition);
			}
			newNutrition.push(`&${text}=${capture}`);
		}
		setNutrition(newNutrition);
	}

	function toCapitalCase(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	if (!open) return null;

	return (
		<RecipeFilterStyled>
			<StyledForm>
				<CheckboxContainer>
					<CheckboxGroup>
						<LabelHead> Intolerances </LabelHead>
						{params.intolerances.map((intolerance, i) => (
							<CheckboxItem key={i}>
								<Checkbox
									name={`${intolerance}`}
									type='checkbox'
									onChange={e => handleCheckboxSelection(e)}
									value='${intolerance}'
								/>
								<CheckboxLabel htmlFor={`${intolerance}`}>
									{toCapitalCase(intolerance)}
								</CheckboxLabel>
							</CheckboxItem>
						))}
					</CheckboxGroup>

					<CheckboxGroup>
						{' '}
						<LabelHead> Diets </LabelHead>
						{Object.values(params.diets).map((diet, i) => (
							<CheckboxItem key={i}>
								<Input type='checkbox' name='myCheckbox' />
								<CheckboxLabel htmlFor={`${diet}`}>{toCapitalCase(diet)}</CheckboxLabel>
							</CheckboxItem>
						))}
					</CheckboxGroup>
				</CheckboxContainer>

				<InputGroup>
					{Object.keys(params.nutrition).map((nutrition, i) => (
						<InputContainer key={i}>
							<Input type='number' name={`${nutrition}`} onChange={e => handleNutrition(e, i)} />
							<InputLabel htmlFor={`${nutrition}`}> {toCapitalCase(nutrition)}</InputLabel>
						</InputContainer>
					))}
				</InputGroup>
			</StyledForm>

			{console.log(nutrition)}
		</RecipeFilterStyled>
	);
}

export default RecipeFilter;
