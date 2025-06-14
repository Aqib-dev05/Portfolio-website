import React,{useEffect} from 'react'

import Portfolio from '../components/Portfolio'


function ProtfolioPage() {
   useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth" 
     }
    )
  })
  return (
   <>
   
     <Portfolio isFull={true}/>
    
   </>
  )
}

export default ProtfolioPage