import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';
import './Listado.css';

function Listado() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=49')
      .then(res => res.json())
      .then(data => {
        const promises = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        Promise.all(promises).then(results => setPokemons(results));
      });
  }, []);

  return (
    <div className="card-grid">
      {pokemons.map(pokemon => (
        <CardPokemon
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          id={pokemon.id}
        />
      ))}
    </div>
  );
}

export default Listado;
