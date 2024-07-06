import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios'; // Assuming axios.js is in the src folder

import './Student.css';

const Student = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('/studentLogin', { email, password });
      console.log('Login successful', response.data);
      // Assuming login is successful, navigate to profile page
      navigate('/STprofile');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='teacher'>
      <h1>Student Details</h1>
      <div className="form-container">
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

const LoginForm = ({ handleLogin }) => (
  <form className="form" onSubmit={handleLogin}>
    <h2>Login</h2>
    <label>
      Email_id: <input type="email" name="email" required />
    </label>
    <label>
      Password:
      <input type="password" name="password" required />
    </label>
    <button type="submit">Login</button>
  </form>
);

export default Student;
