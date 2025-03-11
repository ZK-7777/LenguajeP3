import React, { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload,
  FaFacebook, 
  FaInstagram,
  FaUserCircle
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Switch from 'react-switch';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="logo">
        <span className="logo-text">HOME</span>
      </NavLink>

      {/* Contenedor completo (enlaces + acciones) */}
      <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        {/* Enlaces de navegación */}
        <div className="nav-links">
          <NavLink 
            to="/proyectos" 
            className={({ isActive }) => 
              `nav-link ${isActive ? "nav-link--active" : ""}`
            }
          >
            Proyectos
          </NavLink>

          <NavLink 
            to="/sobre-mi" 
            className={({ isActive }) => 
              `nav-link ${isActive ? "nav-link--active" : ""}`
            }
          >
            Sobre mí
          </NavLink>

          <NavLink 
            to="/contacto" 
            className={({ isActive }) => 
              `nav-link ${isActive ? "nav-link--active" : ""}`
            }
          >
            Contacto
          </NavLink>

          <NavLink 
            to="/perfil" 
            className={({ isActive }) => 
              `nav-link ${isActive ? "nav-link--active" : ""}`
            }
          >
            Mi Perfil
          </NavLink>
        </div>

        {/* Redes sociales y botones */}
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
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>

          <div className="action-buttons">
            <div className="theme-toggle" style={{ marginTop: '10px' }}>
              <Switch
                onChange={toggleTheme}
                checked={theme === 'dark'}
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 12,
                      color: "#fff",
                      paddingRight: 2,
                    }}
                  >
                    🌙
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 12,
                      color: "#fff",
                      paddingRight: 2,
                    }}
                  >
                    ☀️
                  </div>
                }
                height={20}
                width={40}
                handleDiameter={18}
                offColor="#888"
                onColor="#64ffda"
                activeBoxShadow="0 0 2px 3px #64ffda"
              />
            </div>
            
            <button className="login-button">
              <FaUserCircle className="login-icon" />
              Login
            </button>
            <button className="cv-button">
              <FaFileDownload className="cv-icon" />
              Descargar CV
            </button>
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

//Prueba de ver si da o no, no sé tal vez