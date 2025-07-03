import React from "react";
import "../styles/hero.css";
import { FaHeart, FaClock, FaSearch, FaUserMd, FaFileAlt, FaCapsules, FaQuestionCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <span className="hero-badge">Your Health Journey Starts Here</span>
        <h1>Modern Healthcare<br />For Modern Life</h1>
        <p>
          Experience personalized care with cutting-edge technology. Connect with top specialists and take control of your health journey.
        </p>
        <div className="hero-buttons">
          <button className="btn-pink">Book Appointment</button>
          <button className="btn-outline">Find a Doctor</button>
        </div>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for doctors, specialties, or conditions..." />
        </div>
      </div>

      <div className="hero-right">
        <div className="dashboard-card">
          <h4>Health Dashboard</h4>
          <p className="subtext">Your wellness at a glance</p>
          <div className="dashboard-stats">
            <div className="stat-box">
              <h3>72 <span>bpm</span></h3>
              <p>Heart Rate</p>
              <FaHeart />
            </div>
            <div className="stat-box">
              <h3>7.5 <span>hrs</span></h3>
              <p>Sleep</p>
              <FaClock />
            </div>
          </div>

          <div className="appointment-box">
            <p className="appt-label">Upcoming Appointment</p>
            <h5>Dr. Sarah Miller</h5>
            <span className="appt-type">Cardiology Consultation</span>
            <span className="appt-time">Tomorrow 10:30 AM</span>
          </div>

          <div className="dashboard-actions">
            <div><FaUserMd /><span>Book</span></div>
            <div><FaFileAlt /><span>Records</span></div>
            <div><FaCapsules /><span>Meds</span></div>
            <div><FaQuestionCircle /><span>Help</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
