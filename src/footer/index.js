import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>CogTech AI</h3>
          <p>Your ESG-Centric, AI-Driven Marketplace for sustainable sourcing and carbon reduction.</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@cogtechai.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 ESG Lane, Green City, GC 12345</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CogTech AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 