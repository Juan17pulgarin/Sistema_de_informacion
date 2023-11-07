import React, { useState } from 'react';
import axios from 'axios';
import './mainReview.css';
import logo from '../../assets/img/logo.png';
import Swal from "sweetalert2";

const apiUrl = import.meta.env.VITE_RENNAS_USER;

const MainReview = () => {
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const data = {
      comentario: comentario,
      calificacion: calificacion,
    };

    axios.post(apiUrl, data)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Reseña agregada con éxito',
          });
          setComentario('');
          setCalificacion('');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al agregar la reseña',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al agregar la reseña: ' + error.response.data.message,
        });
      });
  };

  return (
    <div className="main-content">
      <div className="form-container control3">
        <br></br>
        <form onSubmit={handleReviewSubmit}>
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
            <input
              type="number"
              id="calificacion"
              name="calificacion"
              min="1"
              max="5"
              value={calificacion}
              onChange={(e) => setCalificacion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comentario">Comentario:</label>
            <textarea
              id="comentario"
              name="comentario"
              maxLength="300"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="supp">
        <img src={logo} className="imagenq" />
        <span className="opti">Ayuda</span>
      </div>
    </div>
  );
};

export default MainReview;
