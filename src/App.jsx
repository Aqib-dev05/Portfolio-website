import { Routes,Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import About from "./pages/AboutPage"
import Service from "./pages/ServicePage"
import Experience from "./pages/ExperiencePage"
import Portf from "./pages/ProtfolioPage"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"



export default function App(){

  return(
    <>
    <NavBar/>
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