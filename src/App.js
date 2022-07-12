import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Layout from "./components/Pages/Layout";
import HomePage from "./components/Pages/HomePage";
import Footer from "./components/Footer/Footer";
import SearchPage from "./components/Pages/SearchPage";
import Signup from "./components/UserLinks/Signup";
import ForgotPassword from "./components/UserLinks/ForgotPassword";
import Login from "./components/UserLinks/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
