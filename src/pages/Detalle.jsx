import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detalle.css';

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
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="detalle-info">
        <h2>{pokemon.name}</h2>
        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>
        <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Movimientos:</strong> {pokemon.moves.slice(0, 5).map(m => m.move.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default Detalle;
