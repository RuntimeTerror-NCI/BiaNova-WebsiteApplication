import styled, { keyframes } from "styled-components";
import { useState, useContext } from "react";

import Backdrop from "../../UI/Backdrop";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

import { LoginContext, SignupContext } from "../../contexts/LoginContext";

function Modal({ ...props }) {
  const expandingAnimation = keyframes`
	0% {opacity: 0}
	20% {opacity:0.2}
	40% {opacity:0.4}
	60% {opacity: 0.6}
	80% {opacity: 0.8}
	100% {opacity: 1}
	`;

  const Overlay = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${expandingAnimation};
    animation-duration: 0.2s;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 0.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${expandingAnimation};
    animation-duration: 0.2s;
  `;

  const Button = styled.button`
    float: right;
    margin: 4rem;
    font-size: 3.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: grey;
    transition: 0.2s all ease-in-out;
    &:hover {
      color: black;
    }
  `;

  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const renderLogin = () => {
    setLogin(!login);
  };

  const renderSignup = () => {
    setLogin((prev) => !prev);
  };

  const closeModal = () => {
    setModal();
  };

  // const handleModal = () => {};

  // const { setLogin } = useContext(LoginContext);

  return (
    <Overlay>
      <Button onClick={() => props.closeModal()}>&#x2715;</Button>
      {/* <Wrapper>
        <LoginContext.Provider value={{login, setLogin, signup, setSignup}}>{modal ? <Login /> : <Signup />}</LoginContext.Provider>
      </Wrapper> */}
      {<Login />}
    </Overlay>
  );
}

export default Modal;
