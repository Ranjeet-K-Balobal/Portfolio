import React from 'react';
import '../styles/Skills.css';
import react from '../assets/Images/react.png';
import flutter from '../assets/Images/flutter.png';
import figma from '../assets/Images/figma.png';
import go from '../assets/Images/Go.png';
import dart from '../assets/Images/dart.png';
import github from '../assets/Images/github.png';


function Skills() {
  return (
    <section id="skills" class="skills-section">
  <h2>Things I Work With</h2>
  <p>Here are some of the frameworks and technologies I work with to build engaging and efficient applications.</p>

  <div class="skills-container">

    <div class="skill-card">
      <img src={react} alt="React.js" class="skill-logo"></img>
      <p>React</p>
    </div>
    <div class="skill-card">
      <img src={flutter} alt="Node.js" class="skill-logo"></img>
      <p>Flutter</p>
    </div>
    <div class="skill-card">
      <img src={dart} alt="Express.js" class="skill-logo"></img>
      <p>Dart</p>
    </div>
    <div class="skill-card">
      <img src={go} alt="Tailwind CSS" class="skill-logo"></img>
      <p>Go Lang</p>
    </div>
    <div class="skill-card">
      <img src={figma} alt="Tailwind CSS" class="skill-logo"></img>
      <p>Figma</p>
    </div>
    <div class="skill-card">
      <img src={github} alt="Tailwind CSS" class="skill-logo"></img>
      <p>Github</p>
    </div>

  </div>
</section>

  );
}

export default Skills;
