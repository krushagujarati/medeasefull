const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  phone: String,
  emergencyBeds: Number,
  ambulanceCharge: Number,
  roomCharge: Number,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);
