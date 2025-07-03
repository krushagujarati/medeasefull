// src/pages/Home.jsx
import React from 'react';

import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';
import TopSpecialties from '../components/TopSpecialties';





const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      
      <Hero />
      <TopSpecialties/>
      
      <HowItWorks />
      <Testimonial />
      
    </div>
  );
};

export default Home;
