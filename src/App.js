import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Proveedor de temas
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import PersonalInfoForm from './components/PersonalInfoForm';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/perfil" element={<PersonalInfoForm />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;