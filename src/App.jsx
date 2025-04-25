import React from "react";
import { useState } from "react";
import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import { createContext } from "react";

export const ThemeContext = createContext();
function App(){

  const [theme, setTheme] = useState("light");
  
  function toggleTheme(){
    setTheme(theme === "light" ? "dark" : "light");
  }


  return(
    <div className={theme}>
    <ThemeContext value={{theme, toggleTheme}}>
    <Navbar/>
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    </ThemeContext>
    </div>
  )

}
export default App