import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='admin'>
      <h1>Admin Details</h1>
      <div className="form-container">
        {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

const LoginForm = ({ toggleForm }) => (
  <form className="form">
    <h2>Login</h2>
    <label>
      Email:
      <input type="email" name="email" required />
    </label>
    <label>
      Password:
      <input type="password" name="password" required />
    </label>
    <button type="submit">Login</button>
    <p>
      Don't have an account? <span className="link" onClick={toggleForm}>Sign Up</span>
    </p>
  </form>
);

const SignUpForm = ({ toggleForm }) => (
  <form className="form">
    <h2>Sign Up</h2>
    <label>
      Username:
      <input type="text" name="username" required />
    </label>
    <label>
      Email:
      <input type="email" name="email" required />
    </label>
    <label>
      Password:
      <input type="password" name="password" required />
    </label>
    <button type="submit">Sign Up</button>
    <p>
      Already have an account? <span className="link" onClick={toggleForm}>Login</span>
    </p>
  </form>
);

export default Admin;
