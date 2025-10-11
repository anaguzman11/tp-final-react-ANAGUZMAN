import { Link } from 'react-router-dom';
import './CardPokemon.css';
import { useState } from 'react';

function CardPokemon({ name, image, id, isDetail = false }) {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = (e) => {
    e.preventDefault(); // evita que el clic en el corazón dispare el Link
    setFavorito(!favorito);
  };

  return (
    <div className={`card-pokemon ${isDetail ? 'detail' : 'list'}`}>
      {isDetail ? (
        <>
          <img src={image} alt={name} className="pokemon-image-large" />
          <h2>{name}</h2>
        </>
      ) : (
        <Link to={`/pokemons/${id}`} className="card-link">
          <img src={image} alt={name} className="pokemon-image" />
          <div className="card-title">
            <h3>{name}</h3>
            <span
              className={`heart ${favorito ? 'active' : ''}`}
              onClick={toggleFavorito}
              title="Agregar a favoritos"
            >
              ❤️
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CardPokemon;
