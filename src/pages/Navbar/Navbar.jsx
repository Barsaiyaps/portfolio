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
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
        <li><button onClick={toggleTheme} style={{fontWeight:"bold",fontSize:"20px" }}>{theme=="light"?"DARK":"LIGHT"} MODE</button></li>

      </ul>
    </nav>
  );
}

export default Navbar;

