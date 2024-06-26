import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slides = sliderRef.current.children;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    for (let i = 0; i < slides.length; i++) {
      tl.to(slides[i], { opacity: 1, duration: 1 }).to(
        slides[i],
        { opacity: 0, duration: 1 },
        '+=2'
      );
    }
  }, []);

  return (
    <div
      ref={sliderRef}
      style={{
        position: 'relative',
        width: '600px',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
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
      <ImageSlider />
    </div>
  );
};

export default App;
