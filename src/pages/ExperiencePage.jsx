import React, { useEffect } from 'react'

import Experience from '../components/Experience'

function ExperiencePage() {
   useEffect(()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth" 
       }
      )
    })
  return (
    <>
  
    <Experience isFull={true} />
  
    </>
  )
}

export default ExperiencePage