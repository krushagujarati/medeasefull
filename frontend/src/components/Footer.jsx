import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <h3><span className="icon">❗</span> <span className="brand-name">HealthConnect</span></h3>
          <p>Connecting patients with trusted healthcare professionals for better health outcomes.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaGithub />
            <FaDribbble />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Specialties</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        © 2025 HealthConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
