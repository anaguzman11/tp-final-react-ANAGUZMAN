# tp-final-react-ANAGUZMAN

TRABAJO PRACTICO REACT

# 🧩 Proyecto React con Vite y React Router DOM

Este proyecto fue creado con **Vite + React**, utilizando **React Router DOM** para la navegación entre páginas.  
El objetivo es desarrollar una aplicación SPA (Single Page Application) modular y escalable.

---

## 🚀 Tecnologías utilizadas

- **React** (librería principal)
- **Vite** (entorno de desarrollo rápido)
- **React Router DOM** (enrutamiento entre páginas)
- **JavaScript (JSX)** y **CSS**
- **Visual Studio Code (VS Code)**
- **Git + GitHub**

---

## ⚙️ Pasos para crear el proyecto desde cero

### 1️⃣ Crear el proyecto con Vite

````bash
npm create vite@latest

Luego asignamos nombre al Proyecto

cd tp-final-react
2️⃣ Instalar las dependencias
en el terminal Bash colocamos:
npm install

3️⃣ Instalar React Router DOM
en el terminal Bash colocamos:
npm install react-router-dom

4️⃣ Estructura de carpetas base
Ordenamos el Proyecto:
src/
 ├── components/
 │   └── Navbar.jsx
 ├── pages/
 │   ├── Home.jsx
 │   ├── Listado.jsx
 │   └── Detalle.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── assets/

5️⃣ Configurar el enrutamiento
📄 main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
📄 App.jsx
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

6️⃣ Ejecutar el proyecto
en el terminal colocamos:
npm run dev

abrimos el Navegador http://localhost....

✨ Funcionalidades implementadas
🏠 Página Home
Diseño visual con fondo en gradiente y tipografía destacada.

Botón de navegación hacia el listado de Pokémon.

Imagen decorativa con estilo responsivo.

Animaciones suaves de entrada para los títulos.

Adaptación completa a mobile con media queries.

📦 Navbar
Menú de navegación con enlaces a Home, Pokémons y Favoritos.

Ícono de Pikachu en el margen superior izquierdo.

Menú hamburguesa funcional en mobile:

Aparece solo en pantallas pequeñas.

Se despliega con animación de deslizamiento.

Se cierra automáticamente al hacer clic en un link.

⭐ Página Favoritos
Renderizado dinámico desde localStorage.

Cards visuales con nombre e imagen del Pokémon.

Mensaje personalizado cuando no hay favoritos.

Botón para limpiar la lista de favoritos.

Animación suave para el mensaje vacío.

🧩 Estilos y diseño
Uso de gradientes, sombras y tipografía temática (Press Start 2P).

Animaciones con @keyframes para entradas suaves.

Diseño responsivo en todas las páginas.

Footer con firma personal y ubicación: “Diseñado y desarrollado por Ana Guzmán Iacazzi — San Juan, Argentina”

🧪 Detalles técnicos adicionales
Uso de useEffect para cargar datos desde la PokéAPI.

Manejo de estado con useState.

Navegación dinámica con Link y Route.

Organización modular de componentes y páginas.

Estilos separados por archivo .css por cada vista.```
````
