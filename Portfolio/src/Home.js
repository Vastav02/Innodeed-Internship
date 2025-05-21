import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div style={{ background: '#0f172a', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <Welcome />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '2rem' }}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
