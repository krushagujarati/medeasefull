import React from "react";
import { FaHeartbeat, FaUserMd, FaGlobe, FaBone, FaChild, FaBrain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/TopSpecialties.css";

const specialties = [
  {
    title: "Cardiology",
    subtitle: "Heart Care",
    icon: <FaHeartbeat />,
    color: "#FF4C4C", // 🔴 Bold red
  },
  {
    title: "Dermatology",
    subtitle: "Skin Health",
    icon: <FaUserMd />,
    color: "#FF7F00", // 🟠 Deep orange
  },
  {
    title: "Neurology",
    subtitle: "Brain & Nerves",
    icon: <FaGlobe />,
    color: "#1E90FF", // 🔵 Bright blue
  },
  {
    title: "Orthopedics",
    subtitle: "Bone & Joint",
    icon: <FaBone />,
    color: "#2ECC71", // 🟢 Bright green
  },
  {
    title: "Pediatrics",
    subtitle: "Child Care",
    icon: <FaChild />,
    color: "#A259FF", // 🟣 Vivid violet
  },
  {
    title: "Psychiatry",
    subtitle: "Mental Health",
    icon: <FaBrain />,
    color: "#FF69B4", // 🌸 Bold pink
  },
];

const TopSpecialties = () => {
  const navigate = useNavigate();

  const goToDoctors = () => {
    navigate("/doctors");
  };

  return (
    <div className="top-specialties-container">
      <span className="badge">Medical Expertise</span>
      <h2 className="heading">Top Medical Specialties</h2>
      <p className="subheading">Find the right specialist for your specific health needs.</p>

      <div className="specialty-grid">
        {specialties.map((item, idx) => (
          <div
            className="specialty-card"
            key={idx}
            onClick={goToDoctors}
            style={{ "--cardColor": item.color, "--cardBg": item.color + "22" }} // light tint for bg
          >
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="quick-booking">
        <h3>Find Doctor</h3>
        <p>Get instant recommendations based on your needs</p>
        <div className="booking-controls">
          <select>
            <option>Select Specialty</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Dermatology</option>
          </select>
          <select>
            <option>Select Location</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
          <button onClick={goToDoctors}>search</button>
        </div>
      </div>
    </div>
  );
};

export default TopSpecialties;
