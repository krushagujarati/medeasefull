import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For API request
import '../styles/login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient', // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://medeasefull.onrender.com/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      setSuccess(true);
      setError('');
      setTimeout(() => navigate('/'), 2000); // redirect to login or home
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="left">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
              required
            />
            <select name="role" onChange={handleChange} required>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              
            </select>
            <button className="signin-btn" type="submit">Sign Up</button>
          </form>

          <p className="bottom-text">
            Already have an account?{' '}
            <span onClick={() => navigate('/')}>Sign in</span>
          </p>

          {success && <div className="success-msg">✅ Signup Successful!</div>}
          {error && <div className="error-msg">❌ {error}</div>}
        </div>

        <div className="right signup-theme">
          <h2>Welcome to HealthConnect</h2>
          <p>Join and take control of your health today</p>
          <ul>
            <li>✓ Book online consultations</li>
            <li>✓ Access reports anytime</li>
            <li>✓ 24x7 support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
