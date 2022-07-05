import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header.js";
import Landing from "./LandingPage/Landing.js";
import BadgeBanner from "./components/BadgeBanner/BadgeBanner";
import SearchSection from "./components/SearchSection/SearchSection";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Backdrop from "./UI/Backdrop";
import Modal from "./components/Modal/Modal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleShowSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div>
      <div>
        {showLogin ? <Modal closeModal={handleCloseModal} /> : null}

        {showSignup && <Modal closeModal={handleCloseModal} />}

        <Header showLogin={handleShowLogin} showSignup={handleShowSignup} />

        <Landing />
      </div>
      <BadgeBanner />
      <SearchSection />

      <div className="card-containers">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
