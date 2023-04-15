import React from 'react';
import './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        © {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
