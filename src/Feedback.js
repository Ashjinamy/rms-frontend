import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    comment: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/feedbacks/')
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/feedbacks/', formData);
      console.log(response.data);
      // Refresh feedbacks after submission
      axios.get('http://localhost:8000/feedbacks/')
        .then(response => {
          setFeedbacks(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      // Reset form data
      setFormData({ comment: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Feedback</h2>
        <ul style={listStyle}>
          {feedbacks.map(feedback => (
            <li key={feedback.Feedback_ID} style={feedbackItemStyle}>{feedback.Comment}</li>
          ))}
        </ul>
        <h3 style={headingStyle}>Add Feedback</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="comment" style={labelStyle}>Comment:</label>
            <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} style={inputStyle}></textarea>
          </div>
          <button type="submit" style={buttonStyle}>Submit Feedback</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const containerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
};

const formContainerStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
};

const headingStyle = {
  color: 'black',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const feedbackItemStyle = {
  marginBottom: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  color: 'black',
  marginBottom: '5px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid black',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'black',
  color: 'white',
  cursor: 'pointer',
};

export default Feedback;
