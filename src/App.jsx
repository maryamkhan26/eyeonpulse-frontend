import Hero from "./components/Hero";
import About from "./components/About";
import WhyOurCompany from "./components/WhyOurCompany";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyOurCompany />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
