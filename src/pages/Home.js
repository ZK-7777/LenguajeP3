import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../assets/video1.mp4';

const Home = () => {
  return (
    <section className="page home-page">
      <div className="video-overlay">
        <video 
          className="background-video"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ opacity: 0.80 }}
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div className="content-box">
          <h1>Simulador de Portafolio Profesional</h1>
          <p className="highlight-text">
            Crea, personaliza y visualiza tu portafolio de proyectos de manera interactiva. 
            Ideal para desarrolladores, diseñadores y creativos.
          </p>
          
          {/* Redirige a /perfil */}
          <Link to="/perfil" className="start-button">
            Comenzar Ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;