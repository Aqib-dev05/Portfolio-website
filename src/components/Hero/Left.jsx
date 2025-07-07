import React from 'react'
import { Download, ArrowRight, Instagram, Github, Facebook, Linkedin } from "lucide-react";
import Button from "../Button"
import IconCircle from './IconCircle'
import { motion } from 'motion/react';
function Left() {



    const socialLinks = [
        { icon: <Instagram strokeWidth={2} size={30} />, link: "https://instagram.com/aqibali025" },
        { icon: <Github strokeWidth={2} size={30} />, link: "https://github.com/Aqib-dev05" },
        { icon: <Facebook strokeWidth={2} size={30} />, link: "https://facebook.com/profile.php?id=100059532027132&mibextid=rS40aB7S9Ucbxw6v" },
        { icon: <Linkedin strokeWidth={2} size={30} />, link: "https://linkedin.com/in/aqib-ali-37a6a3357" }
    ];
    return (

        <div className="  lg:w-[55%] w-full max-lg:h-full pt-35 lg:pl-6 xl:pl-10  flex flex-col max-lg:justify-center max-lg:items-center ">
            <p className='uppercase max-sm:text-[16px] text-2xl  text-[rgba(66,65,65,0.61)] '>Welcome To My World</p>
            <motion.h1 initial={{y:-24,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"spring", damping:70}} className='font-bold max-sm:text-4xl  text-7xl ' >Hi I'm  Aqib Ali </motion.h1>
            <motion.h2 initial={{y:18,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,type:"spring", damping:70}} className=' max-sm:text-2xl pb-2 font-[Tan]  text-4xl mt-5  bg-gradient-to-l  from-[#a80a27] to-[#8c0eca] text-transparent w-fit blen  ' >Frontend Developer </motion.h2>
            <p className='mt-5 max-sm:text-[20px] text-[22px] max-lg:w-[90%] lg:w-[86%] font-medium text-[rgba(66,65,65,0.61)] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, voluptatum consequuntur consequatur laudantium cupiditate possimus aliquid voluptates.</p>

            <div className='mt-10 flex max-sm:gap-1 gap-6'>
                <Button text="Hire Me!" icon={<ArrowRight />}  onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} />
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