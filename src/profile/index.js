import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    fullName: 'Keith Johnson',
    email: 'keith10@test.com',
    company: 'Green Manufacturing Co.'
  });
  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateProfile = () => {
    console.log('Updating Profile:', profileInfo);
    alert('Profile Updated Successfully!');
    // In a real application, you would send this data to your backend
  };

  const handleChangePassword = () => {
    console.log('Change Password clicked');
    alert('Opening Change Password dialog/page...');
  };

  const handleNotificationPreferences = () => {
    console.log('Notification Preferences clicked');
    alert('Opening Notification Preferences...');
  };

  const handlePrivacySettings = () => {
    console.log('Privacy Settings clicked');
    alert('Opening Privacy Settings...');
  };

  return (
    <div className="profile-container">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="back-button"
        aria-label="Go back"
      >
        <span style={{ fontSize: '1.5rem', marginRight: 6 }}>&larr;</span> Back
      </button>
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <p>Manage your account settings and ESG verification status.</p>
      </div>

      <div className="profile-content">
        <div className="profile-section profile-info">
          <h2>Profile Information</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={profileInfo.fullName}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileInfo.email}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={profileInfo.company}
              onChange={handleProfileChange}
            />
          </div>
          <button className="update-button" onClick={handleUpdateProfile}>Update Profile</button>
        </div>

        <div className="profile-section esg-status">
          <h2>ESG Verification Status</h2>
          <div className="verification-status">
            <span role="img" aria-label="verified" className="verified-icon">✅</span>
            <p className="verified-text">Verified Buyer</p>
            <p>Your ESG compliance has been verified and approved.</p>
            <div className="esg-score-bar">
              <div className="esg-score-fill" style={{ width: '92%' }}></div>
              <span>ESG Score: 92/100</span>
            </div>
          </div>
        </div>

        <div className="profile-section account-settings">
          <h2>Account Settings</h2>
          <button className="setting-button" onClick={handleChangePassword}>Change Password</button>
          <button className="setting-button" onClick={handleNotificationPreferences}>Notification Preferences</button>
          <button className="setting-button" onClick={handlePrivacySettings}>Privacy Settings</button>
        </div>

        <div className="profile-section carbon-impact">
          <h2>Your Carbon Impact</h2>
          <p className="carbon-value">15.2 tons</p>
          <p className="carbon-description">Total CO₂ savings achieved</p>
          <div className="carbon-stats">
            <div className="stat-box">
              <strong>8</strong>
              <span>Projects</span>
            </div>
            <div className="stat-box">
              <strong>24</strong>
              <span>Suppliers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 