import React from "react";
import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";

function App(){


  return(
    <>
    <Navbar/>
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    </>
  )

}
export default App