import React from 'react';
import { Header } from '../layouts/Header';
import '../assets/styles/AboutUs.css';

function InfoNosotros() {
    return (
      <>
       <Header/>
        <div className="spotreserve-app">
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Transformando la forma de reservar espacios deportivos</h2>
          <p>Desde 2018 conectando a amantes del deporte con las mejores instalaciones</p>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="section about">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <div className="content-grid">
            <div className="text-content">
              <p>En SpotReserve, creemos que el deporte es más que una actividad física: es pasión, comunidad y superación personal. Nuestra plataforma nació para eliminar las barreras entre los deportistas y sus espacios ideales.</p>
              <p>Con tecnología innovadora y un equipo apasionado, hemos revolucionado la gestión de reservas deportivas en toda Latinoamérica.</p>
            </div>
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0" alt="Equipo SpotReserve" />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="historia" className="section history">
        <div className="container">
          <h2>Nuestra Historia</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2018</h3>
              <p>Fundación en Buenos Aires por ex deportistas profesionales</p>
            </div>
            <div className="timeline-item">
              <h3>2020</h3>
              <p>Lanzamiento de nuestra plataforma web y app móvil</p>
            </div>
            <div className="timeline-item">
              <h3>2022</h3>
              <p>Expansión a 5 países de Latinoamérica</p>
            </div>
            <div className="timeline-item">
              <h3>2024</h3>
              <p>+500,000 reservas mensuales en 3,000 instalaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="section values">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🏆 Pasión Deportiva</h3>
              <p>Vivimos y respiramos deporte en cada decisión que tomamos</p>
            </div>
            <div className="value-card">
              <h3>🤝 Comunidad</h3>
              <p>Creemos en el poder del deporte para unir personas</p>
            </div>
            <div className="value-card">
              <h3>💡 Innovación</h3>
              <p>Mejoramos constantemente nuestra tecnología para servirte mejor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 SpotReserve - Todos los derechos reservados</p>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
       </>
    );
  }
  
  export {InfoNosotros};
  