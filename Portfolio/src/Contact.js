import React, { useState } from 'react';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const contactItems = [
    { icon: '📧', type: 'Email', value: 'vastavverma@gmail.com', href: 'mailto:vastavverma@gmail.com' },
    { icon: '💼', type: 'LinkedIn', value: 'linkedin.com/in/vastavverma', href: 'https://linkedin.com/in/vastavverma' },
    { icon: '💻', type: 'GitHub', value: 'github.com/vastav02', href: 'https://github.com/vastav02' }
  ];

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
        Contact
      </h2>
      <hr style={{ 
        borderColor: '#94a3b8',
        width: isHovered ? '100%' : '80%',
        transition: 'width 0.3s ease'
      }} />
      <div style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
        {contactItems.map((item, index) => (
          <a 
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: hoveredItem === index ? '#60a5fa' : 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              transform: hoveredItem === index ? 'translateX(10px)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span>{item.type}: {item.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
