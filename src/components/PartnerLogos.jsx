import React from 'react';

const logos = [
  { src: 'partnerlogo/googlelogo.png', alt: 'Google' },
  { src: '/partnerlogo/cambridge.png', alt: 'Cambridge' },
  { src: '/partnerlogo/stanford.png', alt: 'Stanford' },
  { src: '/partnerlogo/profesional.png', alt: 'Professional Academy' },
  { src: '/partnerlogo/openstack.png', alt: 'OpenStax' },
  { src: '/partnerlogo/mit.png', alt: 'MIT' },
  { src: '/partnerlogo/microsoft.png', alt: 'Microsoft' },
];

const PartnerLogos = () => {
  return (
    <section style={{ background: '#f7fafc', padding: '50px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '30px', color: '#333' ,fontFamily:'roboto' }}>
        Learn From The World's Leading Experts
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        alignItems: 'center',
      }}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{ height: '40px', objectFit: 'contain' }}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
