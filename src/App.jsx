import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Aboutus from "./components/about/Aboutus";
import TermsandCondtion from "./components/TermsandCondtion/TermsandCondtion";
import PrivacyandPolicy from "./components/PrivacyandPolicy/PrivacyandPolicy";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";


const SafarMantra = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/terms" element={<TermsandCondtion />} />
        <Route path="/privacy" element={<PrivacyandPolicy />} />
      </Routes>
      
        <Footer />

      </Router>
      );
};

      export default SafarMantra;
