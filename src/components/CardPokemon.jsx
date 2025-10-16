import { Link } from 'react-router-dom';
import './CardPokemon.css';
import { useEffect, useState } from 'react';

function CardPokemon({ name, image, id, isDetail = false }) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavorito(favoritosGuardados.includes(id));
  }, [id]);

  const toggleFavorito = (e) => {
    e.preventDefault();
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];

    let nuevosFavoritos;
    if (favoritosGuardados.includes(id)) {
      nuevosFavoritos = favoritosGuardados.filter(favId => favId !== id);
    } else {
      nuevosFavoritos = [...favoritosGuardados, id];
    }

    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
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
              {favorito ? '❤️' : '🤍'}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CardPokemon;
