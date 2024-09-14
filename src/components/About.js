import React from "react";
import "../styles/About.css";
import AboutImage from '../assets/Images/About.png';

const About = () => {
  return (
    <section class="about-section">
  <div class="about-content">
    <h2>About Me</h2>
    <p>
      I'm a passionate developer skilled in both mobile and web applications,
      with a particular focus on React and Flutter. My journey in coding
      started out of curiosity, and it soon turned into a passion for building
      innovative and engaging solutions that provide real value. 
    </p>
    <p>
      I thrive on exploring new technologies, experimenting with ideas, and
      constantly pushing myself to stay ahead in the ever-evolving tech
      landscape. Developer by heart and innovator by nature, I believe in the
      power of creativity and problem-solving to create user-centric
      applications.
    </p>
    <p>
      When I'm not coding, I love diving into design, blending creativity with
      technology to create seamless, engaging experiences.
    </p>
  </div>
  <div class="about-image-container"> 
    <img src={AboutImage} alt="Ranjeet's " class="about-image" />
  </div>
</section>


  );
};

export default About;
