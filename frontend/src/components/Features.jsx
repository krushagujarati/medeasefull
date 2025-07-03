import React from "react";
import '../styles/features.css';


const featuresData = [
  {
    title: "Find Doctors",
    description: "Search and connect with top-rated healthcare professionals near you.",
    icon: "🩺",
  },
  {
    title: "Book Appointments",
    description: "Easily schedule your visits with a few clicks.",
    icon: "📅",
  },
  {
    title: "Track Visits",
    description: "Keep track of your medical history and appointments in one place.",
    icon: "📋",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
