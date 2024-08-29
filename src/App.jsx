import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Navbar from './components/navbar/Navbar';
import Blog from './components/blog/blog'
import EntrenamientoIsometrico from './components/blog/entrenamientoisometrico'
import ScrollToTop from './components/scroll';
function App() {
  return (
    <Router>
        <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrenador-online/" element={<Education/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about#contact" element={<About/>} />
        <Route path="/entrenamiento-isometrico" element={<EntrenamientoIsometrico/>} />

      </Routes>
    </Router>
  );
}

export default App;

