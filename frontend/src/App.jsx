import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorFinder from './pages/DoctorFinder';
import Booking from './pages/Booking';
import HospitalLocator from './pages/HospitalLocator';
import Login from './pages/Login';
import Signup from './pages/signup';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Aboutus from './pages/about';
//import Profile from './pages/Profile';
import HospitalEmbed from './components/hospitalembed';
import NotFound from './pages/NotFound';

//import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.css';
import DoctorProfile from './components/Docprofile';
import AppointmentPage from './pages/appointment';




export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorFinder />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/hospitals" element={<HospitalLocator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/profile/:id" element={<DoctorProfile />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/hospitalembed" element={<HospitalEmbed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
