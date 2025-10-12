import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenidos al</h1>
        <h1>Mundo Pokémon</h1>
        <p>¡Espero que tengas listas tus pokebolas!</p>
  <Link to="/pokemons" className="home-button">Cazá tus Pokemons!</Link>

      </div>
      <div className="home-image">
        <img
          src="/PokeApp.png"
          alt="Hola Pokemon"
          className='home-img'
        />
      </div>
    </div>
  );
}

export default Home;
