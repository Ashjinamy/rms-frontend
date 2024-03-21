import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  useEffect(() => {
    // Fetch staff data
    axios.get('http://localhost:8000/staff/')
      .then(response => {
        setStaff(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // Fetch notifications
    axios.get('http://localhost:8000/notifications/')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // Fetch maintenance requests
    axios.get('http://localhost:8000/maintenance-requests/')
      .then(response => {
        setMaintenanceRequests(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Staff</h2>
        {/* Display staff information */}
        <div className="content">
          <div className="main-content">
            <h3>Staff Information</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {staff.map(staffMember => (
                  <tr key={staffMember.Staff_ID}>
                    <td>{staffMember.Staff_ID}</td>
                    <td>{staffMember.Name}</td>
                    <td>{staffMember.Role}</td>
                    <td>{staffMember.Phone_Number}</td>
                    <td>{staffMember.Email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Display notifications */}
          <div className="side-column">
            <h3>Notifications</h3>
            <ul>
              {notifications.map(notification => (
                <li key={notification.id}>{notification.message}</li>
              ))}
            </ul>
          </div>
          {/* Display maintenance requests */}
          <div className="side-column">
            <h3>Maintenance Requests</h3>
            <ul>
              {maintenanceRequests.map(request => (
                <li key={request.id}>{request.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
