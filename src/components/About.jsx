import React from "react";
import Cartoon from "../assets/Pics/3542.jpg";
import Button from "./Button";
import { Link } from "react-router";
import { motion } from "motion/react";
function About() {
  return (
    <motion.section whileInView={"visible"} viewport={{ once: true, amount: .3 }} className="w-full lg:min-h-[80vh] pb-5  pt-20 bg-gray-300 flex max-lg:flex-col max-lg:items-center max-lg:justify-center  ">
      <div className="left  lg:w-[40%] lg:min-h-[100%] flex items-center justify-center  ">
        <div
          className="p-2 "
          style={{
            borderRadius: "50%",
            animation: "gradientMove 15s linear infinite",
          }}
        >
          <style>
            {`
            @keyframes gradientMove {
              0% { background: linear-gradient(to bottom, #a80a27, #6a058e); }
              25% { background: linear-gradient(to right, #a80a27, #6a058e); }
              50% { background: linear-gradient(to top, #a80a27, #6a058e); }
              75% { background: linear-gradient(to left, #a80a27, #6a058e); }
              100% { background: linear-gradient(to bottom, #a80a27, #6a058e); }
            }
          `}
          </style>
          <div
            style={{
              backgroundImage: `url(${Cartoon})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="bg-white max-sm:w-[300px] max-sm:h-[300px]  w-[400px] h-[400px]  rounded-[50%]"
          ></div>
        </div>
      </div>
      <div className="w-full max-lg:pt-22 max-lg:text-center lg:w-[60%] lg:h-[100%] flex flex-col p-2 lg:p-5 ">
        <h2 className="blen max-lg:mx-auto  my-3 text-6xl font-bold font-[cursive] bg-gradient-to-l  from-[#a80a27] to-[#8c0eca] text-transparent w-fit ">
          About Me
        </h2>
        <h3 className="mt-6 text-7xl font-[Times] max-lg:text-4xl max-sm:text-3xl max-xl:text-5xl font-bold ">
        2 Year's Experience in Web Development
        </h3>
        <p className="mt-6 text-xl w-[95%] font-medium text-gray-800">
          I'm Aqib Ali, a MERN stack developer focused on building end-to-end web
          applications using MongoDB, Express, React, and Node.js. I create scalable
          backends and polished frontends — from designing RESTful APIs and database
          schemas to crafting responsive React interfaces and managing client-side
          state.
          <br /><br />
          I prioritize clean, maintainable code, secure authentication flows,
          performance optimization, and automated testing (Jest).
          Always learning, I enjoy solving real user problems with
          pragmatic, well-architected solutions.
          <br /><br />
          Let’s build reliable, high-quality web experiences together.
        </p>
        <div className="flex gap-4 mt-8 w-full max-lg:justify-center">
          <Link to={"/experience"} >
            <Button text="Main Skills" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
