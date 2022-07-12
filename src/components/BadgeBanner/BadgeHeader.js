import styled from "styled-components";

const TopContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 60%;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.4em;
    line-height: 2rem;
  }
`;

export default function BadgeHeader() {
  return (
    <TopContainer>
      <h1> This is where we place our badges </h1>
      <p>
        We can put some quick instructions here, something to break up the page,
        it can be out features, what we aim to do, whatever. Everything is
        currently replaceable - new icons, new layout - ish
      </p>
    </TopContainer>
  );
}
