import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import CSS styles

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup/', formData);
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error(error.response.data);
            // Handle error response
        }
    };

    return (
        <div className="form-container">
            <div className="card signup-card">
                <h2>Sign Up</h2>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password1" placeholder="Password" value={formData.password1} onChange={handleChange} />
                    <input type="password" name="password2" placeholder="Confirm Password" value={formData.password2} onChange={handleChange} />
                    <button type="submit">Sign Up</button>
                </form>
                <div className="form-footer">
                    <p>Already have an account? <Link to="/components/LoginForm">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
