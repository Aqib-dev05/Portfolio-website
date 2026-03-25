import { NavLink } from 'react-router';
import React from 'react'
import Button from './Button'
import Logo from "../assets/logos/logo-dark-transparent.png"
import { Moon, Sun, Text } from "lucide-react";
import { useState, useEffect } from 'react';

function NavBar({ theme, toggleTheme }) {

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
      <nav className="w-full z-50 h-[100px] bg-[var(--surface-elevated)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] flex items-center justify-between 2xl:px-24 xl:px-5 lg:px-16 max-md:px-4 max-lg:px-20  " style={{ fontFamily: "var(--font-navbar)" }} >
        <div className="flex h-full  items-center justify-center">
          <img src={Logo} className=" w-[160px] max-sm:w-[100px] object-cover " alt="ogo" />
        </div>

        <ul className=" hidden xl:flex gap-8  text-[20px]  uppercase font-semibold list-none  " style={{ fontFamily: "Inter, sans-serif" }} >
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><NavLink to={"/"}  > Home</NavLink> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><NavLink to={"/about"} > About</NavLink> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><NavLink to={"/portfolio"}  > Portfolio</NavLink> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><NavLink to={"/service"} > Services</NavLink> </li>
          <li className='mt-1 cursor-pointer hover:text-[#a80a27] transition-all duration-300 ' ><NavLink to={"/experience"} > Experience</NavLink> </li>
          <li className='xl:ml-20'>
            <Button text="Contact"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} /></li>
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-[46px] cursor-pointer h-[46px] rounded-[8px] border border-[var(--border-color)] flex items-center justify-center hover:border-[#a80a27] transition-all duration-300"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className='z-[999] block rounded-[8px] p-2 border border-[var(--border-color)]'
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={handleOpen} className='z-[999] block rounded-[8px]' >
            <Text size={48} color='#a80b28' strokeWidth={3} />
          </button>
        </div>

      </nav>

      {isOpen && (
        <div className="relative top-0 left-0 max-w-[100vw] h-[100vh] bg-[var(--mobile-menu-bg)]  text-[var(--mobile-menu-text)]  z-50">
          <div className=" h-full p-5 ">
            {/* <button onClick={handleClose} className="text-black absolute z-50 top-2 right-3 text-2xl">
              <X color="#ffff" size={48} />
            </button> */}
            <ul className="flex flex-col items-center justify-center mt-16 gap-4 text-[22px] uppercase font-medium list-none  " >
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><NavLink onClick={() => setIsOpen(false)} to={"/"} > Home</NavLink> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><NavLink onClick={() => setIsOpen(false)} to={"/about"} > About</NavLink> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><NavLink onClick={() => setIsOpen(false)} to={"/portfolio"} > Portfolio</NavLink> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><NavLink onClick={() => setIsOpen(false)} to={"/service"} > Services</NavLink> </li>
              <li className='mt-1 hover:text-[#a80a27] transition-all duration-300 ' ><NavLink onClick={() => setIsOpen(false)} to={"/experience"} > Experience</NavLink> </li>
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