import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

function Navbar() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const horaActual = new Date().getHours();

    let mensajeSaludo;

    if (horaActual >= 5 && horaActual < 12) {
      mensajeSaludo = "¡Buenos días!";
    } else if (horaActual >= 12 && horaActual < 18) {
      mensajeSaludo = "¡Buenas tardes!";
    } else {
      mensajeSaludo = "¡Buenas noches!";
    }

    setGreeting(mensajeSaludo);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <h3>{greeting}</h3>
        </div>
        <div className="right-section">
          <Link to="/login">
            <button className="login-button">Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
