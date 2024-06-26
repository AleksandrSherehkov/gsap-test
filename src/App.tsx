import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ComplexLoader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const circles = loaderRef.current.children;
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(circles, {
      rotation: 360,
      transformOrigin: '50% 50%',
      duration: 2,
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1,
      },
    });

    gsap.to(circles, {
      scale: 1.5,
      backgroundColor: '#ff6347',
      duration: 1,
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
    });

    gsap.to(circles, {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
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
        position: 'relative',
      }}
    >
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            margin: '0 5px',
            backgroundColor: '#008CBA',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${
              index * 60
            }deg) translate(50px)`,
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
      <ComplexLoader />
    </div>
  );
};

export default App;
