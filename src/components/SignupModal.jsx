import React, { useState } from 'react';

const SignupModal = ({ onClose, onSignUp }) => {
  const [activeTab, setActiveTab] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignUp = () => {
    if (email && password) {
      // Show success message
      setShowSuccess(true);
      
      // After 3 seconds, close modal and call onSignUp
      setTimeout(() => {
        setShowSuccess(false);
        onSignUp(email);
        onClose();
      }, 500);
    } else {
      alert('Please fill out both fields');
    }
  };

  // Styles
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(6px)',
    zIndex: 2000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const modalStyle = {
    background: 'linear-gradient(to bottom, #f0f8ff, #ffffff)',
    borderRadius: '24px',
    padding: '40px 40px 24px',
    width: '100%',
    maxWidth: '420px',
    height: '600px',
    textAlign: 'center',
    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: 'calc(50% - 320px)',
    right: 'calc(50% - 210px - 10px)',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 2100,
  };

  const tabSwitcherStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    marginBottom: '24px',
    overflow: 'hidden',
  };

  const tabButtonStyle = (isActive) => ({
    padding: '10px 24px',
    backgroundColor: isActive ? '#111827' : '#e5e7eb',
    color: isActive ? '#fff' : '#6b7280',
    border: 'none',
    fontWeight: 600,
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '14px',
    flex: 1
  });

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '6px',
    color: '#111827',
    maxWidth: '300px',
    marginInline: 'auto'
  };

  const subtextStyle = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '20px',
    maxWidth: '300px',
    marginInline: 'auto',
    lineHeight: '1.5'
  };

  const formWrapperStyle = {
    maxWidth: '300px',
    margin: '0 auto'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    margin: '10px 0',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const submitButton = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#111827',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginBottom: '16px'
  };

  const socialText = {
    fontSize: '0.85rem',
    color: '#6b7280',
    margin: '24px auto 10px',
    maxWidth: '300px'
  };

  const socialIconRow = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    maxWidth: '300px',
    margin: '0 auto'
  };

  const socialBtnStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  // Success message styles
  const successMessageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4000,
    animation: 'fadeIn 0.3s ease-in-out'
  };

  const successContentStyle = {
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px 50px',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1.1)',
    animation: 'popIn 0.4s ease-out',
    position: 'relative',
    top: '-5%'
  };

  const successIconStyle = {
    fontSize: '48px',
    color: '#10b981',
    marginBottom: '20px',
    animation: 'bounce 0.6s ease-in-out'
  };

  const successTextStyle = {
    fontSize: '22px',
    fontWeight: 600,
    color: '#111827',
    margin: 0
  };

  return (
    <>
      <div style={overlayStyle}>
        <button onClick={onClose} style={closeBtnStyle}>×</button>

        <div style={modalStyle}>
          <div>
            <div style={tabSwitcherStyle}>
              <button
                onClick={() => setActiveTab('signup')}
                style={tabButtonStyle(activeTab === 'signup')}
              >
                Sign up
              </button>
              <button
                onClick={() => setActiveTab('login')}
                style={tabButtonStyle(activeTab === 'login')}
              >
                Log in
              </button>
            </div>

            <h2 style={headingStyle}>
              {activeTab === 'signup' ? 'Sign up with email' : 'Log in with email'}
            </h2>
            <p style={subtextStyle}>
              Make a new doc to bring your words, data, and teams together. For free
            </p>

            <div style={formWrapperStyle}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
              />

              <div style={{
                height: '20px',
                textAlign: 'right',
                fontSize: '0.85rem',
                color: '#6b7280',
                marginBottom: activeTab === 'login' ? '16px' : '0',
                visibility: activeTab === 'login' ? 'visible' : 'hidden'
              }}>
                <a href="#">Forgot password?</a>
              </div>

              <button onClick={handleSignUp} style={submitButton}>
                {activeTab === 'signup' ? 'Get Started' : 'Log In'}
              </button>
            </div>
          </div>

          <div>
            <div style={socialText}>
              Or {activeTab === 'signup' ? 'sign up' : 'log in'} with
            </div>
            <div style={socialIconRow}>
              <button style={socialBtnStyle}>
                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" />
              </button>
              <button style={socialBtnStyle}>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" />
              </button>
              <button style={socialBtnStyle}>
                <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="Apple" width="20" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div style={successMessageStyle}>
          <div style={successContentStyle}>
            <div style={successIconStyle}>✓</div>
            <div style={successTextStyle}>You are successfully entered!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;