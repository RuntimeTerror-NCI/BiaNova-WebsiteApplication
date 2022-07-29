import styled from "styled-components";
import { LandingLink } from "../../UI/StyledForm";
import { devices } from "../../mediaQueries/devices";

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

        <LandingLink to="/search">Get Started</LandingLink>
      </LandingContent>

      <ImageContainer>
        <img alt="landing" src={require("../../assets/imgs/Chef.png")} />
      </ImageContainer>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  display: flex;
  width: 75vw;
  align-items: center;
  flex-wrap: nowrap;
  margin: auto;

  img {
    width: 40rem;
    height: 30rem;
  }

  @media ${devices.laptop} {
    max-width: 100%;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media ${devices.tablet} {
    img {
      max-width: 75%;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  background: url(/src/assets/imgs/Chef.svg);
`;

const LandingContent = styled.div`
  font-weight: 300;
  margin-right: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Welcome;
