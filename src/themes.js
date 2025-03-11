// src/themes.js

/**
 * Tema Claro - Paleta de colores y estilos
 */
export const lightTheme = {
    // Colores base
    background: "#ffffff",
    text: "#0a192f",
    primary: "#64ffda",
    secondary: "#007bff",
    error: "#ff4d4d",
  
    // Barra de navegación
    navbar: {
      background: "#f8f9fa",
      text: "#333333",
      accent: "#007bff",
      shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
    },
  
    // Formularios y entradas
    form: {
      background: "#f8f9fa",
      border: "#233554",
      inputBackground: "#e6f1ff",
      placeholder: "#8892b0",
    },
  
    // Tarjetas y contenedores
    card: {
      background: "#ffffff",
      border: "#e0e0e0",
    }
  };
  
  /**
   * Tema Oscuro - Paleta de colores y estilos
   */
  export const darkTheme = {
    // Colores base
    background: "#0a192f",
    text: "#e6f1ff",
    primary: "#64ffda",
    secondary: "#64ffda",
    error: "#ff6b6b",
  
    // Barra de navegación
    navbar: {
      background: "#1a1a1a",
      text: "#e6e6e6",
      accent: "#64ffda",
      shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
    },
  
    // Formularios y entradas
    form: {
      background: "#112240",
      border: "#64ffda",
      inputBackground: "#0a192f",
      placeholder: "#495670",
    },
  
    // Tarjetas y contenedores
    card: {
      background: "#112240",
      border: "#233554",
    }
  };
  
  // Tipografía consistente para ambos temas
  export const typography = {
    fontPrimary: "'SF Mono', monospace",
    fontSecondary: "'Segoe UI', sans-serif",
    sizes: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
    }
  };