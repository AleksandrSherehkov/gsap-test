import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ComplexLoader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const stripes = loaderRef.current.children;
    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(stripes, { transformOrigin: '50% 50%' });

    tl.to(stripes, {
      rotation: 360,
      duration: 3,
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1,
      },
    });

    gsap.to(stripes, {
      scaleY: 2,
      backgroundColor: '#ff6347',
      duration: 1,
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
    });

    gsap.to(stripes, {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
    });

    gsap.to(stripes, {
      scaleX: 0.5,
      duration: 1,
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
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
            width: '10px',
            height: '40px',
            margin: '0 5px',
            backgroundColor: '#008CBA',
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
