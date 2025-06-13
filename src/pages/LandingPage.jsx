import React from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Experience from "../components/Experience";

function LandingPage() {
  return (
    <>
     
      <Hero />
      <About />
      <Portfolio isFull={false} />
      <Services />
      <Experience isFull={false} />
     
    </>
  );
}

export default LandingPage;
