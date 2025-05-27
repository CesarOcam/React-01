// src/controllers/UsuarioController.tsx
import React, { useState } from 'react';
import type { Usuario } from '../models/Usuario';
import UsuarioForm from '../views/UsuarioForm';

const UsuarioController: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: '',
    correo: '',
    activo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar datos a backend o validar más
    alert(`Guardado:\nNombre: ${usuario.nombre}\nCorreo: ${usuario.correo}\nActivo: ${usuario.activo}`);
    // Resetear formulario opcionalmente
    setUsuario({ nombre: '', correo: '', activo: false });
  };

  return <UsuarioForm usuario={usuario} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default UsuarioController;
