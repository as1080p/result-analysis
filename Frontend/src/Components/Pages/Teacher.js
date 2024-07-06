import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile';
import './Teacher.css';

const Teacher = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/teacherLogin', { email, password });
      console.log('Login successful', response.data);
      // Assuming login is successful, navigate to profile page
      navigate('/profile');
    }
    catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='teacher'>
      <h1>Teacher Details</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>
            Email: 
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </label>
          <label>
            Password: 
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </label>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Teacher;
