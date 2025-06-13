import React from 'react'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

function ProtfolioPage() {
  return (
   <>
     <NavBar/>
     <Portfolio isFull={true}/>
     <Contact/>
   </>
  )
}

export default ProtfolioPage