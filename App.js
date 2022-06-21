import React from "react";
import "./index.css";
import Header from "./components/Header/Header.js";
import Landing from "./LandingPage/Landing.js";
import BadgeBanner from "./components/BadgeBanner/BadgeBanner";
import SearchSection from "./components/SearchSection/SearchSection";
import Footer from "./components/Footer/Footer";
import CardCon from "./components/CardCon/CardCon.js";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Landing />
      </div>
      <BadgeBanner />
      <SearchSection />

      <div className="card-containers">
        <CardCon />
        <CardCon />
        <CardCon />
      </div>
      <Footer />
    </div>
  );
}

export default App;
