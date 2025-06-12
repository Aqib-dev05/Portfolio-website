import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero/Hero'
import About from "../components/About"
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'

function LandingPage() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Portfolio isHome={true} />
    <Services/>
    </>
  )
}

export default LandingPage