import React, { useEffect, useRef } from 'react';

// Custom Cursor Component
const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const followMouse = () => {
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      if (circle) {
        circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;
      }

      requestAnimationFrame(followMouse);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followMouse);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 114, 255, 0.15)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#0072ff',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
};

// Main Hero Section
const HeroSection = () => {
  return (
    <section style={styles.container} className="hero-container">
      <CustomCursor />

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hero-container {
              flex-direction: column;
              padding: 40px 20px;
            }

            .hero-left {
              align-items: center;
              text-align: center;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-image-wrapper {
              width: 100%;
              max-width: 350px;
              margin-top: 40px;
              scale: 0.95;
            }

            .decor-group {
              transform: scale(0.85);
              top: 0;
              left: 0;
            }
          }
        `}
      </style>

      {/* Left Section */}
      <div style={styles.leftContent} className="hero-left">
        <h1 style={{ ...styles.line, animation: 'fadeInUp 0.6s ease-out' }}>
          Find Your <span style={styles.ideal}>Ideal</span>
        </h1>
        <h1 style={{ ...styles.line, animation: 'fadeInUp 0.7s ease-out' }}>Course, Build</h1>
        <h1 style={{ ...styles.skillsLine, animation: 'fadeInUp 0.8s ease-out' }}>Skills</h1>

        <p style={{ ...styles.description, animation: 'fadeInUp 0.9s ease-out' }}>
          Welcome to EduAll, where learning begins for every professional and lifelong learner.
        </p>

        <div style={styles.buttonGroup} className="hero-buttons">
          <button
            style={styles.primary}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Browse Courses ↗
          </button>
          <button
            style={styles.secondary}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5faff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            About Us ↗
          </button>
        </div>
      </div>

      {/* Right Section - Images with Decorations */}
      <div style={styles.imageWrapper} className="hero-image-wrapper">
        <img src="/image/main.png" alt="Hero" style={styles.heroImage} />
        <div style={styles.decorGroup} className="decor-group">
          <img src="/heroimage/triangle.png" alt="Triangle" style={{ ...styles.decorImage1, animation: 'float 4s ease-in-out infinite' }} />
          <img src="/heroimage/Button.png" alt="Button" style={{ ...styles.decorImage2, animation: 'float 5s ease-in-out infinite' }} />
          <img src="/heroimage/enrolledstudents.png" alt="Enrolled" style={{ ...styles.decorImage3, animation: 'float 3.5s ease-in-out infinite' }} />
          <img src="/heroimage/curlyarrow.png" alt="Curly Arrow" style={{ ...styles.decorImage4, animation: 'float 6s ease-in-out infinite' }} />
          <img src="/heroimage/off.png" alt="20% Off" style={{ ...styles.decorImage5, animation: 'float 4.5s ease-in-out infinite' }} />
          <img src="/heroimage/books.png" alt="Books" style={{ ...styles.decorImage6, animation: 'float 3s ease-in-out infinite' }} />
          <img src="/heroimage/gird.png" alt="Grid" style={{ ...styles.decorImage7, animation: 'float 4s ease-in-out infinite' }} />
        </div>
        
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottom: '1.5px solid #EEF0F3',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '60px 80px',
    boxSizing: 'border-box',
    gap: '40px',
    overflow: 'hidden',
  },
  leftContent: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  line: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '48px',
    color: '#1B2A41',
    margin: 0,
  },
  skillsLine: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '48px',
    color: '#2D82D2',
    marginBottom: '24px',
  },
  ideal: {
    color: '#FF4A4A',
  },
  description: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    color: '#555',
    lineHeight: '26px',
    marginBottom: '30px',
    maxWidth: '500px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  primary: {
    backgroundColor: '#0072ff',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#0072ff',
    border: '1.5px solid #0072ff',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  imageWrapper: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    zIndex: 1,
  },
  decorGroup: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 2,
  },
  decorImage1: { position: 'absolute', top: '10%', right: '10%', width: '60px' },
  decorImage2: { position: 'absolute', top: '45%', right: '3%', width: '120px' },
  decorImage3: { position: 'absolute', top: '-5%', left: '45%', width: '160px' },
  decorImage4: { position: 'absolute', top: '20%', left: '5%', width: '90px' },
  decorImage5: { position: 'absolute', top: '55%', left: '50%', width: '180px' },
  decorImage6: { position: 'absolute', bottom: '5%', left: '80%', width: '50px' },
  decorImage7: { position: 'absolute', bottom: '0%', left: '0%', width: '60px' },
};

export default HeroSection;
