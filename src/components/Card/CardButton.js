import styled from "styled-components";

const CardButton = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  width: 100%;

  margin: 0 auto 1rem;
  padding: 0.5rem;
  width: fit-content;
  text-transform: uppercase;
  background-color: #6bbcff;
  text-decoration: none;
  font-weight: bold;
  border: none;

  &:hover {
    background: rgba(27, 156, 252, 0.1);
    transform: scale(1.1);
  }
`;

export default CardButton;
