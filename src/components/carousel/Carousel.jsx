import './Carousel.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_CONSULTAR_CARDS;
import imagen from '../../assets/img/carton.jpg'

function Carousels() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
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
    <div className="contenedor_de_tarjetas">
      <div className="carousel-container">
        <div className="cards-container">
          {comentarios.map((comentario) => (
            <div className="card" key={comentario.id}>
              <div className="imagen-container">
                <img src={imagen} alt={comentario.nombre} />
              </div>
              <div className="text-container">
                <h2>{comentario.nombre}</h2>
                <p>{comentario.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousels;
