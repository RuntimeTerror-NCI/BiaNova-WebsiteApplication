import styled from "styled-components";
import LongText from "./LongText";

function Card({ img, title, content }) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <CardContent>
        <h3>{title} </h3>
        <LongText content={content} limit={100}></LongText>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  justify-content: center;
  margin: 2rem;

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

const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;

  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 10rem;
    object-position: 15% 75%;
    object-fit: cover;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
  }
`;
export default Card;
