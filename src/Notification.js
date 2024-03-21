import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './Notification.css'; // Import CSS file for styling

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/notifications/')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="notification-container">
        <h2>Notifications</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tenant ID</th>
              <th>Staff ID</th>
              <th>Message</th>
              <th>Date Sent</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map(notification => (
              <tr key={notification.Notification_ID}>
                <td>{notification.Notification_ID}</td>
                <td>{notification.Tenant_ID}</td>
                <td>{notification.Staff_ID}</td>
                <td>{notification.Message}</td>
                <td>{notification.Date_Sent}</td>
                <td>{notification.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
