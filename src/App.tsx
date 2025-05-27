/*import React, { useState } from 'react';
import VistaUsuario from './views/UsuarioForm';

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    activo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', usuario);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mi Proyecto React MVC</h1>
      <VistaUsuario
        usuario={usuario}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;*/

import React from "react";

const nombre = "Juan";
const usuarioLogueado = true;
const frutas = ["Manzana", "Banana", "Cereza"];

function Saludo() {
  return <h2>Hola desde un componente</h2>;
}

function App() {
  return (
    <div>
      <h1>Hola, React!</h1>
      <p>Este es mi primer componente.</p>

      <div>
        <h1>Hola, {nombre}!</h1>
        <p>2 + 3 = {2 + 3}</p>
      </div>

      <div>
        {usuarioLogueado ? (
          <p>Bienvenido!</p>
        ) : (
          <p>Por favor, inicia sesión.</p>
        )}
      </div>

      <div>
        <ul>
          {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      </div>

      <div>
        <Saludo />{nombre}
        <Saludo />
      </div>
      
    </div>
  );
}

export default App;
