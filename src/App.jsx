import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
    </>
  );

}

export default App;
 {/*<BrowserRouter>
      <Routes>
        <Route path="/tiago" element={<Education />} />
        </Routes>
        </BrowserRouter>*/}