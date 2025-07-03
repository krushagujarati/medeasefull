import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location]); // Triggers on route change (login/logout)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          
          <Link to="/" className="logo-text">MedEASE</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/doctors" className="nav-item">Find Doctor</Link></li>
          <li><Link to="/hospitals" className="nav-item">Hospitals</Link></li>
          <li><Link to="/appointment" className="nav-item">Appointment</Link></li>
          <li><Link to="/about" className="nav-item">About Us</Link></li>
          <li>
            {user ? (
              <Link to="/profile" className="nav-item profile-icon">
                <FaUserCircle size={22} />
              </Link>
            ) : (
              <Link to="/login" className="nav-item">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
