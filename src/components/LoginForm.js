import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import CSS styles

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login/', formData);
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error(error.response.data);
            // Handle error response
        }
    };

    return (
        <div className="form-container">
            <div className="card login-card">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <button type="submit">Login</button>
                </form>
                <div className="form-footer">
                    <p>Don't have an account? <Link to="/components/SignUpForm">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
