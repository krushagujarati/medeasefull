import React from 'react';
import '../styles/howItWorks.css';
import { FaUserMd, FaSyringe, FaVials, FaStethoscope } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <h1 className="title">Book Your Appointment</h1>
      <p className="subtitle">Schedule a visit with our healthcare professionals in just a few steps.</p>

      <div className="howitworks-wrapper">
        {/* Left - Steps */}
        <div className="steps">
          <h3>Booking Steps</h3>
          <ul>
            <li><span className="step-number">1</span> Select Service</li>
            <li><span className="step-number">2</span> Choose Doctor</li>
            <li><span className="step-number">3</span> Select Date & Time</li>
            <li><span className="step-number">4</span> Your Information</li>
            <li><span className="step-number">5</span> Confirmation</li>
          </ul>
          <div className="help-section">
            <p>Need Help?</p>
            <p className="support-text">Our support team is available to assist you with your booking.</p>
            <p className="phone"><BsTelephoneFill /> 1-800-HEALTH</p>
          </div>
        </div>

        {/* Right - Services */}
        <div className="services">
          <h3>Select a Service</h3>
          <div className="service-options">
            <div className="service-card">
              <FaStethoscope className="icon blue" />
              <div>
                <h4>General Check-up</h4>
                <p>Comprehensive health assessment</p>
              </div>
            </div>
            <div className="service-card">
              <FaUserMd className="icon purple" />
              <div>
                <h4>Specialist Consultation</h4>
                <p>Consult with a medical specialist</p>
              </div>
            </div>
            <div className="service-card">
              <FaSyringe className="icon green" />
              <div>
                <h4>Vaccination</h4>
                <p>Immunization and vaccine services</p>
              </div>
            </div>
            <div className="service-card">
              <FaVials className="icon yellow" />
              <div>
                <h4>Lab Tests</h4>
                <p>Blood work and diagnostic tests</p>
              </div>
            </div>
          </div>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
