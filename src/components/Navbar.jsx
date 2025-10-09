import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/listado">Pokémons</Link>
    </nav>
  );
}

export default Navbar;
