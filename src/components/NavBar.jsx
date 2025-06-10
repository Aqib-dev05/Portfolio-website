import React from 'react'
import Button from './Button'
import Logo from "../assets/logos/logo-dark-transparent.png"

function NavBar() {
    return (

        <nav className="w-full h-[100px] bg-white shadow-md shadow-[#dad] flex items-center justify-between px-20 " >
             <div className="size-40 flex items-center justify-center">
                <img src={Logo}  alt="ogo" />
             </div>
            
            <ul className="flex gap-10 text-[25px] uppercase font-semibold list-none  " >
                <li className='hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Home</a> </li>
                <li className='hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > About</a> </li>
                <li className='hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Portfolio</a> </li>
                <li className='hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Services</a> </li>
                <li className='hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Experience</a> </li>
            </ul>
 
            <div>
                <Button text="Contact" />
            </div>
        </nav>
    )
}

export default NavBar