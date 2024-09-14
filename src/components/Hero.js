import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <h1>Hi, I'm Ranjeet</h1>
        <p>Developer by heart🤍</p> 
          <p>Innovator by nature!</p>
        <a href="#about" className="btn btn-primary">
          Learn More
        </a>
        <a href="/assets/resume/Ranjeet-Resume.pdf" download>
          <button className="btn btn-secondary">Download Resume</button>
        </a>
      </div>

      <div className="iphone-container">
        <div className="iphone-mockup">
          <div className="iphone-screen">
            <h1>I Design and develop mobile Apps</h1>
            <p>Building amazing apps with cutting-edge technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
