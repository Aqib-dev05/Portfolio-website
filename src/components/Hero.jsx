import React from 'react'
import { Download, ArrowRight, Instagram, Github, Facebook, Linkedin } from "lucide-react";
import Button from "./Button"
import IconCircle from './IconCircle'
function Hero() {

    const socialLinks = [
        { icon: <Instagram strokeWidth={2} size={30} />, link: "https://instagram.com/aqibali025" },
        { icon: <Github strokeWidth={2} size={30} />, link: "https://github.com/Aqib-dev05" },
        { icon: <Facebook strokeWidth={2} size={30} />, link: "https://facebook.com" },
        { icon: <Linkedin strokeWidth={2} size={30} />, link: "https://linkedin.com/in/aqib-ali-37a6a3357" }
    ];

    return (
        <section className='w-full h-[90vh] bg-gray-200 flex' >

            <div className="  w-[50%] h-full pt-35 pl-6 ">
                <p className='uppercase text-2xl font-semibold text-[rgba(66,65,65,0.61)] '>Welcome To My World</p>
                <h1 className='font-bold text-8xl ' >Hi I'm  Aqib Ali </h1>
                <h2 className='font-semibold  text-5xl mt-5 text-[#ba32cf] stroke-blue-600 ' >Frontend Developer </h2>
                <p className='mt-5 text-[22px] w-[86%] font-medium text-[rgba(66,65,65,0.61)] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, voluptatum consequuntur consequatur laudantium cupiditate possimus aliquid voluptates.</p>

                <div className='mt-10 flex gap-6'>
                    <Button text="Hire Me!" icon={<ArrowRight />} />
                    <Button text="Download CV" icon={<Download />} varient='shadowed' />
                </div>
                <div className=' mt-18 h-[60px] flex items-center justify-center gap-6 w-fit '>
                    {
                        socialLinks.map((item, index) => (
                            <IconCircle key={index} icon={item.icon} url={item.link} />
                        ))

                    }

                </div>

            </div>
            <div className=" bg-blue-500  w-[50%] h-full ">
            </div>
        </section>
    )
}

export default Hero