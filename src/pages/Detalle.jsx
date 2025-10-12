import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detalle.css';

function Detalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evoluciones, setEvoluciones] = useState([]);

  useEffect(() => {
  async function fetchData() {
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  setPokemon(data);

  const speciesRes = await fetch(data.species.url);
  const speciesData = await speciesRes.json();

  const evoRes = await fetch(speciesData.evolution_chain.url);
  const evoData = await evoRes.json();

  const chain = [];
  let current = evoData.chain;
  while (current) {
  chain.push(current.species.name);
  current = current.evolves_to[0];
  }
  setEvoluciones(chain);
  } catch (error) {
  console.error('Error al cargar el detalle:', error);
  }
  }

  fetchData();
  }, [id]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="detalle-card">
    <div className="detalle-container">
    <div className="detalle-imagen">
    <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={pokemon.name}/>
    </div>

    <div className="detalle-info">
    <h2>{pokemon.name}</h2>
    <li className="tipo">
    <strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</li>
    <li className="habilidad">
    <strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</li>

    <div className="evolution-section">
    <h3>EVOLUCIÓN</h3>
    <div className="evolution-chain">{evoluciones.map((nombre, index) => (
    <div key={index} className="evolution-stage">
    <img src={`https://img.pokemondb.net/artwork/${nombre}.jpg`} alt={nombre} />
    <p>{nombre}</p>
    </div>
    ))}
    </div>
    </div>

    <Link to="/pokemons" className="volver-button">
    ← Volver
    </Link>
    </div>
    </div>
    </div>
  );
}

export default Detalle;

