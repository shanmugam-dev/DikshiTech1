import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Technologies from './components/Technologies.jsx';
import Industries from './components/Industries.jsx';
import Portfolio from './components/Portfolio.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Main single-page layout that stitches all sections together
const App = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Sticky navigation at the top */}
      <Navbar />

      {/* Sections with IDs used for smooth scrolling */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="technologies">
          <Technologies />
        </section>

        <section id="industries">
          <Industries />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;



