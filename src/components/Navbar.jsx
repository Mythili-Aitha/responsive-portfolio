import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <div className="text-xl font-bold">Mythili Aitha</div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="text-xl">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
