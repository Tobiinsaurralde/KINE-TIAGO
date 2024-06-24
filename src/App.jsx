import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/tiago" element={<Education />} />
        </Routes>
        </BrowserRouter>
    <>
      <Navbar />
      <About />
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
    </>
   
  </div>
  );

}

export default App;
