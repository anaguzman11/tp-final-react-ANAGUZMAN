import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Detalle from './pages/Detalle';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Listado />} />
        <Route path="/pokemons/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
