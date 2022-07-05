import logo from "../../assets/imgs/bold.png";

import "./Header.css";

function Header({ ...props }) {
  return (
    <div className="Header">
      <div className="header-brand">
        <img className="header-logo" alt="logo" src={logo} />

        <h1 className="header-h1"> BiaNova </h1>
      </div>
      <div className="login">
        <p>
          <button onClick={() => props.showLogin()} className="header-btn">
            {" "}
            Log In{" "}
          </button>{" "}
          |{" "}
          <button onClick={() => props.showSignup()} className="header-btn">
            {" "}
            Sign Up{" "}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Header;
