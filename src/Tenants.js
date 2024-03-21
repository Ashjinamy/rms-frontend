import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const Tenants = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/tenants/')
      .then(response => {
        setTenants(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Tenants</h2>
        <div className="content">
          <div className="main-content">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Lease Start Date</th>
                  <th>Lease End Date</th>
                  <th>Balance</th>
                  <th>Rent Amount</th>
                  <th>Amount Paid</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map(tenant => (
                  <tr key={tenant.Tenant_ID}>
                    <td>{tenant.Tenant_ID}</td>
                    <td>{tenant.First_Name}</td>
                    <td>{tenant.Last_Name}</td>
                    <td>{tenant.Phone_Number}</td>
                    <td>{tenant.Email}</td>
                    <td>{tenant.Lease_Start_Date}</td>
                    <td>{tenant.Lease_End_Date}</td>
                    {/* Display tenant-specific information */}
                    <td>{tenant.Balance}</td>
                    <td>{tenant.Rent_Amount}</td>
                    <td>{tenant.Amount_Paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="side-column">
            {/* Side column content goes here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tenants;
