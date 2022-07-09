import styled from 'styled-components';

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
`;

const Checkbox = styled.input``;

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
`;

const InputLabel = styled.label`
	width: 5rem;
`;

const RecipeFilterStyled = styled.div`
	margin-top: 2rem;
`;

function RecipeFilter({ open, close }) {
	if (!open) return null;
	return (
		<RecipeFilterStyled>
			<StyledForm>
				<CheckboxContainer>
					<CheckboxGroup>
						<LabelHead> Intolerances </LabelHead>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Dairy</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Gluten</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Peanut</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Sesame</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Seafood</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Shellfish</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Nuts</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Wheat</CheckboxLabel>
						</CheckboxItem>
					</CheckboxGroup>

					<CheckboxGroup>
						<LabelHead> Diets </LabelHead>
						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>GlutenFree</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Ketogenic </CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Vegetarian </CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>LactoVegetarian </CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>OvoVegetarian </CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Vegan</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Pescatarian</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Paleo</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Primal</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>LowFODMAP</CheckboxLabel>
						</CheckboxItem>

						<CheckboxItem>
							<Checkbox type='checkbox' />
							<CheckboxLabel>Whole30 </CheckboxLabel>
						</CheckboxItem>
					</CheckboxGroup>
				</CheckboxContainer>

				<InputGroup>
					<InputContainer>
						<InputLabel for='minCal'> Min Calories </InputLabel>
						<Input type='number' name='minCal' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxCal'> Max Calories </InputLabel>
						<Input type='number' name='maxCal' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='minCarbs'> Min Carbs </InputLabel>
						<Input type='number' name='minCarbs' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxCarbs'> Max Carbs </InputLabel>
						<Input type='number' name='maxCarbs' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='minProtein'> Min Protein </InputLabel>
						<Input type='number' name='minProtein' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxProtein'> Max Protein </InputLabel>
						<Input type='number' name='maxProtein' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='minSugar'> Min Sugar </InputLabel>
						<Input type='number' name='minSugar' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxSugar'> Max Sugar </InputLabel>
						<Input type='number' name='maxSugar' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='minSodium'> Min Sodium </InputLabel>
						<Input type='number' name='minSodium' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxSodium'> Max Sodium </InputLabel>
						<Input type='number' name='maxSodium' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='minSatFat'> Min Saturated Fat </InputLabel>
						<Input type='number' name='minSatFat' />
					</InputContainer>

					<InputContainer>
						<InputLabel for='maxSatFat'> Max Saturated Fat</InputLabel>
						<Input type='number' name='maxSatFat' />
					</InputContainer>
				</InputGroup>
			</StyledForm>
		</RecipeFilterStyled>
	);
}

export default RecipeFilter;
