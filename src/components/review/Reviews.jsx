import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './review.css'

function Reviews() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then((response) => {
        setComentarios(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Error al obtener comentarios del servidor:', error.response);
        } else {
          console.error('Error al realizar la solicitud:', error.message);
        }
      });
  }, []);

    return (
    <div className="contenedor">
      <h4 className="encabezado">Comentarios</h4>
      <div className="tarjetas">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="tarjeta">
            <p className="comentario">{comentario.comentario}</p>
            <h6 className="calificacion">Calificación: {comentario.calificacion}</h6>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default Reviews