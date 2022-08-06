import styled from "styled-components";

import { Formik, Field, Form } from "formik";
import { devices } from "../../mediaQueries/devices";

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
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;

  @media ${devices.mobileL} {
     {
      width: 40%;
    }
  }
`;

const LabelHead = styled.label`
  font-weight: 2rem;
  font-size: 1.5rem;
  padding-bottom: 6px;

  @media ${devices.mobileM} {
    font-size: 1.25rem;
    font-weight: 1.7rem;
    padding-bottom: 4px;
    text-align: left;
    line-height: 2rem;
  }

  @media ${devices.mobileS} {
    font-size: 1.15rem;
    font-weight: 1.6rem;
    padding-bottom: 3px;
    text-align: left;
    line-height: 1.7rem;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;

  @media ${devices.mobileL} {
    width: fit-content;
  }
`;

const CheckboxLabel = styled.label`
  width: 8rem;
  @media ${devices.mobileM} {
    font-size: 0.8rem;
  }

  @media ${devices.mobileS} {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
`;
const Checkbox = styled(Field)`
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;

  margin-right: 0.8rem;
`;

const RadioLabel = styled.label`
  @media ${devices.mobileM} {
    font-size: 0.8rem;
  }

  @media ${devices.mobileS} {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

const Radio = styled(Field)`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.8rem;
`;

const BtnDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`;

function RecipeFilter({ open, filteredIntolerances, filteredDiet }) {
  if (!open) return null;

  const getIntolerances = (values) => {
    let iList = values.intolerances.join();
    filteredIntolerances(iList);
  };

  const getDiets = (values) => {
    let dList = values.diets;
    filteredDiet(dList);
  };

  return (
    <Formik
      initialValues={{
        diets: [],
        intolerances: [],
      }}
      onSubmit={async (values) => {
        getIntolerances(values);
        getDiets(values);
      }}
    >
      {({}) => {
        return (
          <Form>
            <FilterContainer>
              <CheckboxContainer>
                <CheckboxGroup>
                  <LabelHead> Intolerances </LabelHead>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Dairy"
                      ></Checkbox>{" "}
                      Dairy
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Egg"
                      ></Checkbox>{" "}
                      Egg
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Gluten"
                      ></Checkbox>{" "}
                      Gluten
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Grain"
                      ></Checkbox>{" "}
                      Grain
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Peanut"
                      ></Checkbox>{" "}
                      Peanut
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Seafood"
                      ></Checkbox>{" "}
                      Seafood
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Sesame"
                      ></Checkbox>{" "}
                      Sesame
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Shellfish"
                      ></Checkbox>{" "}
                      Shellfish
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Soy"
                      ></Checkbox>{" "}
                      Soy
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Sulfite"
                      ></Checkbox>{" "}
                      Sulfite
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Tree"
                      ></Checkbox>{" "}
                      Tree Nut
                    </CheckboxLabel>
                  </CheckboxItem>

                  <CheckboxItem>
                    <CheckboxLabel>
                      <Checkbox
                        type="checkbox"
                        name="intolerances"
                        value="Wheat"
                      ></Checkbox>{" "}
                      Wheat
                    </CheckboxLabel>
                  </CheckboxItem>
                </CheckboxGroup>
              </CheckboxContainer>

              <CheckboxContainer>
                <CheckboxGroup>
                  <LabelHead> Diets </LabelHead>
                  <div role="group" aria-labelledby="my-radio-group">
                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="" />
                        None
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="gluten-free" />
                        glutenFree
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="ketogenic" />
                        ketogenic
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="vegatarian" />
                        vegatarian
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio
                          type="radio"
                          name="diets"
                          value="lacto-vegatarian"
                        />
                        lactoVegetarian
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio
                          type="radio"
                          name="diets"
                          value="ovo-vegatarian"
                        />
                        ovo-vegatarian
                      </RadioLabel>
                    </CheckboxItem>
                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="vegan" />
                        vegan
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="pescatarian" />
                        pescatarian
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="paleo" />
                        paleo
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="primal" />
                        primal
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="lowFodmap" />
                        lowFodmap
                      </RadioLabel>
                    </CheckboxItem>

                    <CheckboxItem>
                      <RadioLabel>
                        <Radio type="radio" name="diets" value="Whole30" />
                        Whole30
                      </RadioLabel>
                    </CheckboxItem>
                  </div>
                </CheckboxGroup>
              </CheckboxContainer>
            </FilterContainer>
            <BtnDiv>
              <Button type="submit">Add</Button>
            </BtnDiv>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RecipeFilter;
