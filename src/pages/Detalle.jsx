import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';

function Detalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div>
      <CardPokemon
        name={pokemon.name}
        image={pokemon.sprites.other['official-artwork'].front_default}
        id={pokemon.name}
        isDetail={true}
      />
      <h4>Altura: {pokemon.height}</h4>
      <h4>Peso: {pokemon.weight}</h4>
      <h4>Tipos: {pokemon.types.map(t => t.type.name).join(', ')}</h4>
      <h4>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(', ')}</h4>
    </div>
  );
}

export default Detalle;
