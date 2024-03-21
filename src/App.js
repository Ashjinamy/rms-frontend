import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Tenants from './Tenants';
import Staff from './Staff';
import Property from './Property';
import Payment from './Payment';
import Notification from './Notification';
import MaintenanceRequest from './MaintenanceRequest';
import Lease from './Lease';
import Feedback from './Feedback';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <Router>
      <div>
        <h1>RMS</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tenants" element={<Tenants />} />
          <Route exact path="/staff" element={<Staff />} />
          <Route exact path="/property" element={<Property />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/maintenance-request" element={<MaintenanceRequest />} />
          <Route exact path="/lease" element={<Lease />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="components/SignUpForm" element={<SignUpForm/>} />
          <Route exact path="components/LoginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
