import React from 'react';
import { Header } from '../layouts/Header';
import ImageWithText from '../components/ImageWithText';
import { SpaceCard } from '../components/SpaceCard';
import '../assets/styles/SpaceCard.css';

const spaces = [
  {
    name: "Suite Ejecutiva",
    price: 120,
    location: "Hotel Centro",
    description: "40 m² con escritorio ergonómico y jacuzzi"
  },
  {
    name: "Habitación Premium",
    price: 90,
    location: "Costa Diamante",
    description: "Vista al mar y desayuno buffet incluido"
  },
  {
    name: "Estancia Minimalista",
    price: 70,
    location: "Zona Histórica",
    description: "Diseño japonés con tatami y jardín zen"
  },
  {
    name: "Loft Industrial",
    price: 85,
    location: "Distrito Moda",
    description: "Techo de 5 metros y cocina integrada"
  },
  {
    name: "Habitación Familiar",
    price: 110,
    location: "Parque Natural",
    description: "4 camas y sala de juegos"
  },
  {
    name: "Suite Presidencial",
    price: 200,
    location: "Torre Luxor",
    description: "Servicio mayordomo y piscina privada"
  },
  {
    name: "Habitación Económica",
    price: 45,
    location: "Centro Urbano",
    description: "Wi-Fi rápido y limpieza diaria"
  },
  {
    name: "Cabaña Rústica",
    price: 80,
    location: "Área Montañosa",
    description: "Chimenea y terraza con vistas"
  },
  {
    name: "Habitación Temática",
    price: 95,
    location: "Barrio Cultural",
    description: "Decoración única por artistas locales"
  }
];

function Fut5() {
    return (
      <>
       <Header />    
       <ImageWithText
        src="https://casallasduque.com/wp-content/uploads/2022/03/LF-2021-remodelacion-apartamentos-en-bogota-habitacion-moderna-2.jpg"
        alt="ImgFut5"
        hoverText={
            <>
                <>  
                🛏️ Habitaciones: Tu refugio de confort y tranquilidad<br />  
                ✔️ Diseño acogedor: Decoración moderna y detalles que inspiran relajación.<br />  
                ✔️ Camas premium: Colchones ergonómicos y ropa de cama de alta calidad para un sueño reparador.<br />  
                ✔️ Tecnología integrada: Smart TV, Wi-Fi ultrarrápido y enchufes USB en zonas estratégicas.<br />  
                ✔️ Baño privado: Equipado con amenities de lujo y secador de pelo profesional.<br />  
                ✔️ Climatización perfecta: Aire acondicionado y calefacción ajustable para tu máximo confort.<br />  
                ✔️ Vistas impresionantes: Ventanales amplios con panorámicas a la ciudad, montaña o mar.<br />  
                ✔️ Servicio personalizado: Atención 24/7, limpieza diaria y opción a desayuno en la habitación.<br />  
                ¡Donde cada estancia se convierte en una experiencia inolvidable! 🌙✨  
            </>  
            </>
        }
      />
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
  
  export {Fut5};
  