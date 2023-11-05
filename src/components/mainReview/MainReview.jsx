import React from 'react';
import './mainReview.css';
import logo from '../../assets/img/logo.png';

const MainReview = () => {
  return (
    <div className="main-content">
    <div className="form-container control3">
      <br></br>
      <form>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="calificacion">Calificación:</label>
          <input type="number" id="calificacion" name="calificacion" min="1" max="5" required />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea id="comentario" name="comentario" maxLength="300" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <div className="supp">
  <img src={logo}className="imagenq"/>
  <span className="opti">Ayuda</span>
</div>
  </div>
  );
};

export default MainReview;