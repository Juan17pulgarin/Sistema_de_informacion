import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import './ordenes.css';
import MainNavbar from '../mainNavbar/MainNavbar';

const apiUrl = import.meta.env.VITE_ORDENES;

const Ordenes = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [fecha, setFecha] = useState('');

  const limpiarCampos = () => {
    setNombre('');
    setApellidos('');
    setTipoDocumento('');
    setNumeroDocumento('');
    setDireccion('');
    setDescripcionProducto('');
    setFecha('');
  };

  const guardarOrden = () => {
    const nuevaOrden = {
      fecha: fecha,
      descripcion: descripcionProducto,
      direccion: direccion 
    };

    Axios.post(apiUrl, nuevaOrden)
      .then((response) => {
        if (response.data && response.data.mensaje) {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: response.data.mensaje,
          });
        }
      })
      .catch((error) => {
        console.error('Error al guardar la orden:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar la orden. Por favor, inténtalo de nuevo.',
        });
      });
  };

  return (
    <>   
      <MainNavbar />
      <div className="contenedor-ordenes">
        <div className="formulario">
          <div className="campo">
            <label>Nombre:</label>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Apellidos:</label>
            <input
                type="text"
                placeholder="Apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Tipo Documento:</label>
            <input
                type="text"
                placeholder="Tipo de Documento"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
            />
          </div>
          <div className = "campo">
            <label>Número Documento:</label>
            <input
                type="text"
                placeholder="Número de Documento"
                value={numeroDocumento}
                onChange={(e) => setNumeroDocumento(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Dirección:</label>
            <input
                type="text"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Descripción:</label>
            <input
                type="text"
                placeholder="Descripción del Producto"
                value={descripcionProducto}
                onChange={(e) => setDescripcionProducto(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Fecha:</label>
            <input
                type="date"
                placeholder="Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="contenedor-botones">
            <button className="guardar" onClick={guardarOrden}>
              Guardar
            </button>
            <button className="limpiar" onClick={limpiarCampos}>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordenes;
