import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>¡Cazá tu Pokemon!</h1>
      <p>Explorá el universo de Pokémon, descubrí sus habilidades y características.</p>

      <div className="botones-home">
        <button onClick={() => navigate("/listado")}>Ver Pokémons</button>
        <button onClick={() => navigate("/listado")}>Explorar</button>
      </div>
    </div>
  );
}

export default Home;
