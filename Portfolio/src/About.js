import React, { useState } from 'react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: '#334155',
        padding: '2rem',
        borderRadius: '10px',
        width: '300px',
        color: 'white',
        marginBottom: '1rem',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'none',
        boxShadow: isHovered ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 
        style={{ 
          fontSize: '1.8rem', 
          marginBottom: '0.5rem',
          color: isHovered ? '#60a5fa' : 'white',
          transition: 'color 0.3s ease'
        }}
      >
        About
      </h2>
      <hr style={{ 
        borderColor: '#94a3b8',
        width: isHovered ? '100%' : '80%',
        transition: 'width 0.3s ease'
      }} />
      <p style={{ 
        marginTop: '1rem', 
        fontSize: '0.95rem',
        lineHeight: '1.6',
        opacity: isHovered ? '1' : '0.9',
        transition: 'opacity 0.3s ease'
      }}>
        I'm <span style={{color: isHovered ? '#60a5fa' : 'white', transition: 'color 0.3s ease'}}>Vastav Verma</span>, 
        a B.Tech Computer Science student at VIT Bhopal with a passion for building smart, scalable applications. 
        Skilled in MERN stack, Java, Python, and cloud computing. I've led projects from web apps to gesture-based systems and hold an AWS certification. 
        Outside tech, I enjoy cricket, badminton, and community work.
      </p>
    </div>
  );
}
