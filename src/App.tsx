import React, { useState } from 'react';
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

export default App;
