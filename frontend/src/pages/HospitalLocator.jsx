import React, { useState } from "react";
import "../styles/hospitallocator.css";

const HospitalLocator = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [service, setService] = useState("");
  const [rating, setRating] = useState("3.0+");

  const hospitals = [
    {
      name: "City General Hospital",
      rating: 4.5,
      address: "123 Main Street, Downtown, New York, NY 10001",
      services: ["Emergency", "Surgery", "Cardiology", "Diagnostics"],
      phone: "(212) 555-1234",
      type: "Public",
      location: "New York",
    },
    {
      name: "Sunrise Multispecialty Hospital",
      rating: 4.2,
      address: "45 Marine Drive, Mumbai, MH 400002",
      services: ["Emergency", "ICU", "Orthopedics", "Cancer Care"],
      phone: "022 2444 5555",
      type: "Private",
      location: "Mumbai",
    },
    {
      name: "Arogya Children Hospital",
      rating: 4.7,
      address: "Sector 22, Gurgaon, Delhi NCR",
      services: ["Pediatrics", "Diagnostics", "Maternity"],
      phone: "011 6677 8899",
      type: "Children",
      location: "Delhi",
    },
    {
      name: "Apollo Clinic",
      rating: 3.9,
      address: "Koramangala, Bangalore, Karnataka",
      services: ["Surgery", "Orthopedics", "Cardiology"],
      phone: "080 1234 5678",
      type: "Clinic",
      location: "Bangalore",
    },
    {
      name: "Healing Touch Mental Health Center",
      rating: 4.8,
      address: "MG Road, Hyderabad, Telangana",
      services: ["Mental Health", "Diagnostics"],
      phone: "040 3344 7788",
      type: "Mental Health",
      location: "Hyderabad",
    },
    {
      name: "LifeCare Hospital",
      rating: 4.1,
      address: "Ellis Bridge, Ahmedabad, Gujarat",
      services: ["Emergency", "Maternity", "Surgery"],
      phone: "079 2345 6789",
      type: "Multispecialty",
      location: "Ahmedabad",
    },
    {
      name: "Rainbow Maternity Hospital",
      rating: 4.4,
      address: "T Nagar, Chennai, Tamil Nadu",
      services: ["Maternity", "Pediatrics", "Diagnostics"],
      phone: "044 9988 7766",
      type: "Private",
      location: "Chennai",
    },
    {
      name: "City Hospital",
      rating: 3.7,
      address: "Camp, Pune, Maharashtra",
      services: ["Emergency", "Surgery", "Cardiology"],
      phone: "020 3322 1100",
      type: "Public",
      location: "Pune",
    },
    {
      name: "Suraksha Diagnostic Centre",
      rating: 4.3,
      address: "Salt Lake, Kolkata, West Bengal",
      services: ["Diagnostics", "Cancer Care", "ICU"],
      phone: "033 2299 4411",
      type: "Diagnostics",
      location: "Kolkata",
    },
    {
      name: "Jaipur Health Point",
      rating: 3.8,
      address: "M.I. Road, Jaipur, Rajasthan",
      services: ["Surgery", "Cardiology", "Orthopedics"],
      phone: "0141 221 5555",
      type: "Private",
      location: "Jaipur",
    },
  ];

  const mapUrls = {
    Mumbai: "https://www.google.com/maps?q=Mumbai+hospital&output=embed",
    Delhi: "https://www.google.com/maps?q=Delhi+hospital&output=embed",
    Bangalore: "https://www.google.com/maps?q=Bangalore+hospital&output=embed",
    Hyderabad: "https://www.google.com/maps?q=Hyderabad+hospital&output=embed",
    Ahmedabad: "https://www.google.com/maps?q=Ahmedabad+hospital&output=embed",
    Chennai: "https://www.google.com/maps?q=Chennai+hospital&output=embed",
    Pune: "https://www.google.com/maps?q=Pune+hospital&output=embed",
    Kolkata: "https://www.google.com/maps?q=Kolkata+hospital&output=embed",
    Jaipur: "https://www.google.com/maps?q=Jaipur+hospital&output=embed",
    Surat: "https://www.google.com/maps?q=Surat+hospital&output=embed",
    "New York": "https://www.google.com/maps?q=New+York+hospital&output=embed",
  };

  const selectedMapUrl = mapUrls[location] || "https://www.google.com/maps?q=India+hospital&output=embed";

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesLocation = location ? hospital.location === location : true;
    const matchesType = type ? hospital.type === type : true;
    const matchesService = service ? hospital.services.includes(service) : true;
    const matchesRating = rating
      ? hospital.rating >= parseFloat(rating.replace("+", ""))
      : true;
    return matchesLocation && matchesType && matchesService && matchesRating;
  });

  return (
    <div className="hospital-finder">
      <div className="container">
        <h2 className="title">Find Hospitals Near You</h2>
        <p className="subtitle">
          Locate the best healthcare facilities in your area with our interactive map
        </p>

        <div className="filters">
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Surat">Surat</option>
            <option value="New York">New York</option>
          </select>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All Types</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Charitable">Charitable</option>
            <option value="Military">Military</option>
            <option value="Multispecialty">Multispecialty</option>
            <option value="Single Specialty">Single Specialty</option>
            <option value="Teaching">Teaching</option>
            <option value="Clinic">Clinic</option>
            <option value="Children">Children</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Diagnostics">Diagnostics</option>
          </select>

          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">All Services</option>
            <option value="Emergency">Emergency</option>
            <option value="Surgery">Surgery</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="ICU">ICU</option>
            <option value="Cancer Care">Cancer Care</option>
            <option value="Maternity">Maternity</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Mental Health">Mental Health</option>
          </select>

          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="3.0+">★ 3.0+</option>
            <option value="4.0+">★ 4.0+</option>
            <option value="4.5+">★ 4.5+</option>
          </select>

          <div className="filter-buttons">
            <button
              className="reset"
              onClick={() => {
                setLocation("");
                setType("");
                setService("");
                setRating("3.0+");
              }}
            >
              Reset
            </button>
            <button className="apply">Apply Filters</button>
          </div>
        </div>

        <div className="map-section">
          <div className="map">
            <iframe
              title="Hospital Map"
              className="map-iframe"
              src={selectedMapUrl}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="hospital-list">
            <h3 className="list-title">Nearby Hospitals</h3>
            {filteredHospitals.length === 0 ? (
              <p className="no-results">No hospitals found matching your filters.</p>
            ) : (
              filteredHospitals.map((hospital, i) => (
                <div key={i} className="hospital-card">
                  <div className="card-header">
                    <h4 className="hospital-name">{hospital.name}</h4>
                    <span className="hospital-type">{hospital.type}</span>
                  </div>
                  <div className="hospital-rating">★ {hospital.rating}</div>
                  <div className="hospital-address">{hospital.address}</div>
                  <div className="hospital-services">
                    Services: {hospital.services.join(", ")}
                  </div>
                  <div className="hospital-phone">{hospital.phone}</div>
                  <button className="details-button">Details</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalLocator;
