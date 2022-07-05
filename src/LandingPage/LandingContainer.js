import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  width: 75vw;
  align-items: right;
  flex-wrap: nowrap;
  margin: auto;

  img {
    max-width: 50%;
    padding-top: 5%;
  }

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    img {
      max-width: 75%;
    }
  }
`;

export default LandingContainer;
