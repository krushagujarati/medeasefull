import React from 'react';
import '../styles/hospitalCard.css';

export default function HospitalCard({ hospital }) {
  const { name, address, phone, rating, imageUrl } = hospital;

  return (
    <div className="hospital-card">
      <img
        src={imageUrl || 'https://via.placeholder.com/300x150?text=Hospital+Image'}
        alt={name}
        className="hospital-image"
      />
      <h3 className="hospital-name">{name}</h3>
      <p className="hospital-address">{address}</p>
      <p className="hospital-phone">Phone: {phone}</p>
      <p className="hospital-rating">⭐ {rating?.toFixed(1) || 'N/A'}</p>
    </div>
  );
}
