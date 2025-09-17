import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import PopularTrips from "../components/PopularTrips";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <PopularTrips />
      <HowItWorks />
      <About />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
