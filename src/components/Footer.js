import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <a href="/home">RB.</a>
          </div>
          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-contact">
            <p>Contact: <a href="mailto:ranjeetbalo600@gmail.com">ranjeetbalo600@gmail.com</a></p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ranjeet-balobal/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/ranjeet._.b/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Ranjeet-K-Balobal" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2024 Ranjeet-K-Balobal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
