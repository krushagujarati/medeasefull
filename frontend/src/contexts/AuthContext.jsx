import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

// Create context
export const AuthContext = createContext();

// ✅ Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage if present
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Simulated login (replace with real API)
  const login = async (email, password) => {
  const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  const token = res.data.token;
  localStorage.setItem("token", token);

  // Fetch full profile
  const profileRes = await axios.get("http://localhost:5000/api/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const fullUser = { ...res.data.user, profile: profileRes.data.profile };
  setUser(fullUser);
  return fullUser;
};


  // Simulated register (replace with real API)
  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone: "",
      photoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
    };
    setUser(newUser);
    return true;
  };

  // Logout user
  const logout = () => {
    setUser(null);
  };

  // Update user profile (email, phone, etc.)
  const updateUser = (updatedFields) => {
    setUser((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
