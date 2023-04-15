import React from 'react';
import './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container mx-auto px-4 py-2">
        <div className="logo">My App</div>
      </div>
    </header>
  );
};

export default Header;
