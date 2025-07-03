import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/booking.css"; // Make sure path matches your project

const availableTimeSlots = {
  "2025-06-03": ["09:00 AM", "10:00 AM", "02:00 PM"],
  default: ["09:00 AM", "10:30 AM", "01:00 PM", "04:00 PM"],
};

const mockDoctor = {
  name: "Dr. Alice Smith",
  specialty: "Cardiology",
  picture: "https://randomuser.me/api/portraits/women/44.jpg",
  experience: "10 years",
  location: "New York",
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const isUserLoggedIn = true;

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(availableTimeSlots[selectedDate] || availableTimeSlots.default);
      setSelectedTime("");
    }
  }, [selectedDate]);

  const handleConfirm = () => {
    if (!isUserLoggedIn) {
      toast.error("Please log in to confirm booking.");
      return;
    }
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time.");
      return;
    }
    toast.success(`Appointment confirmed on ${selectedDate} at ${selectedTime}`);
    setStep(1);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="booking-container">
      <h1 className="booking-header">Book Appointment</h1>

      {/* Doctor Info */}
      <div className="doctor-info">
        <img
          src={mockDoctor.picture}
          alt={mockDoctor.name}
          className="doctor-picture"
        />
        <div className="doctor-details">
          <h2 className="doctor-name">{mockDoctor.name}</h2>
          <p className="doctor-specialty">{mockDoctor.specialty}</p>
          <p className="doctor-extra">{mockDoctor.experience} experience</p>
          <p className="doctor-extra">{mockDoctor.location}</p>
        </div>
      </div>

      {/* Step 1: Date Picker */}
      {step === 1 && (
        <div className="mb-6">
          <label htmlFor="date" className="font-medium mb-2 block">
            Choose Appointment Date
          </label>
          <input
            type="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          {selectedDate && (
            <button
              onClick={() => setStep(2)}
              className="bg-blue px-4 py-2 mt-4 rounded"
            >
              Next: Select Time
            </button>
          )}
        </div>
      )}

      {/* Step 2: Time Slots */}
      {step === 2 && (
        <div className="mb-6">
          <h3 className="font-medium mb-2">
            Select a Time Slot for {selectedDate}
          </h3>
          {timeSlots.length === 0 ? (
            <p>No time slots available for this date.</p>
          ) : (
            <div className="grid-time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`time-slot-btn ${
                    selectedTime === time ? "time-slot-selected" : ""
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          <div className="flex-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="border rounded px-4 py-2 hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => selectedTime && setStep(3)}
              disabled={!selectedTime}
              className={`px-4 py-2 rounded text-white ${
                selectedTime ? "bg-green hover:bg-green" : "bg-gray cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div className="mb-6 text-center">
          <p className="text-lg mb-4">
            Confirm your appointment on <strong>{selectedDate}</strong> at{" "}
            <strong>{selectedTime}</strong>?
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green px-6 py-2 rounded text-white hover:bg-green"
          >
            Yes, Confirm
          </button>
          <div className="mt-4">
            <button onClick={() => setStep(2)} className="underline-btn">
              Change Time
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Booking;
