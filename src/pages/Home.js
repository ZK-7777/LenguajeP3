import React from 'react';
import videoBg from '../assets/video1.mp4';

const Home = () => {
  return (
    <section className="page home-page">
      {/* Contenedor del video con transparencia */}
      <div className="video-overlay">
        <video 
          className="background-video"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ opacity: 0.80 }} // Ajusta este valor para más/menos transparencia
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      {/* Contenido con fondo semitransparente */}
      <div className="hero-content">
        <div className="content-box">
          <h1>Bienvenidos</h1>
          <p className="highlight-text">Diseñador y desarrollador frontend</p>
        </div>
      </div>
    </section>
  );
};

export default Home;