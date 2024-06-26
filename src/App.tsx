import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextLoader = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.children;
    gsap.set(letters, { display: 'inline-block' });
    gsap.fromTo(
      letters,
      { y: 0, opacity: 0.5 },
      {
        y: -20,
        opacity: 1,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: 'power1.inOut',
      }
    );
    gsap.to(letters, {
      scale: 1.5,
      color: '#ff6347',
      duration: 1,
      yoyo: true,
      repeat: -1,
      stagger: 0.1,
    });
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
      }}
    >
      {'Loading...'.split('').map((letter, index) => (
        <span key={index} style={{ margin: '0 0.1rem' }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <TextLoader />
    </div>
  );
};

export default App;
