import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const circles = loaderRef.current.children;
    gsap.to(circles, {
      rotation: 360,
      transformOrigin: '50% 50%',
      repeat: -1,
      duration: 2,
      stagger: 0.2,
    });
    gsap.to(circles, {
      scale: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            margin: '0 5px',
            backgroundColor: '#008CBA',
            borderRadius: '50%',
          }}
        />
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
      <Loader />
    </div>
  );
};

export default App;
