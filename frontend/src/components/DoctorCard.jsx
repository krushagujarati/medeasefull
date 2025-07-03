import React, { useState } from "react";
import "../styles/doctorCard.css";
import AppointmentForm from "./AppointmentForm";

const doctorsList = [
  {
    name: "Dr. Sophia Patel",
    specialty: "Cardiologist",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Dr. Aakash Mehta",
    specialty: "Dermatologist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Dr. Riya Sharma",
    specialty: "Pediatrician",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Kabir Sen",
    specialty: "Neurologist",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    name: "Dr. Anjali Desai",
    specialty: "Gynecologist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/75.jpg"
  }
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBookClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="doctors-section">
      <h2 className="section-title">Our Top Doctors</h2>
      <div className="doctor-grid">
        {doctorsList.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-info">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-avatar"
              />
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-rating">
                {"★".repeat(doctor.rating)}
                {"☆".repeat(5 - doctor.rating)}
              </p>
            </div>
            <button
              className="book-button"
              onClick={() => handleBookClick(doctor)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button className="close-modal" onClick={handleCloseForm}>
              ×
            </button>
            <AppointmentForm doctorName={selectedDoctor.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
