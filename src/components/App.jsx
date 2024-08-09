import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/education/Education';
import Navbar from './components/navbar/Navbar';
import Rehabilitacion from './components/rehabilitacion/Rehabilitacion';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrenador-online" element={<Education/>} />
        <Route path="/rehabilitación" element={<Rehabilitacion/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

