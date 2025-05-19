import React from 'react';
import { Header } from '../layouts/Header';
import ImageWithText from '../components/ImageWithText';
import { SpaceCard } from '../components/SpaceCard';
import '../assets/styles/SpaceCard.css';

const spaces = [
  {
    name: "WorkHub Premium",
    price: 50,
    location: "Centro Financiero",
    description: "Escritorios privados y salas de reuniones 4K"
  },
  {
    name: "Innovation Space",
    price: 40,
    location: "Parque Tecnológico",
    description: "Zona maker con impresoras 3D"
  },
  {
    name: "Nómada Digital",
    price: 30,
    location: "Zona Bohemia",
    description: "Terraza con vistas al mar y café ilimitado"
  },
  {
    name: "Executive Lounge",
    price: 70,
    location: "Torre Corporativa",
    description: "Acceso 24/7 y servicio de secretaría"
  },
  {
    name: "Green Cowork",
    price: 35,
    location: "Eco Distrito",
    description: "Espacios con jardines verticales y energía solar"
  },
  {
    name: "Startup Factory",
    price: 45,
    location: "Polígono Industrial Sur",
    description: "Mentorías incluidas y networking semanal"
  },
  {
    name: "Silent Working",
    price: 40,
    location: "Zona Residencial Oeste",
    description: "Ambiente ultra silencioso y cabinas privadas"
  },
  {
    name: "Creative Lab",
    price: 55,
    location: "Distrito Diseño",
    description: "Pantallas interactivas y equipo creativo"
  },
  {
    name: "Urban Station",
    price: 25,
    location: "Centro Transportes",
    description: "Acceso por horas con locker incluido"
  }
];
function Fut7() {
    return (
      <>
       <Header />
              <ImageWithText
        src="https://magazine.caser.es/wp-content/uploads/2024/08/444-825x483.jpg"
        alt="ImgFut5"
        hoverText={
            <>
            <>  
                🚀 Espacio de Coworking: Donde la productividad se encuentra con la innovación<br />  
                ✔️ Diseño moderno y funcional: Zonas de trabajo abiertas, privadas y salas de reuniones equipadas.<br />  
                ✔️ Flexibilidad total: Planes por horas, días o meses, adaptados a freelancers, startups y empresas.<br />  
                ✔️ Conectividad de alta velocidad: Internet ultrarrápido y red Wi-Fi segura para trabajo sin límites.<br />  
                ✔️ Amenidades premium: Cafetería gourmet, impresoras 3D, lockers y áreas de descanso con sofás.<br />  
                ✔️ Comunidad activa: Eventos, talleres y networking para potenciar tus proyectos y contactos.<br />  
                ✔️ Ambiente inspirador: Iluminación natural, plantas y decoración minimalista para maximizar tu creatividad.<br />  
                ✔️ Soporte 24/7: Acceso seguro en horarios extendidos y atención personalizada.<br />  
                ¡Donde las ideas crecen y los negocios despegan! 💡✨  
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
  
  export {Fut7};
  