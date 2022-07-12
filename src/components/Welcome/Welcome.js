import styled from "styled-components";

import { LandingButton } from "../../UI/Button.styles";

function Welcome() {
  return (
    <LandingContainer>
      <LandingContent>
        <h1>Welcome to BiaNova!</h1>
        <p>
          {" "}
          Simply scan or enter the ingredients that you think might be the
          closest to what you’d like to eat and hit enter. Our machine elves
          will send you an assortment of recipes to choose from. Bianova tells
          you what you need to know and then gets out of the way. And don’t you
          know it – we might be just the one thing between you and another
          late-night takeaway.
        </p>

        <LandingButton> Get Started </LandingButton>
      </LandingContent>

      <img alt="landing" src={require("../../assets/imgs/Chef.png")} />
    </LandingContainer>
  );
}

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
export default Welcome;
