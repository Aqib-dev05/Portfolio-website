import React from 'react'
import Button from './Button'
import Logo from "../assets/logos/logo-dark-transparent.png"
import { Text, X } from "lucide-react";

function NavBar() {

    
    return (

        <nav className="w-full h-[100px] bg-white shadow-md shadow-[#dad] flex items-center justify-between 2xl:px-24 xl:px-3 lg:px-16 max-md:px-6   " >
             <div className="flex h-full w-[160px] items-center justify-center">
                <img src={Logo} className=" w-[160px] object-cover " alt="ogo" />
             </div>
            
            <ul className=" hidden xl:flex gap-10 text-[25px]  uppercase font-semibold list-none  " >
                <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Home</a> </li>
                <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > About</a> </li>
                <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Portfolio</a> </li>
                <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Services</a> </li>
                <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><a href='#' > Experience</a> </li>
                <li className='xl:ml-20'><Button text="Contact"/></li>
            </ul>
  
             <button className='bg-white block xl:hidden rounded-[8px]' >
                <Text size={48} color='#a80b28' strokeWidth={3} />
             </button>
           
        </nav>
    )
}

export default NavBar