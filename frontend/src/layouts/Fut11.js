
import React from 'react';
import { Header } from '../layouts/Header';
import ImageWithText from '../components/ImageWithText';
import { SpaceCard } from '../components/SpaceCard';
import '../assets/styles/SpaceCard.css'; // Asegúrate de que la ruta sea correcta

  const spaces = [
    {
      name: "Campo Elite",
      price: 120,
      location: "Centro Deportivo Norte",
      description: "Cancha profesional con césped natural y vestuarios"
    },
    {
      name: "Estadio Moderno",
      price: 150,
      location: "Complejo Deportivo Sur",
      description: "Iluminación LED y gradas para 200 espectadores"
    },
    {
      name: "Arena Futbolera",
      price: 100,
      location: "Zona Deportiva Este",
      description: "Superficie sintética de última generación"
    },
    {
      name: "Cancha Premier",
      price: 130,
      location: "Parque Central",
      description: "Vestuarios premium y sistema de sonido"
    },
    {
      name: "Estrella Deportiva",
      price: 110,
      location: "Polideportivo Oeste",
      description: "Césped híbrido y parking gratuito"
    },
    {
      name: "Fútbol City",
      price: 90,
      location: "Distrito Deportivo",
      description: "3 canchas disponibles simultáneamente"
    },
    {
      name: "Gol Perfecto",
      price: 140,
      location: "Complejo Olímpico",
      description: "Medidas FIFA y marcador electrónico"
    },
    {
      name: "La Fortaleza",
      price: 160,
      location: "Área Premium Norte",
      description: "Sector VIP y cafetería incluida"
    },
    {
      name: "Deportes Total",
      price: 95,
      location: "Zona Residencial Sur",
      description: "Ideal para torneos y eventos"
    }
  ];

function Fut11() {


    return (
      <>
       <Header />
       <ImageWithText
        src="https://campus.velezsarsfield.com.ar/media/2021/09/01-04_deportes_244-1024x556.jpg"
        alt="ImgFut5"
        hoverText={
            <>
                ⚽ Cancha de Fútbol: El escenario de los profesionales<br />
                ✔️ Dimensiones épicas: Espacio ideal para estrategias amplias y despliegue táctico.<br />
                ✔️ Superficie de élite: Césped natural o sintético de alta calidad para un juego fluido y profesional.<br />
                ✔️ Porterías reglamentarias: reto y emoción como en los grandes estadios.<br />
                ✔️ Iluminación profesional: Sistema LED para partidos nocturnos con visibilidad impecable.<br />
                ✔️ Gradas y comodidad: Espacio para espectadores y banquillos técnicos.<br />
                ¡Donde el fútbol se vive a lo grande! 🌍🏟️
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
  
  export {Fut11};
  