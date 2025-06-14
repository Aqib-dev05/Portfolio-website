import React from "react";
import PortChild from "./Portfol/PortChild";
import Wiz from "../assets/Pics/wiz.png";
import Weath from "../assets/Pics/weath.png";
import Rester from "../assets/Pics/restr.png";
import Tic from "../assets/Pics/tic.png";
import Pic from "../assets/Pics/port.png";
import Tod from "../assets/Pics/tdo.png";
import Panda from "../assets/Pics/pnda.png";
import Ecom from "../assets/Pics/ecom.png";
import Button from "./Button";
import { Link } from "react-router";

function Portfolio({ isFull }) {
  const ProjDesc = [
    {
      id: 1,
      title: "Ecommerce Website",
      description:
        "A UI for Ecommerce electronics store,Build in Html,CSS,javaScript and GSAP animations,Fully responsive design.",
      image: Ecom,
      link: "https://ecombyme.netlify.app/",
      borderColor: "#4affff",
    },
    {
      id: 2,
      title: "Resturent Website",
      description:
        "A Resturent site UI created with Html Css and JavaScript. It is a responsive website that showcases the menu, services, and contact information of the restaurant.",
      image: Rester,
      link: "https://aqib-resturent-site.vercel.app/",
      borderColor: "#742ab5",
    },
    {
      id: 3,
      title: "Wizard X Clone",
      description:
        "A clone of the Wizard X website, which is a platform for learning web development.Created using Html,CSS,javaScript and GSAP animations. The clone includes features such as course listings,responsive design.",
      image: Wiz,
      link: "https://aqib-wizard-x.vercel.app/",
      borderColor: "crimson",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A weather application built with React that allows users to search for current weather conditions in any city. It fetches data from a weather API and displays temperature, humidity, and other relevant information.",
      image: Weath,
      link: "https://react-weather-app-nine-blue.vercel.app/",
      borderColor: "#3bf57f",
    },
    {
      id: 5,
      title: "Tic Tac Toe",
      description:
        "A simple Tic Tac Toe game built with React. It allows two players to play the game on a 3x3 grid, keeping track of the moves and determining the winner.",
      image: Tic,
      link: "https://aqib-tictac.vercel.app/",
      borderColor: "#0000a8",
    },
    {
      id: 6,
      title: "Todo List App",
      description:
        "A Todo List application built with React that allows users to add, edit, and delete tasks. It provides a simple interface for managing daily tasks and keeping track of completed items.Also keep record of previous tasks in local storage.",
      image: Tod,
      link: "https://todo-react-aqib.netlify.app/",
      borderColor: "#c7d41c",
    },
    {
      id: 7,
      title: "Panda Login Page",
      description: "A Login page made in javaScript,Whole Panda is created using Css ,Dynamic eyes which changes on inputs.",
      image: Panda,
      link: "https://panda-loginnpage.netlify.app/",
      borderColor: "#a80a27",
    },

  ];

  const ProjDescShort = ProjDesc.slice(0, 2);  //for home page


  return (
    <section className="bg-gray-200 py-10">
      <h2 className=" font-[Dance] border-b-4 border-[#a80a27] text-center text-5xl  font-bold  w-fit mx-auto p-5 ">
        My <span className="bg-gradient-to-l  from-[#a80a27] to-[#8c0eca] text-transparent  blen">Portfolio</span>
      </h2>
      <div className="lg:w-[80%] mt-10 mx-auto p-5 flex justify-center items-center flex-col gap-6 ">

        {isFull ? (
          ProjDesc.map((proj, index) => (
            <PortChild
              key={proj.id + index}
              alignment={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
              {...proj}
            />
          ))
        ) : (

          ProjDescShort.map((proj, index) => (
            <PortChild
              key={proj.id + index}
              alignment={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
              {...proj}
            />
          ))
        )}

        {isFull ? "": <Link to={"/portfolio"}  ><Button text="View All Projects" /></Link> }
      </div>
    </section>
  );
}

export default Portfolio;
