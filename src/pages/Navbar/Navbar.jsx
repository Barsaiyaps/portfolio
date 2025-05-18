import React, { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const {theme, toggleTheme}=useContext(ThemeContext);
  return (
    <nav className="navbar">
      <a className="navbar-title" href="/">Portfolio</a>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`menuItems ${menuOpen ? "open" : ""}`}>
        <li><a href="#about" >About</a></li>
        <li><a href="#education" >Education</a></li>
        <li><a href="#skills" >Skills</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#contacts" >Contacts</a></li>
        <li><button onClick={toggleTheme} style={{fontWeight:"bold",fontSize:"20px",paddingBottom:'5px' }}>{theme=="light"?"◒ DARK":"🔆 LIGHT"} </button></li>

      </ul>
    </nav>
  );
}

export default Navbar;

