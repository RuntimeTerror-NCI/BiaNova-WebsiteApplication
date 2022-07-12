import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <h3>
        © Made by
        <a href="https://github.com/RuntimeTerror-NCI"> RuntimeTerror</a>{" "}
        &#128126;
      </h3>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.7rem;
  padding: 1rem 0;

  h3 {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: rgb(80, 80, 80);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;

export default Footer;
