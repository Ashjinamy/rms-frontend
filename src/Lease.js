import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Lease = () => {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/leases/')
      .then(response => {
        setLeases(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h2>Leases</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Property ID</th>
              <th>Tenant ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody>
            {leases.map(lease => (
              <tr key={lease.Lease_ID}>
                <td>{lease.Lease_ID}</td>
                <td>{lease.Property_ID}</td>
                <td>{lease.Tenant_ID}</td>
                <td>{lease.Start_Date}</td>
                <td>{lease.End_Date}</td>
                <td>{lease.Rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Lease;
