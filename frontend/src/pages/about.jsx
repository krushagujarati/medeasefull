import React from 'react';
import '../styles/about.css';
import { FaHospitalSymbol, FaHeartbeat, FaUserMd, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiTargetLock } from 'react-icons/bi';
// Replace with your actual logo path

const AboutUs = () => {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-header">
        
        <h1>HealthConnect</h1>
        <p>Your trusted healthcare companion</p>
      </div>

      <div className="aboutus-card">
        <section>
          <h2><FaHospitalSymbol /> What We Do</h2>
          <p>
            HealthConnect helps you find nearby hospitals, check real-time emergency availability, book appointments, and access your health data in one platform.
          </p>
        </section>

        <section>
          <h2><FaHeartbeat /> Why Choose Us</h2>
          <ul>
            <li>✔ Search hospitals by city, specialty, or rating</li>
            <li>✔ Get emergency bed & ICU availability in real-time</li>
            <li>✔ Book appointments with top doctors</li>
            <li>✔ Store your reports and medical history securely</li>
          </ul>
        </section>

        <section>
          <h2><BiTargetLock /> Our Mission</h2>
          <p>
            We aim to make healthcare accessible, transparent, and tech-enabled for everyone across India.
          </p>
        </section>

        <section className="contact">
          <h2><FaUserMd /> Contact Us</h2>
          <p><MdEmail /> Email: <a href="mailto:support@healthconnect.in">support@healthconnect.in</a></p>
          <p><FaPhoneAlt /> Phone: +91 99999 88888</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
