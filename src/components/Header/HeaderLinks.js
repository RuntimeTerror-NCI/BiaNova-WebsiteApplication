import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from "../UserLinks/Login";
import Signup from "../UserLinks/Signup";

const Links = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
`;

const LinksWrapper = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0.4rem;
  transition: background-color 0.2s ease-in-out;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.2rem;
  &:hover {
    background-color: #84aa08;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

function HeaderLinks() {
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  return (
    <Links>
      <LinksWrapper>
        <Link to="/Login">Log In</Link>
        <Link to="/Signup">Sign Up</Link>
      </LinksWrapper>
    </Links>

    // <Links>
    //   <LinksWrapper>
    //     <Button onClick={() => setShowLogin((prev) => !prev)}> Log In </Button>{" "}
    //     |{" "}
    //     <Button onClick={() => setShowSignup((prev) => !prev)}>
    //       {" "}
    //       Sign Up{" "}
    //     </Button>
    //   </LinksWrapper>
    //   <Login open={showLogin} close={() => setShowLogin((prev) => !prev)} />
    //   <Signup open={showSignup} close={() => setShowSignup((prev) => !prev)} />
    // </Links>
  );
}

export default HeaderLinks;
