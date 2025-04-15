import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mythili</div>

        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setNavOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="icons">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <CgClose /> : <CgMenuRightAlt />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
