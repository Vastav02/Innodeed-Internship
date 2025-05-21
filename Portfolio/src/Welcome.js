import React, { useState } from 'react';

export default function Welcome() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: '#1e293b',
        padding: '3rem',
        textAlign: 'center',
        color: 'white',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 
        style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateY(-5px)' : 'none'
        }}
      >
        Welcome
      </h1>
      <hr style={{ 
        borderColor: '#94a3b8',
        width: isHovered ? '80%' : '60%',
        margin: 'auto',
        transition: 'width 0.3s ease'
      }} />
      <p style={{ 
        fontSize: '1.2rem', 
        marginTop: '1rem', 
        maxWidth: '800px', 
        marginInline: 'auto',
        lineHeight: '1.6',
        opacity: isHovered ? '1' : '0.9',
        transition: 'opacity 0.3s ease'
      }}>
        Hi, I'm <strong style={{ color: '#60a5fa' }}>Vastav Verma</strong> — a passionate software developer with a strong foundation in full-stack web development, Java, and cloud computing.
        I love building scalable, user-centric applications and continuously learning new technologies.
      </p>
    </div>
  );
}
