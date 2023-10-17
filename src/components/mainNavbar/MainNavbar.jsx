import React from 'react';
import './MainNavbar.css'; 
import { FaList, FaQuestion, FaMapMarker, FaHandHolding, FaCog, FaUser } from 'react-icons/fa'; // Importa iconos de react-icons

const MainNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="top-navbar">
        <div className="user-info">
          <span className="username">Username</span>
          <FaUser className="user-icon" />
        </div>
      </div>
      <div className="main-navbar">
        <div className="options">
          <div className="vertical-options">
            <div className="option">
              <FaList className="icon" />
              Reseñas
            </div>
            <div className="option">
              <FaQuestion className="icon" />
              Consultas
            </div>
            <div className="option">
              <FaMapMarker className="icon" />
              Localización
            </div>
            <div className="option">
              <FaHandHolding className="icon" />
              Recoger
            </div>
            <div className="option">
              <FaCog className="icon" />
              Configuraciones
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
