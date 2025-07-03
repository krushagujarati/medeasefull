import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: email,   // ✅ string only
      password: pass  // ✅ string only
    });

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));

    login(res.data.user); // pass only the user object
    setSuccess(true);
    setError('');
    setTimeout(() => navigate('/profile'), 1000);
  } catch (err) {
    setError(err.response?.data?.message || 'Login failed');
  }
};



  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Left login form */}
        <div className="left">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />

            <div className="options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <span className="forgot" onClick={() => alert("Reset link coming soon")}>
                Forgot Password?
              </span>
            </div>

            <button className="signin-btn" type="submit">Sign In</button>
          </form>

          <p className="bottom-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup")} className="signup-link">
              Sign Up
            </span>
          </p>

          {success && <div className="success-msg">✅ Login Successful!</div>}
          {error && <div className="error-msg">❌ {error}</div>}
        </div>

        {/* Right side info panel */}
        <div className="right">
          <h2>HealthConnect</h2>
          <p>Your trusted healthcare companion</p>
          <ul>
            <li>✓ Find the best doctors near you</li>
            <li>✓ Book appointments online</li>
            <li>✓ Access your medical records securely</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
