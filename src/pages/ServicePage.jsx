import React,{useEffect} from 'react'

import Services from '../components/Services'

function ServicePage() {
   useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth" 
     }
    )
  })
  return (
    <>
   
    <Services/>
   
    </>
  )
}

export default ServicePage