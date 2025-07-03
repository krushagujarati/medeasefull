import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import "../styles/doctorfinder.css";

const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Orthopedic",
  "Gynecologist",
  "ENT",
  "Ophthalmologist",
  "Dentist",
  "Psychiatrist",
];

const locations = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];

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

const ITEMS_PER_PAGE = 9;

const DoctorFinder = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    specialty: "",
    location: "",
    gender: "",
    rating: "",
    sortBy: "Highest Rated",
  });

  const [page, setPage] = useState(1);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    let filtered = allDoctors;

    if (filters.specialty) {
      filtered = filtered.filter((doc) => doc.specialty === filters.specialty);
    }
    if (filters.location) {
      filtered = filtered.filter((doc) => doc.location === filters.location);
    }
    if (filters.gender) {
      filtered = filtered.filter((doc) => doc.gender === filters.gender);
    }
    if (filters.rating) {
      filtered = filtered.filter((doc) => doc.rating >= parseFloat(filters.rating));
    }

    if (filters.sortBy === "Highest Rated") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === "Lowest Cost") {
      filtered.sort((a, b) => a.cost - b.cost);
    }

    setFilteredDoctors(filtered);
    setPage(1);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const pagedDoctors = filteredDoctors.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);

  return (
    <div className="doctor-finder">
      <h2>Find Doctors</h2>
      <p>Search for the best healthcare professionals in your area</p>

      <div className="filters">
        <select name="specialty" onChange={handleFilterChange}>
          <option value="">All Specialties</option>
          {specialties.map((sp, idx) => (
            <option key={idx} value={sp}>{sp}</option>
          ))}
        </select>

        <select name="location" onChange={handleFilterChange}>
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>

        <select name="gender" onChange={handleFilterChange}>
          <option value="">Any Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select name="rating" onChange={handleFilterChange}>
          <option value="">Any Rating</option>
          <option value="3">Above 3</option>
          <option value="4">Above 4</option>
          <option value="4.5">Above 4.5</option>
        </select>

        <select name="sortBy" onChange={handleFilterChange}>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Lowest Cost">Lowest Cost</option>
        </select>

        <button className="filter-button">Filter Results</button>
      </div>

      <div className="doctor-list">
        {pagedDoctors.length === 0 ? (
          <p className="no-results">No doctors found with current filters.</p>
        ) : (
          pagedDoctors.map((doc, idx) => (
            <div
              key={idx}
              className={`doctor-card ${doc.gender === 'Male' ? 'male-card' : 'female-card'}`}
              onClick={() => navigate(`/profile/${doc.id}`)}
            >
              <div className="avatar">{doc.name.charAt(4)}</div>
              <h4>{doc.name}</h4>
              <p>{doc.specialty}</p>
              <div className="info">
                <span><FaMapMarkerAlt /> {doc.location}</span>
                <span><FaClock /> {doc.experience}</span>
              </div>
              <div className="rating">
                <MdStar className="star" /> {doc.rating}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${doc.id}`);
                }}
              >
                Book Appointment
              </button>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
          <span>Page {page} of {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default DoctorFinder;
