import styled from "styled-components";
import { devices } from "../../mediaQueries/devices";

const TopContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 70%;

  h1 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  p {
    width: 80%;
    margin: auto;
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    padding-bottom: 1rem;
  }

  @media ${devices.tablet} {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media ${devices.mobileL} {
     {
      width: 100%;
    }

    p {
      font-size: 0.94rem;
    }
  }
`;

export default function BadgeHeader() {
  return (
    <TopContainer>
      <h1> Why Use Bianova? </h1>
      <p>
        At BiaNova, we try to limit food waste as much as possible! This is why
        we made our application intuitive and easy-to-use. Simply, Sign-Up,
        Log-In or Click Get Started to start using BiaNova!
      </p>
    </TopContainer>
  );
}
