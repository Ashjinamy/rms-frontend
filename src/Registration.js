import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    lease_start_date: '',
    lease_end_date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API for registration
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      lease_start_date: '',
      lease_end_date: '',
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
        </div>
        <div>
          <label>Lease Start Date:</label>
          <input type="date" name="lease_start_date" value={formData.lease_start_date} onChange={handleChange} required />
        </div>
        <div>
          <label>Lease End Date:</label>
          <input type="date" name="lease_end_date" value={formData.lease_end_date} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
