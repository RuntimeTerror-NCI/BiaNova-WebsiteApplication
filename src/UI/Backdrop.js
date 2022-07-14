import styled, { keyframes } from "styled-components";

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

const Header = styled.div``;

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

function Backdrop({ ...props }) {
  return (
    <Overlay>
      <Button onClick={() => props.closeModal()}>&#x2715;</Button>
      {props.children}
    </Overlay>
  );
}

export default Backdrop;
