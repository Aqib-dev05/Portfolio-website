import { Routes,Route } from "react-router"
import { useEffect, useState } from "react"
import LandingPage from "./pages/LandingPage"
import About from "./pages/AboutPage"
import Service from "./pages/ServicePage"
import Experience from "./pages/ExperiencePage"
import Portf from "./pages/ProtfolioPage"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"



export default function App(){
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return(
    <>
    <NavBar theme={theme} toggleTheme={toggleTheme} />
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/portfolio" element={<Portf/>} />
      
    </Routes>
    <Contact/>
    </>
  )
}