import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const HeroSectionWithMenu = () => {
  const menuRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const menuItems = menuRef.current.children;
    gsap.fromTo(
      menuItems,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.1 }
    );

    gsap.fromTo(
      backgroundRef.current,
      { backgroundPosition: '0% 50%' },
      {
        backgroundPosition: '100% 50%',
        duration: 20,
        ease: 'linear',
        repeat: -1,
      }
    );

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power2.out', delay: 1 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power2.out', delay: 1.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power2.out', delay: 2 }
    );
  }, []);

  const handleMouseEnterButton = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: '#ff4500',
      boxShadow: '0px 0px 20px rgba(255, 69, 0, 0.5)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeaveButton = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: '#ff6347',
      boxShadow: '0px 0px 0px rgba(255, 69, 0, 0)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
    gsap.fromTo(
      modalContentRef.current,
      { y: -200, opacity: 0, rotation: -360 },
      { y: 0, opacity: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
    );
  };

  const handleCloseModal = () => {
    gsap.to(modalContentRef.current, {
      y: 200,
      opacity: 0,
      rotation: 360,
      duration: 1,
      ease: 'back.in(1.7)',
      onComplete: () => setIsModalOpen(false),
    });
  };

  const handleMouseEnterMenuItem = e => {
    gsap.to(e.target, {
      scale: 1.2,
      color: '#ff4500',
      textDecoration: 'underline',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeaveMenuItem = e => {
    gsap.to(e.target, {
      scale: 1,
      color: '#fff',
      textDecoration: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div>
      <nav
        ref={menuRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px 0',
          zIndex: 1000,
        }}
      >
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onMouseEnter={handleMouseEnterMenuItem}
            onMouseLeave={handleMouseLeaveMenuItem}
            style={{
              margin: '0 15px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <section
        ref={backgroundRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundImage: 'url(https://via.placeholder.com/1920x1080)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 50%',
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#fff',
            margin: 0,
          }}
        >
          Welcome to My Page
        </h1>
        <p
          ref={subtitleRef}
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            margin: '20px 0',
          }}
        >
          This is a grandiose hero section with stunning animations.
        </p>
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnterButton}
          onMouseLeave={handleMouseLeaveButton}
          onClick={handleButtonClick}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#ff6347',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          Get Started
        </button>
      </section>
      {isModalOpen && (
        <div
          ref={modalRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <div
            ref={modalContentRef}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '80%',
              maxWidth: '500px',
              position: 'relative',
              cursor: 'default',
            }}
            onClick={e => e.stopPropagation()}
          >
            <h2>Modal Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
            <button
              onClick={handleCloseModal}
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: '#ff6347',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HeroSectionWithMenu />
    </div>
  );
};

export default App;
