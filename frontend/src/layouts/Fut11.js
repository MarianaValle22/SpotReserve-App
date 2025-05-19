import React from 'react';
import { Header } from '../layouts/Header';
import ImageWithText from '../components/ImageWithText';


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
       </>
    );
  }
  
  export {Fut11};
  