import React from "react";
import Html from "../assets/Pics/HtmlLogo.png";
import Css from "../assets/Pics/CssLogo.png";
import Js from "../assets/Pics/JavaScriptLogo.png";
import Reac from "../assets/Pics/ReactLogo.png";
import Bo from "../assets/Pics/BubbleLogo.png";
import Tail from "../assets/Pics/TailwindCssLogo.png";
import Anime from "../assets/Pics/AnimeJsLogo.png";
import Gs from "../assets/Pics/gsap.png";

function Experience({ isFull }) {

    const ExperienceInfo = [
        {
            id: 1,
            name: "HTML5",
            image: Html,
            level: "Expert",
            exp: "5 years experience",
            desc: "Strong foundation in semantic HTML5 with a focus on accessibility and SEO best practices. Created well-structured, accessible web pages following modern standards.",
            proficiency: "95%",
        },
        {
            id: 2,
            name: "CSS3",
            image: Css,
            level: "Expert",
            exp: "2 years experience",
            desc: "Advanced knowledge of CSS3 including Flexbox, Grid, animations, and responsive design. Created complex layouts and interactive UI components with pure CSS.",
            proficiency: "95%",
        },
        {
            id: 3,
            name: "Tailwind CSS",
            image: Tail,
            level: "Expert",
            exp: "2 years experience",
            desc: "Proficient in using Tailwind CSS to build responsive and modern UI components efficiently. Utilized utility-first approach for rapid and consistent styling.",
            proficiency: "95%",
        },
        {
            id: 4,
            name: "React JS",
            image: Reac,
            level: "Expert",
            exp: "2 years experience",
            desc: "Extensive experience building modern web applications with React. Proficient with hooks, context API, Redux, and various React libraries.",
            proficiency: "95%",
        },
        {
            id: 5,
            name: "JavaScript",
            image: Js,
            level: "Expert",
            exp: "2 years experience",
            desc: "Deep understanding of JavaScript including ES6+ features, asynchronous programming, DOM manipulation, and modern JS frameworks.",
            proficiency: "95%",
        },
        {
            id: 6,
            name: "GSAP",
            image: Gs,
            level: "Expert",
            exp: "2 years experience",
            desc: "Deep understanding of JavaScript including ES6+ features, asynchronous programming, DOM manipulation, and modern JS frameworks.",
            proficiency: "95%",
        },
        {
            id: 7,
            name: "Anime JS",
            image: Anime,
            level: "Expert",
            exp: "2 years experience",
            desc: "Implemented lightweight animations using Anime.js to enhance UI/UX in React applications. Created timeline and scroll-based animations.",
            proficiency: "95%",
        },
        {
            id: 8,
            name: "Bubble.io ",
            image: Bo,
            level: "Expert",
            exp: "2 years experience",
            desc: "Built no-code web apps with Bubble.io including dynamic data-driven pages, workflows, and integrations. Rapidly prototyped MVPs with minimal code.",
            proficiency: "95%",
        },
    ];
    
    const Doubled=[...ExperienceInfo,...ExperienceInfo]
    //Short Slider
    if (isFull) {
        return (
            <section className="overflow-hidden bg-gray-300 py-10  flex flex-col lg:gap-10 items-center justify-center w-full  ">
                <h2 className="text-center font-[Dance] py-4 text-5xl border-b-4 border-[#a80a27] w-fit mx-auto font-extrabold"><span className="bg-gradient-to-b  from-[#a80a27] to-[#6a039e] blen text-transparent">Tech</span> Experience</h2>
                <div className="w-fit flex mt-15 max-md:gap-4  md:gap-8 items-center justify-center  left-slider">
                    {
                        Doubled.map((elem, idx) => (
                            <div key={elem.id + idx} className=" bg-white p-2 rounded-lg hover:border-[#a80a27] hover:border-2 transition-all duration-150 max-md:w-[50px] max-md:h-[50px] flex items-center justify-center md:w-[80px] md:h-[80px]  "  >
                                <img src={elem.image} alt="logo" className="object-cover" width={50} height={50}   />
                            </div>
                        ))
                    }
                </div>

                 <div className="w-fit flex mt-15 max-md:gap-4  md:gap-8 items-center justify-center  right-slider">
                    {
                        Doubled.map((elem, idx) => (
                            <div key={elem.id + idx} className=" bg-white p-2 rounded-lg hover:border-[#a80a27] hover:border-2 transition-all duration-150 max-md:w-[50px] max-md:h-[50px] flex items-center justify-center md:w-[80px] md:h-[80px] "  >
                                <img src={elem.image} alt="logo" className="object-cover" width={50} height={50}  />
                            </div>
                        ))
                    }
                </div>

            </section>
        )
    }

}

export default Experience;
