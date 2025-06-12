import React from "react";
import PortChild from "./Portfol/PortChild";
import Pic from "../assets/Pics/WeatherApp.png";
import Button from "./Button";

function Portfolio({isHome}) {
  const ProjDesc = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet praesentium recusandae voluptate vitae labore fugiat?",
      image: Pic,
      link: "#",
      borderColor: "aqua",
    },
    {
      id: 2,
      title: "E-commerce Site",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet praesentium recusandae voluptate vitae labore fugiat?",
      image: Pic,
      link: "#",
      borderColor: "crimson",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet praesentium recusandae voluptate vitae labore fugiat?",
      image: Pic,
      link: "#",
      borderColor: "green",
    },
  ];

  const ProjDescShort = ProjDesc.slice(0,2);  //for home page


  return (
    <section className="bg-gray-200 py-10">
      <h2 className="uppercase text-center text-5xl font-[cursive] font-bold bg-gradient-to-l  from-[#a80a27] to-[#8c0eca] text-transparent  blen w-fit mx-auto p-5 ">
        portfolio
      </h2>
      <div className="lg:w-[80%] mx-auto p-5 flex justify-center items-center flex-col gap-6 ">

       {isHome ? (
         ProjDescShort.map((proj, index) => (
          <PortChild
            key={proj.id + index}
            alignment={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            {...proj}
          />
        ))
       ):(
         ProjDesc.map((proj, index) => (
          <PortChild
            key={proj.id + index}
            alignment={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            {...proj}
          />
        ))
       )}

        <Button text="View All Projects" />
      </div>
    </section>
  );
}

export default Portfolio;
