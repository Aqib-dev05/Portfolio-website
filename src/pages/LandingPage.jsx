import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
function LandingPage() {
  return (
    <>
      {/* <NavBar />
      <Hero />
      <About />
      <Portfolio isFull={false} />
      <Services />
      <Experience isFull={false} /> */}
      <Contact />
    </>
  );
}

export default LandingPage;
