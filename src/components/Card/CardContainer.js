import styled from "styled-components";

const CardContainer = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 15px 0px;
  transition: 0.3s;
  animation: ease-in;
  margin: 3rem 1.5rem;
  background-color: whitesmoke;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export default CardContainer;
