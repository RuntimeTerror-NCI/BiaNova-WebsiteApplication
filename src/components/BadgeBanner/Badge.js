import styled from "styled-components";
import { devices } from "../../mediaQueries/devices";

const BadgeDiv = styled.div`
  max-width: 33%;
  margin: 2rem;
  padding: 0;
  letter-spacing: 0;

  @media ${devices.tablet} {
    flex-direction: column;
    width: 100%;
    margin: 1rem;
  }

  @media ${devices.mobileL} {
    max-width: 85%;
  }
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  width: 100%;

  @media ${devices.tablet} {
     {
      font-size: 0.9rem;
      letter-spacing: 2px;
      width: 100%;
      height: 100%;
    }
  }

  @media ${devices.mobileL} {
     {
      width: 100%;
    }
  }
`;

function Badge({ image, heading, text }) {
  return (
    <BadgeDiv>
      <Icon src={image} alt="" />
      <Heading> {heading} </Heading>
      <Text> {text} </Text>
    </BadgeDiv>
  );
}

export default Badge;
