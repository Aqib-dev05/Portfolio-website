import { Link } from 'react-router';
import React from 'react'
import Button from './Button'
import Logo from "../assets/logos/logo-dark-transparent.png"
import { Text } from "lucide-react";
import { useState, useEffect } from 'react';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])
  // const handleClose = () => {
  //     setIsOpen(false);
  // }

  return (
    <>
      <nav className="w-full h-[100px] bg-white shadow-md shadow-[#dad] flex items-center justify-between 2xl:px-24 xl:px-3 lg:px-16 max-md:px-4 max-lg:px-20  " >
        <div className="flex h-full  items-center justify-center">
          <img src={Logo} className=" w-[160px] max-sm:w-[100px] object-cover " alt="ogo" />
        </div>

        <ul className=" hidden xl:flex gap-10 text-[22px]  uppercase font-semibold list-none  " >
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><Link to={"/"}  > Home</Link> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><Link to={"/about"} > About</Link> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><Link to={"/portfolio"}  > Portfolio</Link> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><Link to={"/service"} > Services</Link> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><Link to={"/experience"} > Experience</Link> </li>
          <li className='xl:ml-20'>
            <Button text="Contact"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} /></li>
        </ul>

        <button onClick={handleOpen} className='bg-white block xl:hidden rounded-[8px]' >
          <Text size={48} color='#a80b28' strokeWidth={3} />
        </button>

      </nav>

      {isOpen && (
        <div className="relative top-0 left-0 max-w-[100vw] h-[100vh] bg-[#2c0a10]  text-white  z-50">
          <div className=" h-full p-5 ">
            {/* <button onClick={handleClose} className="text-black absolute z-50 top-2 right-3 text-2xl">
              <X color="#ffff" size={48} />
            </button> */}
            <ul className="flex flex-col items-center justify-center mt-16 gap-4 text-[22px] uppercase font-medium list-none  " >
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><Link onClick={() => setIsOpen(false)} to={"/"} > Home</Link> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><Link onClick={() => setIsOpen(false)} to={"/about"} > About</Link> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><Link onClick={() => setIsOpen(false)} to={"/portfolio"} > Portfolio</Link> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><Link onClick={() => setIsOpen(false)} to={"/service"} > Services</Link> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><Link onClick={() => setIsOpen(false)} to={"/experience"} > Experience</Link> </li>
              <li className='xl:ml-20'>
                <Button varient='outlined'
                  onClick={() => {
                    setIsOpen(false);
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }} text="Contact" /></li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar