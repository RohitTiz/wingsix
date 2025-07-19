import React from 'react';

const Footer = () => {
  // Main footer container style
  const footerStyle = {
    backgroundColor: '#0D1117',
    color: '#ffffff',
    padding: '60px 30px 20px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
  };

  // Grid container for top section with columns
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  };

  // Column title style
  const columnTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '12px',
    fontSize: '15px',
  };

  // Link style inside columns
  const linkStyle = {
    marginBottom: '8px',
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    fontSize: '13px',
  };

  // Bottom row: social links, terms, etc.
  const bottomRowStyle = {
    borderTop: '1px solid #333',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#888',
    rowGap: '20px',
  };

  // Left bottom: copyright, legal links
  const leftBottomStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  // Right bottom: social icons and store badges
  const rightBottomStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  };

  // Style for app store icons
  const storeIconStyle = {
    height: '32px',
  };

  return (
    <footer style={footerStyle}>
      {/* Responsive styles for mobile */}
      <style>{`
        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-left,
          .footer-right {
            justify-content: flex-start !important;
            width: 100%;
          }
        }
      `}</style>

      {/* Top section with navigational links */}
      <div style={sectionStyle}>
        {/* Categories column */}
        <div>
          <div style={columnTitleStyle}>Categories</div>
          <a href="#" style={linkStyle}>User Interface</a>
          <a href="#" style={linkStyle}>User Experience</a>
          <a href="#" style={linkStyle}>Digital Media</a>
          <a href="#" style={linkStyle}>Lifestyle</a>
        </div>

        {/* Product column */}
        <div>
          <div style={columnTitleStyle}>Product</div>
          <a href="#" style={linkStyle}>Pricing</a>
          <a href="#" style={linkStyle}>Overview</a>
          <a href="#" style={linkStyle}>Browse</a>
          <a href="#" style={linkStyle}>
            Accessibility
            <span style={{
              fontSize: '10px',
              background: '#e0d9ff',
              color: '#5b3cc4',
              padding: '2px 6px',
              borderRadius: '4px',
              marginLeft: '4px'
            }}>BETA</span>
          </a>
        </div>

        {/* Solutions column */}
        <div>
          <div style={columnTitleStyle}>Solutions</div>
          <a href="#" style={linkStyle}>Brainstorming</a>
          <a href="#" style={linkStyle}>Ideation</a>
          <a href="#" style={linkStyle}>Wireframing</a>
          <a href="#" style={linkStyle}>Research</a>
        </div>

        {/* Resources column */}
        <div>
          <div style={columnTitleStyle}>Resources</div>
          <a href="#" style={linkStyle}>Help Center</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Tutorials</a>
          <a href="#" style={linkStyle}>FAQs</a>
        </div>

        {/* Support column */}
        <div>
          <div style={columnTitleStyle}>Support</div>
          <a href="#" style={linkStyle}>Contact Us</a>
          <a href="#" style={linkStyle}>Developers</a>
          <a href="#" style={linkStyle}>Documentation</a>
          <a href="#" style={linkStyle}>Integrations</a>
        </div>

        {/* Company column */}
        <div>
          <div style={columnTitleStyle}>Company</div>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Press</a>
          <a href="#" style={linkStyle}>Events</a>
          <a href="#" style={linkStyle}>Request Demo →</a>
        </div>
      </div>

      {/* Bottom row with legal and social links */}
      <div style={bottomRowStyle} className="footer-bottom">
        {/* Left side: company info and legal links */}
        <div style={leftBottomStyle} className="footer-left">
          <div>@ 2023 Company</div>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Manage Cookies</a>
        </div>

        {/* Right side: social media and store badges */}
        <div style={rightBottomStyle} className="footer-right">
          <img src="footer/youtube.png" alt="YouTube" height="18" />
          <img src="footer/facebook.png" alt="Facebook" height="18" />
          <img src="footer/twitter.png" alt="Twitter" height="18" />
          <img src="footer/instagram.png" alt="Instagram" height="18" />
          <img src="footer/linkedin.png" alt="LinkedIn" height="18" />
          <img src="footer/appstore.png" alt="App Store" style={storeIconStyle} />
          <img src="footer/googleplay.png" alt="Google Play" style={storeIconStyle} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
