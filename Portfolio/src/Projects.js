import React, { useState } from 'react';

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
        Projects
      </h2>
      <hr style={{ 
        borderColor: '#94a3b8',
        width: isHovered ? '100%' : '80%',
        transition: 'width 0.3s ease'
      }} />
      <ul style={{ 
        marginTop: '1rem', 
        fontSize: '0.95rem', 
        paddingLeft: '1rem',
        listStyle: 'none'
      }}>
        {[
          {
            icon: '🎨',
            href: 'https://github.com/Vastav02/Art-Gallery',
            text: 'Art Gallery Website (ReactJS, MongoDB)'
          },
          {
            icon: '🖐️',
            href: 'https://github.com/Vastav02/Gesture-Control-App-',
            text: 'Gesture Control App'
          },
          {
            icon: '🏥',
            href: 'https://github.com/Vastav02/Gfg',
            text: 'ETHICURE Health Manager (React + PHP + MySQL)'
          }
        ].map((project, index) => (
          <li 
            key={index}
            style={{
              marginBottom: '0.5rem',
              transition: 'all 0.3s ease',
              transform: hoveredItem === index ? 'translateX(10px)' : 'none',
              opacity: hoveredItem === null || hoveredItem === index ? 1 : 0.7
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {project.icon}{' '}
            <a 
              href={project.href}
              style={{
                color: hoveredItem === index ? '#60a5fa' : 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              {project.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
