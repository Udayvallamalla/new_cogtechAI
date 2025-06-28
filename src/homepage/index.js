import React, { useState, useEffect } from 'react';
import './styles.css';

const Home = () => {
  // Dummy data for Home Stats
  const initialHomeStats = [
    { value: '1000+', label: 'Verified Suppliers' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'AI ESG Compliance' },
  ];

  // Dummy data for Environmental Stats
  const initialEnvironmentalStats = [
    { value: '20,412 tons', label: 'CO₂ Emissions Saved' },
    { value: '532', label: 'ESG-Verified Projects' },
    { value: '1180', label: 'Active Green Suppliers' },
  ];

  // Dummy data for Home Features
  const initialHomeFeatures = [
    {
      icon: '🏢',
      title: 'Buyers',
      description: 'Join as a buyer for verified ESG sourcing.',
    },
    {
      icon: '💼',
      title: 'Hire Talent',
      description: 'Find and hire ESG-compliant experts.',
    },
    {
      icon: '🧑‍💻',
      title: 'Find Work',
      description: 'Join as a freelancer and offer your expertise.',
    },
    {
      icon: '📦',
      title: 'Suppliers',
      description: 'List your company or products for ESG buyers.',
    },
    {
      icon: '🏭',
      title: 'Manufacturers',
      description: 'Showcase your ESG-certified manufacturing solutions.',
    },
  ];

  // Dummy data for Why CogTechAI? Features
  const initialWhyFeatures = [
    {
      icon: '💡',
      title: 'AI-Powered Sourcing',
      description: 'Smart algorithms match you with the best green suppliers, projects, or partners—instantly.',
    },
    {
      icon: '✅',
      title: 'Verified ESG Compliance',
      description: 'Every user, project, and supplier is ESG-certified and transparent. Trust built-in.',
    },
    {
      icon: '📈',
      title: 'Live Analytics',
      description: 'Real-time dashboards track your carbon savings, ESG status, and more.',
    },
    {
      icon: '🌱',
      title: 'Carbon Emission Tracking',
      description: 'Instantly see and prove your organization\'s CO₂ savings for every transaction.',
    },
    {
      icon: '🤝',
      title: 'Collaboration Hub',
      description: 'Connect clients, freelancers, manufacturers, and suppliers—together in one verified network.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Industry-best authentication, roles, and permissions for worry-free usage.',
    },
  ];

  // Dummy data for Featured ESG-Verified Companies
  const initialCompanies = [
    { trustedTag: { label: 'Trusted 1', color: 'green' }, name: 'GreenBuild Co.', esgScore: 93 },
    { trustedTag: { label: 'Trusted 2', color: 'orange' }, name: 'EcoParts Inc.', esgScore: 88 },
    { trustedTag: { label: 'Trusted 3', color: 'blue' }, name: 'FutureTech Ltd.', esgScore: 95 },
    { trustedTag: { label: 'Trusted 4', color: 'yellow' }, name: 'SmartSource AG', esgScore: 91 },
  ];

  // Dummy data for ESG Experts & Marketplace Innovators
  const initialInnovators = [
    {
      initials: 'DPR',
      name: 'Dr. Priya Ramaswamy',
      role: 'Chief ESG Scientist',
      quote: '"Our AI-powered ESG verification not only builds trust but measurably reduces the carbon footprint of every transaction."',
    },
    {
      initials: 'ML',
      name: 'Matthew Li',
      role: 'Carbon Emissions Analyst',
      quote: '"With CogTechAI\'s platform, clients can instantly visualize their supply chain\'s carbon savings—automated, auditable, and in real time."',
    },
    {
      initials: 'ZS',
      name: 'Zara Smith',
      role: 'Marketplace Sustainability Lead',
      quote: '"We help companies source from green suppliers, track ESG metrics, and demonstrate impact for investors and regulators."',
    },
  ];

  const [homeStats, setHomeStats] = useState([]);
  const [environmentalStats, setEnvironmentalStats] = useState([]);
  const [whyFeatures, setWhyFeatures] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [innovators, setInnovators] = useState([]);
  const [homeFeatures, setHomeFeatures] = useState([]);

  useEffect(() => {
    // Simulate API call
    setHomeStats(initialHomeStats);
    setEnvironmentalStats(initialEnvironmentalStats);
    setWhyFeatures(initialWhyFeatures);
    setCompanies(initialCompanies);
    setInnovators(initialInnovators);
    setHomeFeatures(initialHomeFeatures);
  }, []);

  return (
    <div className="home-container">
      {/* Removed global header content, now handled by src/header/index.js */}
      <div className="cogtech-logo-container">
        <span className="cogtech-icon"></span> {/* Placeholder for icon */}
        <span>CogTech AI</span>
      </div>
      <div className="home-header">
        <h1>ESG-Centric, AI-Driven Marketplace</h1>
        <h2>Saving Carbon. Building Trust.</h2>
        <p className="home-subtext">
          Connect buyers, suppliers, freelancers, and manufacturers—all with real-time ESG verification and measurable carbon savings. Trust, transparency, and growth—powered by AI.
        </p>
        <div className="home-actions">
          <button className="home-btn primary">Get Started</button>
          <a href="/login" className="home-btn secondary">Login</a>
        </div>
      </div>
      <div className="home-stats">
        {homeStats.map((stat, index) => (
          <div key={index}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="home-features">
        {homeFeatures.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span role="img" aria-label={feature.title}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="environmental-stats">
        {environmentalStats.map((stat, index) => (
          <div key={index}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="why-cogtech-ai">
        <h2>Why CogTechAI?</h2>
        <div className="why-features">
          {whyFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span role="img" aria-label={feature.title}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-companies-section">
        <h2>Featured ESG-Verified Companies</h2>
        <div className="company-cards-container">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <span className={`trusted-tag ${company.trustedTag.color}`}>{company.trustedTag.label}</span>
              <h3>{company.name}</h3>
              <p className="esg-score-label">ESG Score</p>
              <div className="esg-score">
                <span className="score-value">{company.esgScore}</span>
                <span className="score-slash">/</span>
                <span className="score-max">100</span>
                <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: `${company.esgScore}%` }}></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="esg-innovators-section">
        <h2>ESG Experts & Marketplace Innovators</h2>
        <div className="innovator-cards-container">
          {innovators.map((innovator, index) => (
            <div className="innovator-card" key={index}>
              <div className="innovator-initials">{innovator.initials}</div>
              <h3>{innovator.name}</h3>
              <p className="innovator-role">{innovator.role}</p>
              <p className="innovator-quote">{innovator.quote}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Meet the Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-cards-container">
          <div className="team-card">
            <img src="https://media.licdn.com/dms/image/C4D03AQF1QwKkQwKkQw/profile-displayphoto-shrink_200_200/0/1516881234567?e=1718236800&v=beta&t=example1" alt="Abraham Bollarapu" />
            <div className="team-name">Abraham Bollarapu</div>
            <div className="team-role">Founder & CEO</div>
            <div className="team-desc">Visionary, strategist, and technology leader.</div>
          </div>
          <div className="team-card">
            <img src="https://media.licdn.com/dms/image/C4E03AQF2QwKkQwKkQw/profile-displayphoto-shrink_200_200/0/1516881234567?e=1718236800&v=beta&t=example2" alt="Evžen Thöndel" />
            <div className="team-name">Evžen Thöndel</div>
            <div className="team-role">Co-Founder & CTO</div>
            <div className="team-desc">Visionary, strategist, and technology leader.</div>
          </div>
          <div className="team-card">
            <img src="https://media.licdn.com/dms/image/C4F03AQF3QwKkQwKkQw/profile-displayphoto-shrink_200_200/0/1516881234567?e=1718236800&v=beta&t=example3" alt="Naren K" />
            <div className="team-name">Naren K</div>
            <div className="team-role">Co-Founder & COO</div>
            <div className="team-desc">Visionary, strategist, and technology leader.</div>
          </div>
          <div className="team-card">
            <img src="https://media.licdn.com/dms/image/C4G03AQF4QwKkQwKkQw/profile-displayphoto-shrink_200_200/0/1516881234567?e=1718236800&v=beta&t=example4" alt="Madhusudhana Rao Rachaputi" />
            <div className="team-name">Madhusudhana Rao Rachaputi</div>
            <div className="team-role">Co-Founder & CMO</div>
            <div className="team-desc">Visionary, strategist, and technology leader.</div>
          </div>
        </div>
      </div>
      {/* Email Subscribe Section */}
      <div className="subscribe-section">
        <h3>Get ESG insights & platform updates</h3>
        <form className="subscribe-form" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home; 