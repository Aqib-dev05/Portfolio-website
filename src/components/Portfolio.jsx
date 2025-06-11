import React from 'react'
import PortChild from './Portfol/PortChild'

function Portfolio() {
  return (
    <section className='bg-gray-300'>
        <h2 className='uppercase text-center text-5xl font-[cursive] font-bold bg-gradient-to-l  from-[#a80a27] to-[#8c0eca] text-transparent  blen w-fit mx-auto p-5 ' >portfolio</h2>
     <div className='lg:w-[80%] mx-auto p-5 ' >
       <PortChild  />
       <PortChild alignment="flex-row-reverse" />
       <PortChild />

     </div>
    </section>
  )
}

export default Portfolio