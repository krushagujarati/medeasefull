const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  gender: String,
  specialization: String,
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
  experience: Number,
  fees: Number,
  rating: Number,
  timings: [String],
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
