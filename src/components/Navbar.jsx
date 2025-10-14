import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="Pikachu.png" alt="Pikachu" className="logo-img" />
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        <li><Link to="/" onClick={cerrarMenu}>Home</Link></li>
        <li><Link to="/pokemons" onClick={cerrarMenu}>Pokémons</Link></li>
        <li><Link to="/favoritos" onClick={cerrarMenu}>Favoritos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
