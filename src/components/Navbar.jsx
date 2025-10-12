import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/Pikachu.png" alt="Pikachu" className="nav-icon" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/favoritos">FAVORITOS</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
