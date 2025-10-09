import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle/:nombre" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
