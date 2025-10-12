import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';

function Favoritos() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    const fetchFavoritos = async () => {
      const promises = favoritos.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    };

    fetchFavoritos();
  }, []);

  return (
    <div>
      <h2>Mis Pokémon Favoritos</h2>
      {pokemons.length === 0 ? (
      <p>No hay favoritos aún.</p>
    ) : (
      <div className="grid">
        {pokemons.map(pokemon => (
          <CardPokemon
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            id={pokemon.name}
          />
        ))}
      </div>
      )}
    </div>
  );
}

export default Favoritos;
