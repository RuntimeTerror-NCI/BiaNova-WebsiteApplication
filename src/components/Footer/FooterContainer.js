import styled from "styled-components";

const FooterContainer = styled.div`
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

export default FooterContainer;
