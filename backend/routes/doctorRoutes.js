const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// Create doctor
router.post('/', async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('hospital');
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
