// src/App.js
// import React from 'react';
// import Hero from './Components/hero';
// import About from './Components/About';
// import Skills from './Components/Skils';
// import Projects from './Components/Projects';
// import Experience from './Components/Experience';
// import Contact from './Components/Contact';
// import Header from './Components/Sidebar';
// import './App.css';
// import Footer from './Components/Footer';
// import { BrowserRouter as Router } from 'react-router-dom';
 
// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         {/* Main content section with padding to avoid overlap with header */}
//         <div className="pt-16">
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Experience />
//           <Contact />
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Hero from './Components/hero';
import About from './Components/About';
import Skills from './Components/Skils';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Header from './Components/Sidebar';
import './App.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure Router is included
import Certification from './Components/Certification';
 
function App() {
  return (
    <Router> {/* Wrap your app in BrowserRouter */}
      <div className="app-container">
        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          <section id="hero">
            <Hero />
          </section>
          <section id="about" className="pt-6">
            <About />
          </section>
          <section id="skills" className="pt-6">
            <Skills />
          </section>
          <section id="projects" className="pt-6">
            <Projects />
          </section>
          <section id="experience" className="pt-6">
            <Experience />
          </section>
          <section id="certificate"className="pt-6">
            <Certification/>
          </section>
          <section id="contact"className="pt-6">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
