import React from 'react'
import NavBar from '../components/NavBar'
import Experience from '../components/Experience'

function ExperiencePage() {
  return (
    <>
    <NavBar/>
    <Experience isFull={true} />
    <Contact/>
    </>
  )
}

export default ExperiencePage