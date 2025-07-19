import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignupModal from './SignupModal';

const Header = ({ userEmail, setUserEmail }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // Close menu on route change

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', showModal);
    return () => document.body.classList.remove('modal-open');
  }, [showModal]);

  const handleSignUp = (email) => {
    setUserEmail(email);
  };

  const styles = {
    header: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
      fontFamily: 'Roboto, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      flexWrap: 'wrap',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      fontSize: '24px',
      color: '#1b3a57',
    },
    logoImg: {
      height: '40px',
      marginRight: '10px',
    },
    nav: {
      display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '20px',
      alignItems: isMobile ? 'flex-start' : 'center',
      fontSize: '16px',
      fontWeight: 600,
      marginTop: isMobile ? '10px' : 0,
      width: isMobile ? '100%' : 'auto',
    },
    navItem: {
      textDecoration: 'none',
      color: '#1b3a57',
    },
    rightSide: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      marginTop: isMobile ? '10px' : 0,
    },
    button: {
      backgroundColor: '#4a6cf7',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    outlineButton: {
      backgroundColor: 'transparent',
      color: '#4a6cf7',
      border: '2px solid #4a6cf7',
      borderRadius: '8px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#1b3a57',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src="/image/mainlogo.png" alt="Logo" style={styles.logoImg} />
          
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger} aria-label="Toggle Menu">
          ☰
        </button>

        <nav style={styles.nav}>
          <Link to="/" style={styles.navItem}>Home</Link>
          <Link to="/course" style={styles.navItem}>Courses</Link>
          <Link to="/specializations" style={styles.navItem}>Specializations</Link>
          <a href="#contact" style={styles.navItem}>Contact Us</a>
          <Link to="/about" style={styles.navItem}>About Us</Link>
        </nav>

        {!isMobile && (
          <div style={styles.rightSide}>
            <button style={styles.outlineButton}>Book a Demo</button>
            <button style={styles.button} onClick={() => !userEmail && setShowModal(true)}>
              {userEmail ? userEmail.substring(0, 5) : 'Signup'}
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ ...styles.rightSide, padding: '0 24px 12px' }}>
          <button style={styles.outlineButton}>Book a Demo</button>
          <button style={styles.button} onClick={() => !userEmail && setShowModal(true)}>
            {userEmail ? userEmail.substring(0, 5) : 'Signup'}
          </button>
        </div>
      )}

      {showModal && <SignupModal onClose={() => setShowModal(false)} onSignUp={handleSignUp} />}
    </header>
  );
};

export default Header;