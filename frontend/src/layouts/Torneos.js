import React from 'react';
import { Header } from '../layouts/Header';
import { SpaceCard } from '../components/SpaceCard';
import '../assets/styles/SpaceCard.css';

const spaces = [
  {
    name: "Cancha + Sala VIP",
    price: 180,
    location: "Complejo Deportivo Total",
    description: "Paquete fútbol 11 + salón para 50 personas"
  },
  {
    name: "Cowork Nocturno",
    price: 20,
    location: "WorkNight Center",
    description: "Acceso 18:00 - 06:00 (precio por hora)"
  },
  {
    name: "Habitación Weekend",
    price: 75,
    location: "Hotel Playa",
    description: "2 noches mínimo con spa gratuito"
  },
  {
    name: "Torneo Relámpago",
    price: 300,
    location: "Estadio Flash",
    description: "Alquiler 4 horas cancha + árbitro"
  },
  {
    name: "Evento Ejecutivo",
    price: 450,
    location: "Torre Negocios",
    description: "Sala + catering + proyector"
  },
  {
    name: "Cowork + Gym",
    price: 60,
    location: "Health Work Center",
    description: "Acceso día completo + gimnasio"
  },
  {
    name: "Paquete Familiar",
    price: 150,
    location: "Reserva Natural",
    description: "Habitación + actividades outdoor"
  },
  {
    name: "Oferta Estudiante",
    price: 15,
    location: "Cowork Universitario",
    description: "50% descuento con carnet"
  },
  {
    name: "Noche de Fútbol",
    price: 100,
    location: "Canchas Lumínicas",
    description: "2 horas + iluminación profesional"
  }
];
function Torneos() {
    return (
      <>
       <Header />
       <div className="spaces-container">
                       <h2 className="section-title">Espacios Disponibles</h2>
                       <div className="spaces-grid">
                         {spaces?.map((space, index) => ( // Validación opcional
                           <SpaceCard key={index} space={space} />
                         ))}
                       </div>
                     </div>
       </>
       
    );
  }
  
  export {Torneos};
  