import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import "../styles/doctorprofile.css";


// Dummy data - replace with shared doctor data file if needed
const allDoctors = Array.from({ length: 30 }, (_, i) => {
  const names = [
    "Dr. Aarav Mehta", "Dr. Kavya Sharma", "Dr. Rajat Patel", "Dr. Anaya Reddy",
    "Dr. Manish Verma", "Dr. Nisha Iyer", "Dr. Arjun Das", "Dr. Sneha Kapoor",
    "Dr. Rohit Nair", "Dr. Priya Bhatt", "Dr. Aniket Joshi", "Dr. Riya Ghosh",
    "Dr. Vikram Sethi", "Dr. Tanya Bansal", "Dr. Karan Malhotra", "Dr. Shruti Rao",
    "Dr. Devansh Singh", "Dr. Meera Jain", "Dr. Akash Tiwari", "Dr. Divya Shetty",
    "Dr. Mohit Choudhary", "Dr. Sanjana Desai", "Dr. Harsh Vora", "Dr. Ishita Roy",
    "Dr. Aditya Menon", "Dr. Mitali Sinha", "Dr. Neeraj Kaul", "Dr. Radhika Pillai",
    "Dr. Sandeep Bhatia", "Dr. Aditi Nair"
  ];
  const specialties = [
    "Cardiologist", "Dermatologist", "Pediatrician", "Neurologist", "Orthopedic",
    "Gynecologist", "ENT", "Ophthalmologist", "Dentist", "Psychiatrist"
  ];
  const locations = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
    "Pune", "Ahmedabad", "Jaipur", "Surat"
  ];
  return {
    id: i + 1,
    name: names[i],
    specialty: specialties[i % specialties.length],
    location: locations[i % locations.length],
    experience: `${5 + (i % 20)} years`,
    rating: (4 + (i % 10) * 0.1).toFixed(1),
    gender: i % 2 === 0 ? "Male" : "Female",
    cost: 300 + (i % 5) * 50,
  };
});

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = allDoctors.find(doc => doc.id === parseInt(id));

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dates = Array.from({ length: 30 }, (_, i) => new Date(2025, 5, i + 1));
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

  if (!doctor) return <div>Doctor not found</div>;

  const confirmBooking = () => {
    setSubmitted(true);
    setTimeout(() => alert("✅ Appointment booked!"), 500);
  };

  return (
    <div className="doctor-profile-container">
      {/* Doctor Info */}
      <div className="profile-header">
  <div className={`profile-avatar ${doctor.gender.toLowerCase()}`}>
    {doctor.name.charAt(4)}
  </div>
  <div>
    <h2>{doctor.name}</h2>
    <p className="specialty">{doctor.specialty}</p>
    <div className="info">
      <span><FaClock /> {doctor.experience} experience</span>
      <span><FaMapMarkerAlt /> {doctor.location} Medical Center</span>
      <span><FaCalendarAlt /> Available Mon–Fri</span>
    </div>
    <div className="rating">
      <MdStar className="star" /> {doctor.rating} (128 reviews)
    </div>
  </div>
</div>


      {/* Appointment Steps */}
      <div className="appointment-container">
        {!submitted ? (
          <>
            <h3>Book Appointment</h3>
      <div className="step-tracker-container">
  <div className="step-progress-bar">
    <div
      className="step-progress-fill"
      style={{ width: `${(step - 1) * 50}%` }} // 0% for step 1, 50% for 2, 100% for 3
    ></div>
  </div>

  <div className="step-tracker">
    <div className={`step ${step >= 1 ? "active" : ""}`}>
      <div className="step-number">1</div>
      <div className="step-label">Select Date</div>
    </div>
    <div className={`step ${step >= 2 ? "active" : ""}`}>
      <div className="step-number">2</div>
      <div className="step-label">Choose Time</div>
    </div>
    <div className={`step ${step === 3 ? "active" : ""}`}>
      <div className="step-number">3</div>
      <div className="step-label">Confirm</div>
    </div>
  </div>
</div>

            {step === 1 && (
              <div className="calendar-wrapper">
                <h4>Select Date</h4>
                <div className="calendar-grid">
                  {dates.map((date) => (
                    <button
                      key={date.toISOString()}
                      className={selectedDate === date.toDateString() ? "selected" : ""}
                      onClick={() => setSelectedDate(date.toDateString())}
                    >
                      {date.getDate()}
                    </button>
                  ))}
                </div>
                <div className="nav-buttons">
                  <button onClick={() => setStep(2)} disabled={!selectedDate}>Next</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="timeslot-wrapper">
                <h4>Select Time</h4>
                <div className="timeslots">
                  {times.map((time) => (
                    <button
                      key={time}
                      className={selectedTime === time ? "selected" : ""}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <div className="nav-buttons">
                  <button onClick={() => setStep(1)}>Back</button>
                  <button onClick={() => setStep(3)} disabled={!selectedTime}>Next</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="confirm-wrapper">
                <h4>Confirm Details</h4>
                <p><strong>Date:</strong> {selectedDate}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <label>
                  Reason
                  <select value={reason} onChange={(e) => setReason(e.target.value)}>
                    <option value="">Select reason</option>
                    <option value="Check-up">Check-up</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                </label>
                <label>
                  Additional Notes
                  <textarea
                    placeholder="Describe your concern..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </label>
                <div className="nav-buttons">
                  <button onClick={() => setStep(2)}>Back</button>
                  <button onClick={confirmBooking} disabled={!reason}>Confirm</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="confirmation-message">
            🎉 Appointment confirmed with {doctor.name}!
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
