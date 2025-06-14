import React from 'react'

import About from '../components/About'
import { useEffect } from 'react'


function AboutPage() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth" 
     }
    )
  })
  return (
    <>

    <About/>
  
    </>
  )
}

export default AboutPage