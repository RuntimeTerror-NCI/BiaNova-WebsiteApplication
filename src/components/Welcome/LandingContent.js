import styled from "styled-components";

const LandingContent = styled.div`
  font-weight: 300;
  margin-right: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 4rem;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.1rem;
    line-height: 4.5rem;
    text-align: center;
  }

  p {
    margin-top: 2rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    letter-spacing: 0.1rem;
    text-align: center;
    line-height: 2.2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1400px) {
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1100px) {
    img {
      margin-top: 2rem;
    }

    div {
      margin-right: 0;
    }

    p,
    h1 {
      text-align: center;
    }

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 0.9rem;
    }

    img {
      max-width: 75%;
    }
  }
`;
export default LandingContent;
