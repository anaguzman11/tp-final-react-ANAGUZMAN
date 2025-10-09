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

```bash
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
```
