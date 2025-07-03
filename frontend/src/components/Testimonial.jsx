import React from "react";
import "../styles/testimonial.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    text: "HealthConnect made finding a specialist so easy! I booked an appointment with a dermatologist within minutes and got the care I needed.",
    color: "pink",
    rating: 5,
  },
  {
    initials: "MT",
    name: "Michael Thompson",
    text: "I love how I can track all my family's appointments in one place. The reminders are super helpful and the doctors are top-notch.",
    color: "orange",
    rating: 4.5,
  },
  {
    initials: "AP",
    name: "Alicia Patel",
    text: "As a busy mom, being able to book appointments online saves me so much time. The doctors are caring and the whole experience is seamless.",
    color: "yellow",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Patients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <div className={`avatar ${t.color}`}>{t.initials}</div>
              <div>
                <h4>{t.name}</h4>
                <div className="stars">
                  {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                    <FaStar key={i} color="#fcd34d" />
                  ))}
                  {t.rating % 1 !== 0 && <FaStarHalfAlt color="#fcd34d" />}
                </div>
              </div>
            </div>
            <p className="testimonial-text">"{t.text}"</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Testimonials;
