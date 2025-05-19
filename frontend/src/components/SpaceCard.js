// components/SpaceCard.jsx
import React from 'react';
import '../assets/styles/SpaceCard.css'; // Asegúrate de que la ruta sea correcta

export const SpaceCard = ({ space = {} }) => { // Valor por defecto para space
  return (
    <div className="space-card">
      <div className="card-content">
        <h3>{space.name || 'Nombre no disponible'}</h3>
        <p className="price">${space.price || '--'} por hora</p>
        <p className="location">📍 {space.location || 'Ubicación no disponible'}</p>
      </div>
      <div className="card-overlay">
        <div className="overlay-content">
          <p>{space.description || 'Descripción no disponible'}</p>
          <button className="reserve-btn">Reservar ahora</button>
        </div>
      </div>
    </div>
  );
};