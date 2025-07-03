// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('MadeEase API Running');
});

app.use('/api/auth', require('./routes/authRoutes'));       // 🆕 Auth Routes
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/hospitals', require('./routes/hospitalRoutes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
