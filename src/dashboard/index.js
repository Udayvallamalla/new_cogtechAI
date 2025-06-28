import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would clear user session/token here
    console.log('User logged out');
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>CogTechAI</h2>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard" className="active">
                <span role="img" aria-label="dashboard">📊</span> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/my-needs">
                <span role="img" aria-label="my needs">📄</span> My Needs
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span role="img" aria-label="profile">👤</span> Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            <span role="img" aria-label="logout">➡️</span> Log Out
          </button>
        </div>
      </aside>
      <main className="main-content">
        <h1 className="dashboard-title">Client Dashboard</h1>
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-value">2</div>
            <div className="stat-label">Needs Posted</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">6</div>
            <div className="stat-label">Quotes Received</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1</div>
            <div className="stat-label">Active Needs</div>
          </div>
        </div>
        <button className="post-needs-button">Post/View Your Needs</button>
      </main>
    </div>
  );
};

export default Dashboard; 