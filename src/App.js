import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';
import Home from './homepage';
import Login from './login';
import Signup from './signup';
import Dashboard from './dashboard';
import MyNeeds from './myneeds';
import Profile from './profile';

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/dashboard', '/my-needs', '/profile', '/login', '/signup']; // Paths where header/footer should not display
  const shouldDisplayHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldDisplayHeaderFooter && <Header />}
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-needs" element={<MyNeeds />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {shouldDisplayHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
