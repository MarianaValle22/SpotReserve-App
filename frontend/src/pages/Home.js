import React from 'react';
import { Header } from '../layouts/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/styles/Carousel.css'





function Home() {
    
  return (
    <>
     <Header />
     <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
      >
        <div>
          <img src="https://sport-12.com/wp-content/uploads/2020/07/Fut8Fut11-Deportivo-Hacienda-scaled.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="https://civideportes.com.co/wp-content/uploads/2019/08/Cancha-de-f%C3%BAtbol-11.jpg" alt="Imagen 2" />
        </div>
        <div>
          <img src="https://noticias2020.uniquindio.edu.co/wp-content/uploads/2019/03/cancha-de-futbol-11.jpg" alt="Imagen 3" />
        </div>
        <div>
          <img src="https://sport-12.com/wp-content/uploads/2020/07/Fut11_Deportivo-Mixihuca-scaled.jpg" alt="Imagen 4" />
        </div>
      </Carousel>
      
     </>
  );
}

export {Home};
