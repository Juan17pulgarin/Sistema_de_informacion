import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [registro, setRegistro] = useState(false);
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    documento: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    direccion: '',
    correo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registro) {
      console.log('Datos de registro enviados:', formData);
    } else {
      console.log('Datos de inicio de sesión:', formData);
    }
  };

  const handleToggleRegistro = () => {
    setRegistro(!registro);
  };

  return (
    <div className="container_login">
      <div className={`card ${registro ? 'registro' : ''}`}>
        <h2>{registro ? 'Registro' : 'Inicio de Sesión'}</h2>
        <form onSubmit={handleSubmit}>
          {registro && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  name="documento"
                  placeholder="Documento"
                  value={formData.documento}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="primerNombre"
                  placeholder="Primer Nombre"
                  value={formData.primerNombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="segundoNombre"
                  placeholder="Segundo Nombre"
                  value={formData.segundoNombre}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="primerApellido"
                  placeholder="Primer Apellido"
                  value={formData.primerApellido}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="segundoApellido"
                  placeholder="Segundo Apellido"
                  value={formData.segundoApellido}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo Electrónico"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          {!registro && (
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
          {}
          <Link to="/mainNavbar">{}
            <button type="submit">
                {registro ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </Link>
        </form>
        {!registro && (
          <p onClick={handleToggleRegistro}>
            ¿No tienes una cuenta? Regístrate
          </p>
        )}
        {registro && (
          <button onClick={handleToggleRegistro}>Volver</button>
        )}
      </div>
    </div>
  );
};

export default Login;
