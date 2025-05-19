import React from 'react';
import { Header } from '../layouts/Header';
import ImageWithText from '../components/ImageWithText';
import { SpaceCard } from '../components/SpaceCard';
import '../assets/styles/SpaceCard.css';

const spaces = [
  {
    name: "Salón de Fiestas Elite",
    price: 200,
    location: "Centro de Eventos Norte",
    description: "Capacidad para 150 personas con sistema de sonido profesional"
  },
  {
    name: "Glamour Events",
    price: 180,
    location: "Zona Premium Sur",
    description: "Iluminación inteligente y cocina equipada"
  },
  {
    name: "Palacio de Celebraciones",
    price: 250,
    location: "Distrito Central",
    description: "600 m² con pista de baile y lounge VIP"
  },
  {
    name: "Salón Versátil",
    price: 150,
    location: "Área Residencial Este",
    description: "Ideal para bodas y eventos corporativos"
  },
  {
    name: "Espacio Creativo",
    price: 170,
    location: "Polígono Industrial Oeste",
    description: "Techo alto y divisores modulares"
  },
  {
    name: "Grand Ballroom",
    price: 300,
    location: "Centro Histórico",
    description: "Estilo clásico con capacidad para 300 personas"
  },
  {
    name: "Sky Lounge",
    price: 220,
    location: "Torre Negocios",
    description: "Vistas panorámicas y terraza exterior"
  },
  {
    name: "Salón Multiusos",
    price: 130,
    location: "Zona Universitaria",
    description: "Equipo audiovisual incluido"
  },
  {
    name: "Jardín de Eventos",
    price: 190,
    location: "Área Verde Norte",
    description: "Espacio interior-exterior con decoración natural"
  }
];
function Fut8() {
    return (
      <>
       <Header />
              <ImageWithText
        src="https://teusaquilloplaza.com/wp-content/uploads/2024/02/Salones-de-eventos-bogota-salon-Victoria-Teusaquillo-plaza-1024x683.webp"
        alt="ImgFut5"
        hoverText={
            <>
                <>  
                🎉 Salón de Eventos: El espacio perfecto para tus celebraciones<br />  
                ✔️ Amplias dimensiones: Capacidad adaptable para reuniones íntimas o fiestas grandes.<br />  
                ✔️ Diseño elegante: Pisos impecables, iluminación ambiental y decoración versátil.<br />  
                ✔️ Tecnología integrada: Sistema de sonido profesional y pantallas para presentaciones o música.<br />  
                ✔️ Zonas diferenciadas: Área de baile, lounge de descanso y espacio para catering.<br />  
                ✔️ Comodidad garantizada: Aire acondicionado, asientos ergonómicos y estacionamiento privado.<br />  
                ✔️ Personalización total: Opciones de temáticas, luces LED y montaje según tu estilo.<br />  
                ¡Donde los momentos se convierten en recuerdos inolvidables! 🌟🎶  
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
  
  export {Fut8};