import styled from "styled-components";

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
`;

export default function BadgeHeader() {
  return (
    <TopContainer>
      <h1> What Makes us Special </h1>
      <p>
        At BiaNova, we try to limit food waste as much as possible! This is why
        we made our application intuitive and easy-to-use. Simply, Sign-Up,
        Log-In or Click Get Started to start using BiaNova!
      </p>
    </TopContainer>
  );
}
