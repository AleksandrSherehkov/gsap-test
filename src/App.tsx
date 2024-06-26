import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Fireworks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const particles = containerRef.current.children;
    const numParticles = particles.length;

    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      const x = Math.cos(angle) * 100;
      const y = Math.sin(angle) * 100;

      gsap.fromTo(
        particles[i],
        { x: 0, y: 0, opacity: 1 },
        {
          x: x,
          y: y,
          opacity: 0,
          duration: 2,
          ease: 'power1.out',
          repeat: -1,
          repeatDelay: 1,
          delay: i * 0.1,
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Fireworks />
    </div>
  );
};

export default App;
