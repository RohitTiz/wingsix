import React from 'react';

const SignupCTA = () => {
  return (
    <section
      style={{
        backgroundColor: '#27273c',
        padding: '40px 20px',
        borderRadius: '16px',
        maxWidth: '900px',
        margin: '50px auto',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '24px',
        }}
      >
        Sign Up Now So Your Selected Item Are Saved To Your Personal Cart.
      </h2>

      <form
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '528px', // 10% more than 480px
          margin: '0 auto',
          height: '54px',     // slightly taller
          padding: '0 12px 0 20px', // increased left/right padding
        }}
      >
        <input
          type="email"
          placeholder="Enter your Email"
          style={{
            flex: 1,
            padding: '0 10px',
            fontSize: '0.85rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            height: '34px',
            fontFamily: 'Roboto, sans-serif',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4338ca',
            color: 'white',
            fontWeight: '500',
            fontSize: '0.85rem',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            height: '34px',
            marginLeft: '10px',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Sign up now <span style={{ fontSize: '0.9rem' }}>↗</span>
        </button>
      </form>
    </section>
  );
};

export default SignupCTA;
