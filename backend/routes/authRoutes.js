// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    // ✅ Create related doctor or patient profile
   
    // Update doctor profile
    if (user.role === "doctor") {
      const {
        specialization,
        experience,
        hospital,
        fees,
        rating,
        timings,
        gender
      } = req.body;

      let doctor = await Doctor.findOne({ user: userId });
      if (!doctor) doctor = new Doctor({ user: userId });

      if (specialization) doctor.specialization = specialization;
      if (experience) doctor.experience = experience;
      if (hospital) doctor.hospital = hospital;
      if (fees) doctor.fees = fees;
      if (rating) doctor.rating = rating;
      if (gender) doctor.gender = gender;
      if (timings) doctor.timings = timings;

      await doctor.save();
    }
    if (role === 'patient') {
      await Patient.create({
        user: newUser._id,
        age: 0,
        gender: '',
        medicalHistory: []
      });
    }

    // ✅ JWT Token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      token,
      user: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Signup failed' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Make sure email is a string
    if (typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid credentials format' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Login failed due to server error' });
  }
});

// ✅ Get Profile Route
router.get('/profile', authMiddleware, async (req, res) => {
  const user = req.user;
  let profile = null;

  if (user.role === 'doctor') {
    profile = await Doctor.findOne({ user: user._id }).populate('hospital');
  } else if (user.role === 'patient') {
    profile = await Patient.findOne({ user: user._id });
  }

  res.json({ user, profile });
});


// ✅ Update User Profile
// ✅ Update User Profile (User + Doctor/Patient)
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const { email, phone, specialization, experience, age, gender } = req.body;

    // Update User
    const updatedUser = await User.findByIdAndUpdate(user._id, { email, phone }, { new: true });

    // Update Doctor or Patient based on role
    if (user.role === 'doctor') {
      await Doctor.findOneAndUpdate({ user: user._id }, { specialization, experience });
    } else if (user.role === 'patient') {
      await Patient.findOneAndUpdate({ user: user._id }, { age, gender });
    }

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});



module.exports = router;
