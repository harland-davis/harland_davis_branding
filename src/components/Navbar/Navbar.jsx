import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="Navbar__navigation">
        <div></div>
        <div className="Navbar__logo"><a href="/">kyleDavis<span className="Navbar__logo-semicolon">;</span></a></div>
        <div className="Navbar__spacer" />
        <div className="Navbar__navigation-items">
          <ul>
            <li><a href="/">Projects</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Github</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
