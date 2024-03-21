import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const MaintenanceRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/maintenance-requests/')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h2>Maintenance Requests</h2>
        <ul>
          {requests.map(request => (
            <li key={request.Request_ID}>{request.Description}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default MaintenanceRequest;
