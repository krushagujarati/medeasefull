import React from "react";
import "../styles/appointmentpage.css";
import { FaUserMd, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const AppointmentPage = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Aarti Shah",
      hospital: "CityCare Multispecialty",
      date: "2025-06-25",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Rajeev Mehta",
      hospital: "Sunshine Hospital",
      date: "2025-06-28",
      time: "04:15 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="appointment-container">
      <h2>My Appointments</h2>
      <p className="subtitle">See your upcoming scheduled appointments below.</p>

      <div className="appointment-list">
        {appointments.length === 0 ? (
          <p className="no-results">You have no upcoming appointments.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt.id} className="appointment-card">
              <div className="card-header">
                <div className="avatar">
                  <FaUserMd />
                </div>
                <div>
                  <h4>{appt.doctor}</h4>
                  <p>{appt.hospital}</p>
                </div>
              </div>
              <div className="info">
                <span><FaCalendarAlt /> {appt.date}</span>
                <span><FaClock /> {appt.time}</span>
              </div>
              <div className="status">
                <FaCheckCircle /> {appt.status}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
