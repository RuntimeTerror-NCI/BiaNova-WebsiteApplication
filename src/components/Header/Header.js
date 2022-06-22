import React from "react";
import logo from "../../assets/imgs/bold.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="header-brand">
        <img className="header-logo" alt="logo" src={logo} />

        <h1 className="header-h1"> BiaNova </h1>
      </div>

      <div className="login">
        <p>
          <a href="#">Log In</a> | <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
