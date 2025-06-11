import React from 'react'
import Left from './Left'
import Right from './Right'
function Hero() {



    return (
        <section className='w-full min-h-[90vh] bg-gray-200 flex max-lg:flex-col-reverse max-lg:items-center max-lg:pt-16 ' >
            <Left />
            <Right />


        </section>
    )
}

export default Hero