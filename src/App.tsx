import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedTitle = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.children;
    gsap.set(letters, { display: 'inline-block' });
    gsap.fromTo(
      letters,
      { y: 50, opacity: 0, scale: 0.5, color: '#000' },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        color: '#ff6347',
        stagger: 0.1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      }
    );
  }, []);

  return (
    <h1
      ref={titleRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '3rem',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
      }}
    >
      {'Welcome to My Page'.split('').map((letter, index) => (
        <span key={index} style={{ margin: '0 0.1rem' }}>
          {letter}
        </span>
      ))}
    </h1>
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
      <AnimatedTitle />
    </div>
  );
};

export default App;
