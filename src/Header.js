import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import axios from 'axios';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthForms, setShowAuthForms] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout/');
      // Handle logout success, such as clearing local storage and redirecting
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error
    }
  };

  return (
    <header style={headerStyle}>
      <h1>RMS - Rental Management System</h1>
      <button onClick={toggleMenu} className="menu-toggle">Menu</button>
      <nav style={{ display: showMenu ? 'block' : 'none' }}>
        <ul style={navStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/tenants">Tenants</a></li>
          <li><a href="/staff">Staff</a></li>
          <li><a href="/property">Property</a></li>
          <li><a href="/payment">Payment</a></li>
          <li><a href="/notification">Notification</a></li>
          <li><a href="/maintenance-request">Maintenance</a></li>
          <li><a href="/lease">Lease</a></li>
          <li><a href="/feedback">Feedback</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <div className="profile-icon">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <FaUser onClick={() => setShowAuthForms(!showAuthForms)} />
        )}
        {showAuthForms && (
        <div style={buttonContainerStyle }>
        <Link to="/components/SignUpForm" style={buttonStyle}>Sign Up</Link>
        <Link to="/components/LoginForm" style={buttonStyle}>Login</Link>
      </div>


        )}
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
};
const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  };

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  margin: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Header;
