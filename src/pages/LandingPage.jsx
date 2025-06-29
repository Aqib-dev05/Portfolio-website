import React,{useEffect} from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Experience from "../components/Experience";

function LandingPage() {
   useEffect(()=>{ 
    window.scrollTo({
      top:0,
      behavior:"smooth" 
     }
    )
  })
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
