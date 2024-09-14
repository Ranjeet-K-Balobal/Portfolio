import React from 'react';
import '../styles/Projects.css';
import Aero from '../assets/Images/Aerophilia.jpg';
import grow from '../assets/Images/Grow-guide.jpg';
import agent from '../assets/Images/tetherfi.png';

const ProjectCard = ({ title, image, description, stack, reverse }) => {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="iphone-mockup-project">
        <img src={image} alt={`${title} Screenshot`} />
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Stack Used:</strong> {stack}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'AEROPHILIA Mobile App',
      image: Aero, // Directly use the imported image
      description: 'A secure mobile application for managing participants at AEROPHILIA 2023. Event management is complex and data-driven; this app simplifies the process with real-time tracking, status updates, and participant verification. It ensures smooth organization using Flutter and Firebase.',
      stack: 'Flutter, Firebase',
    },
    {
      title: 'Predictive Farming System',
      image: grow, // Directly use the imported image
      description: 'An application that helps farmers choose the best crops based on soil test data. The app provides personalized crop recommendations by analyzing soil parameters and features an intuitive interface for uploading soil reports. Built with React Native, MongoDB, and Express.js for enhanced agricultural productivity.',
      stack: 'React Native, MongoDB, Express.js',
    },
    {
      title: 'Desktop Static Agent Application',
      image: agent, // Directly use the imported image
      description: 'A desktop application developed for customer support agents in the BFSI sector. It integrates call and messaging APIs to streamline communication and enhance agent productivity. Created with Flutter and Firebase during my internship at Tetherfi Technologies.',
      stack: 'Flutter, Firebase',
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            stack={project.stack}
            reverse={index % 2 === 1} // Reverse layout for odd-indexed projects
          />
        ))}
      </div>
      <div className="view-more">
        <a href="https://github.com/Ranjeet-K-Balobal" target="_blank" rel="noopener noreferrer">
          <button>View More</button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
