import React from 'react'
import { Download, ArrowRight, Instagram, Github, Facebook, Linkedin } from "lucide-react";
import Button from "../Button"
import IconCircle from './IconCircle'

function Left() {

  

      const socialLinks = [
        { icon: <Instagram strokeWidth={2} size={30} />, link: "https://instagram.com/aqibali025" },
        { icon: <Github strokeWidth={2} size={30} />, link: "https://github.com/Aqib-dev05" },
        { icon: <Facebook strokeWidth={2} size={30} />, link: "https://facebook.com" },
        { icon: <Linkedin strokeWidth={2} size={30} />, link: "https://linkedin.com/in/aqib-ali-37a6a3357" }
    ];
  return (

    <div className="  lg:w-[55%] w-full max-lg:h-full pt-35 lg:pl-6  flex flex-col max-lg:justify-center max-lg:items-center ">
                <p className='uppercase max-sm:text-[16px] text-2xl font-semibold text-[rgba(66,65,65,0.61)] '>Welcome To My World</p>
                <h1 className='font-bold max-sm:text-4xl  text-8xl   ' >Hi I'm  Aqib Ali </h1>
                <h2 className='font-semibold max-sm:text-3xl  text-5xl mt-5 text-[#ba32cf] stroke-blue-600 ' >Frontend Developer </h2>
                <p className='mt-5 max-sm:text-[20px] text-[22px] max-lg:w-[90%] lg:w-[86%] font-medium text-[rgba(66,65,65,0.61)] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, voluptatum consequuntur consequatur laudantium cupiditate possimus aliquid voluptates.</p>

                <div className='mt-10 flex max-sm:gap-1 gap-6'>
                    <Button text="Hire Me!" icon={<ArrowRight />} />
                    <Button text="Download CV" icon={<Download />} varient='shadowed' />
                </div>
                <div className=' mt-18 h-[60px] flex items-center justify-center max-sm:gap-3 gap-6 w-fit '>
                    {
                        socialLinks.map((item, index) => (
                            <IconCircle key={index} icon={item.icon} url={item.link} />
                        ))

                    }

                </div>

            </div>
   
  )
}

export default Left