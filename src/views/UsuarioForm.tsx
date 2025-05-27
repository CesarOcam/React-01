// src/views/UsuarioForm.tsx
import React from 'react';

interface UsuarioFormProps {
  usuario: {
    nombre: string;
    correo: string;
    activo: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const UsuarioForm: React.FC<UsuarioFormProps> = ({ usuario, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={usuario.correo}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Activo:</label>
        <input
          type="checkbox"
          name="activo"
          checked={usuario.activo}
          onChange={onChange}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default UsuarioForm;
