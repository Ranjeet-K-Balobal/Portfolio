import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar({ toggleTheme, darkMode }) {
  const [scrolled, setScrolled] = useState(false);

  // Scroll event to trigger floating effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
  className={`navbar-container ${
    darkMode ? "dark-mode" : "light-mode"
  }`}
>
  <nav className="navbar-content max-w-[85rem] w-full mx-auto px-4 flex justify-between items-center">
    {/* Brand Name */}
    <a className="navbar-brand text-xl font-semibold" href="#home">
      RB.
    </a>

    {/* Toggle Button */}
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 shadow-sm"
      aria-label="Toggle theme"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  </nav>

  {/* Navigation Links */}
  <div className={`nav-links ${scrolled ? "floating-nav" : ""}`}>
    <a className={`nav-link ${darkMode ? "text-blue-400" : "text-blue-500"}`} href="#home">
      Home
    </a>
    <a className={`nav-link ${darkMode ? "text-gray-300 hover:text-gray-400" : "text-gray-600 hover:text-gray-400"}`} href="#about">
      About
    </a>
    <a className={`nav-link ${darkMode ? "text-gray-300 hover:text-gray-400" : "text-gray-600 hover:text-gray-400"}`} href="#projects">
      Projects
    </a>
    <a className={`nav-link ${darkMode ? "text-gray-300 hover:text-gray-400" : "text-gray-600 hover:text-gray-400"}`} href="#contact">
      Contact
    </a>
  </div>
</header>



  );
}

export default Navbar;
