import React, { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload,
  FaFacebook, 
  FaInstagram,
  FaUserCircle  // Nuevo ícono para login
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <span className="logo-text">HOME</span>
      </Link>

      {/* Enlaces desktop */}
      <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <Link to="/proyectos" className="nav-link">Proyectos</Link>
          <Link to="/sobre-mi" className="nav-link">Sobre mí</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </div>

        {/* Acciones: redes, CV y Login */}
        <div className="nav-actions">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
          <div className="action-buttons">
            <button className="login-button">
              <FaUserCircle className="login-icon" />
              Login
            </button>
            <a 
              href="/tu-cv.pdf" 
              download 
              className="cv-button"
            >
              <FaFileDownload className="cv-icon" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* Menú hamburguesa (mobile) */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;