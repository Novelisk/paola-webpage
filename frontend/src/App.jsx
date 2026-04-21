import React from 'react';
import Header from './assets/components/layout/Header';
import Hero from './assets/sections/Hero';
import About from './assets/sections/About';
import Gallery from './assets/sections/Gallery';
import Projects from './assets/sections/Projects';
import Contact from './assets/sections/Contact';
import Footer from './assets/components/layout/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
