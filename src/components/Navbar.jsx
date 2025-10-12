import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/pokemons">Pokémons</Link></li>
        <Link to="/favoritos">Favoritos</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
