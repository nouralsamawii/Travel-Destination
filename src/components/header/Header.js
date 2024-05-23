import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>Explore and discover amazing content.</p>
        <Navbar />
      </header>
    </>
  );
}

export default Header;