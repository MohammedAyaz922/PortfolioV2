import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Email from './components/Email';

function App() {
  return (
    <div className="bg-slate-900 text-slate-400 relative">
      <Navigation />
      <SocialLinks />
      <Email />
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-slate-400">
        <p>Designed & Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;