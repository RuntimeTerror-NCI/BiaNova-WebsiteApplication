import BadgeContainer from "./BadgeContainer";
import BadgeHeader from "./BadgeHeader";
import { devices } from "../../mediaQueries/devices";
import styled from "styled-components";

const BannerContainer = styled.div`
  margin: 5rem auto;
  padding: 1rem 0;
  background-color: white;

  @media ${devices.mobileL} {
    margin: 5rem 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function BadgeBanner() {
  return (
    <BannerContainer>
      <BadgeHeader />
      <BottomContainer>
        <BadgeContainer />
      </BottomContainer>
    </BannerContainer>
  );
}

export default BadgeBanner;
