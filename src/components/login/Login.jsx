import React, { useState } from 'react';
import axios from 'axios';

import imagenizquierda from '../../assets/img/caneca.png';
import imagenDerecha from '../../assets/img/basurero.png';
import usuario from '../../assets/img/usuario.png';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './login.css';
const apiUrl = import.meta.env.VITE_COMPROBAR_USER;

const Login = () => {
  const MySwal = withReactContent(Swal);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    
    axios.post(apiUrl, { username, password }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: '¡Credenciales correctas!',
        }).then(() => {
          window.location.href = '/mainNavbar';
        });
      } else {
        Swal.fire("Credenciales incorrectas!");
      }
    })
    .catch((error) => {
      Swal.fire("Credenciales incorrectas!", error.response.data.message, "error");
    });
  };

  const handleRegister = () => {
  };

  return (
    <div>
      <div className='card-contenedora-login'>
        <div className="card-left">
          <img className='user' src={usuario} alt="Imagen Izquierda" />
          <h3>Inicio de sesión</h3>
          <input
            className='campos'
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='campos'
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='ok' onClick={handleLogin}>
            Ingresar
          </button>
          <p>{message}</p>
        </div>

        <div className="card-right">
          <h3>Registrarse</h3>
          <input
            className='campos'
            type="text"
            placeholder="Nombre"
          />
          <input
            className='campos'
            type="email"
            placeholder="Email"
          />
          <input
            className='campos'
            type="text"
            placeholder="Dirección"
          />
          <input
            className='campos'
            type="text"
            placeholder="Teléfono"
          />
          <input
            className='campos'
            type="password"
            placeholder="Contraseña"
          />
          <div className='terminos-condiciones'>
            <label htmlFor="accept-terms">Acepto los términos y condiciones<input type="checkbox" id="accept-terms" /></label>
          </div>
          <div className='contenedor-botones'>
            <button className="ok" onClick={handleRegister}>
              Registrarse
            </button>
            <button className="cancel">Cancelar</button>
          </div>
        </div>
      </div>
      <img className="imagen-izquierda" src={imagenizquierda} alt="Imagen Izquierda" />
      <div className='inferior'></div>
      <img className="imagen-derecha" src={imagenDerecha} alt="Imagen Derecha" />
    </div>
  );
};

export default Login;
