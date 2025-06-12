import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/">
          <h1  alt="CogTech AI Logo" className="header-logo">CogTechAI</h1>
        </Link>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Buy Products <span className="arrow-down"></span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="#">Green Building Materials</Link>
              <Link to="#">Solar & Renewable Energy</Link>
              <Link to="#">Sustainable Textiles</Link>
              <Link to="#">Water Conservation Tech</Link>
              <Link to="#">Low-Carbon Concrete</Link>
              <Link to="#">Recycled Metals</Link>
              <Link to="#">Electric Mobility</Link>
              <Link to="#">Smart Agriculture</Link>
              <Link to="#">Waste Management</Link>
              <Link to="#">Eco-Packaging</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 