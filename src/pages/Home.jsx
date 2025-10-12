import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenidos al</h1>
        <h2>Mundo Pokémon</h2>
        <p>Explorá la Pokédex y descubrí tus criaturas favoritas.</p>
        <p>¡Espero que tengas listas tus pokebolas!</p>
      </div>
      <div className="home-image">
        <img
          src="/PokeApp.png"
          alt="Hola Pokémon"
          className="home-img"
        />
      </div>
    </div>
  );
}

export default Home;
