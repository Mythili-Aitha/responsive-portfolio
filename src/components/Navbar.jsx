import React from 'react';
import { FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mythili Aitha</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <FaMoon className="dark-mode-toggle" />
    </nav>
  );
};

export default Navbar;
