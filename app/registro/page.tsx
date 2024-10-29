"use client"; 

import { useState } from 'react';
import calcularEdad from '../utilidades/calculadoraEdad';

interface Usuario {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
  edad: number;
}

export default function Registro() {
  const [formulario, setFormulario] = useState<Usuario>({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    fechaNacimiento: '',
    edad: 0,
  });

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const agregarUsuario = () => {
    const edad = calcularEdad(formulario.fechaNacimiento);
    if (!isNaN(edad)) {
      const nuevoUsuario: Usuario = { ...formulario, edad };
      setUsuarios([...usuarios, nuevoUsuario]);
    } else {
      alert("Por favor, ingrese una fecha de nacimiento válida.");
    }

    setFormulario({
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fechaNacimiento: '',
      edad: 0,
    });
  };

  return (
    <div className="container mt-4">
      <h1>Registro de Usuarios</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarUsuario(); }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={formulario.nombre} onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" className="form-control" value={formulario.apellido} onChange={(e) => setFormulario({ ...formulario, apellido: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="tel" className="form-control" value={formulario.telefono} onChange={(e) => setFormulario({ ...formulario, telefono: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" value={formulario.correo} onChange={(e) => setFormulario({ ...formulario, correo: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" value={formulario.fechaNacimiento} onChange={(e) => setFormulario({ ...formulario, fechaNacimiento: e.target.value })} required />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>

      {usuarios.length > 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Fecha de Nacimiento</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.fechaNacimiento}</td>
                <td>{usuario.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
