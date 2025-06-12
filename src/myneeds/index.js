import React, { useState } from 'react';
import './styles.css';

const MyNeeds = () => {
  const [needTitle, setNeedTitle] = useState('');
  const [description, setDescription] = useState('');
  const [openNeeds, setOpenNeeds] = useState([
    {
      id: 1,
      title: 'High-Strength Aluminum Sheets',
      details: 'Require aluminum sheets, grade 7075, for aerospace manufacturing. Delivery within 30 days.'
    },
    {
      id: 2,
      title: 'High-Strength Aluminum Sheets',
      details: 'Require aluminum sheets, grade 7075, for aerospace manufacturing. Delivery within 30 days.'
    },
    {
      id: 3,
      title: 'High-Strength Aluminum Sheets',
      details: 'Require aluminum sheets, grade 7075, for aerospace manufacturing. Delivery within 30 days.'
    }
  ]);

  const handlePostNeed = (e) => {
    e.preventDefault();
    if (needTitle.trim() && description.trim()) {
      const newNeed = {
        id: openNeeds.length + 1,
        title: needTitle,
        details: description
      };
      setOpenNeeds([...openNeeds, newNeed]);
      setNeedTitle('');
      setDescription('');
    }
  };

  return (
    <div className="my-needs-container">
      <div className="my-needs-header">
        <h2>Marketplace: Sourcing Needs</h2>
      </div>
      <div className="post-need-section">
        <form onSubmit={handlePostNeed}>
          <input
            type="text"
            placeholder="Need title"
            value={needTitle}
            onChange={(e) => setNeedTitle(e.target.value)}
            className="need-input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="need-textarea"
          ></textarea>
          <button type="submit" className="post-need-button">Post Need</button>
        </form>
      </div>
      <div className="open-needs-section">
        <h3>Open Needs:</h3>
        {openNeeds.map(need => (
          <div key={need.id} className="open-need-card">
            <h4>{need.title}</h4>
            <p>{need.details}</p>
            <a href="#" className="view-quotes-link">View Quotes</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNeeds; 