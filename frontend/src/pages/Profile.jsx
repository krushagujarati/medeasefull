import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import "../styles/profile.css";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const user = auth?.user || {};
  const logout = auth?.logout || (() => {});

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);

  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [hospital, setHospital] = useState("");
  const [fees, setFees] = useState("");
  const [rating, setRating] = useState("");
  const [timings, setTimings] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("https://medeasefull.onrender.com/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const { user, profile } = res.data;

        setName(user.name || "");
        setEmail(user.email || "");
        setPhone(user.phone || "");

        if (user.role === "doctor") {
          setSpecialization(profile.specialization || "");
          setExperience(profile.experience || "");
          setHospital(profile.hospital || "");
          setFees(profile.fees || "");
          setRating(profile.rating || "");
          setTimings(profile.timings ? profile.timings.join(", ") : "");
        }

        if (user.role === "patient") {
          setAge(profile.age || "");
          setGender(profile.gender || "");
          setMedicalHistory(profile.medicalHistory ? profile.medicalHistory.join(", ") : "");
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to load profile", err);
        setLoading(false);
      }
    };

    if (token) fetchProfile();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSave = async () => {
    if (!name || !email || !phone) {
      alert("Name, Email, and Phone are required.");
      return;
    }

    try {
      const updatedFields = {
        name,
        email,
        phone,
        photo,
      };

      if (user.role === "doctor") {
        Object.assign(updatedFields, {
  specialization,
  experience,
  hospital,
  fees,
  rating,
  gender,
  timings: timings.split(" - ").map(t => t.trim()),
});

      }

      if (user.role === "patient") {
        Object.assign(updatedFields, {
          age,
          gender,
          medicalHistory: medicalHistory.split(",").map(m => m.trim()),
        });
      }

      await axios.put("https://medeasefull.onrender.com/api/auth/profile", updatedFields, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Profile updated!");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update profile.");
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (!user || !user.name) return <p>No user is logged in.</p>;

  const initials = user.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="profile-container">
      <div className="welcome-banner">
  {photo ? (
    <img
      src={photo}
      alt="Profile"
      className="profile-image"
    />
  ) : (
    <div className="default-icon">
      <FaUserCircle size={80} />
      <div className="initials">{initials}</div>
    </div>
  )}
  <div>
    <h1 className="welcome-text">Welcome, {name}!</h1>
    <p className="user-role">({user.role})</p>
  </div>
</div>




      <section className="edit-profile-section">
        <h2>Edit Profile</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="edit-profile-form"
        >
           <div className="form-group">
            <label>Upload Photo (optional)</label>
            <input
              type="text"
              placeholder="Photo URL"
              value={photo || ""}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {user.role === "doctor" && (
            <>
              <div className="form-group">
  <label>Specialization *</label>
  <input
    type="text"
    value={specialization}
    onChange={(e) => setSpecialization(e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label>Gender *</label>
  <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    required
  >
    <option value="">Select</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="other">Other</option>
  </select>
</div>

              <div className="form-group">
                <label>Experience (Years)</label>
                <input
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Hospital</label>
                <input
                  type="text"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Fees</label>
                <input
                  type="number"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <input
                  type="number"
                  step="0.1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="form-group">
  <label>Start Time *</label>
  <input
    type="time"
    value={timings?.split(" - ")[0] || ""}
    onChange={(e) =>
      setTimings((prev) =>
        `${e.target.value} - ${prev?.split(" - ")[1] || ""}`
      )
    }
    required
  />
</div>
<div className="form-group">
  <label>End Time *</label>
  <input
    type="time"
    value={timings?.split(" - ")[1] || ""}
    onChange={(e) =>
      setTimings((prev) =>
        `${prev?.split(" - ")[0] || ""} - ${e.target.value}`
      )
    }
    required
  />
</div>


            </>
          )}

          {user.role === "patient" && (
            <>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Medical History (comma separated)</label>
                <input
                  type="text"
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </section>

      <button onClick={handleLogout} className="btn btn-danger logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Profile;
