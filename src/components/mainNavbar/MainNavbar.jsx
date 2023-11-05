import React from 'react';
import './MainNavbar.css';
import background from '../../assets/img/comentarios_1.png';
import backgro from '../../assets/img/lupa_1.png';
import back from '../../assets/img/mapa_1.png';
import configu from '../../assets/img/configuraciones_1.png';
import recoge from '../../assets/img/maps_and_location_1.png';
import usua from '../../assets/img/usuario.png';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <>
    <div className="navbar-container">
      <div className="top-navbar">
        <div className="user-info">
        <img src={usua} alt="Username" className="icon-ima" />
          <span className="username">Username</span>
        </div>
      </div>

      <div className="main-navbar">
        <div className="options">
          <div className="vertical-options">

          <div className="option">
            <img src={background} alt="Reseñas" className="icon-image" />
            <Link className="icon-text" to="/reseña">Reseñas</Link>
          </div>

            <div className="option">
          <img src={backgro} alt="Consultas" className="icon-image" />
          <Link className="icon-text" to="/DiscriPcion">Consultas</Link>
        </div>

        <div className="option">
          <img src={back} alt="Localización" className="icon-image" />
        <Link className="icon-text" to="/localizacion">Localización</Link>
        </div>

        <div className="option">
          <img src={recoge} alt="Recoger" className="icon-image" />
        <Link className="icon-text" to="/recoger">Recoger</Link>
        </div>

        <div className="option">
          <img src={configu} alt="Configuraciones" className="icon-image" />
        <Link className="icon-text" to="/configuracion">Configuraciones</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MainNavbar;