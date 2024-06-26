import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedTitleWithBackground = () => {
  const titleRef = useRef(null);
  const backgroundRef = useRef(null);

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

    gsap.to(backgroundRef.current, {
      backgroundColor: '#1e90ff',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '3rem',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
        backgroundColor: '#ff6347',
        transition: 'background-color 1s ease',
      }}
    >
      <h1 ref={titleRef}>
        {'Welcome to My Page'.split('').map((letter, index) => (
          <span key={index} style={{ margin: '0 0.1rem' }}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <AnimatedTitleWithBackground />
    </div>
  );
};

export default App;
