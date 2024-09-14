import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' ? true : false;
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
