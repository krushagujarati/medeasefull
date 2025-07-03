const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: Number,
  gender: String,
  medicalHistory: [String],
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
