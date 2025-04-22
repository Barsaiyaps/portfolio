import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [theme,setTheme]=useState('dark')

  function changeTheme(){
    setTheme(theme=='dark'?'dark':'dark')
  }
  
  // document.getElementById("body").classList.add(theme);

  return (
    <nav className="navbar">
      <a className="title" href="/">Portfolio</a>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`menuItems ${menuOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
        <li><button  onClick={changeTheme}>Theme</button></li>

      </ul>
    </nav>
  );
}

export default Navbar;

