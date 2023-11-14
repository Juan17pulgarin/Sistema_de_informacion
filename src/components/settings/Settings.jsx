import React, { useState, useEffect } from "react";
import "../settings/settings.css";
import user from "../../assets/img/usuario.png";
import MainNavbar from '../mainNavbar/MainNavbar';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_PERSONAS;

function Settings() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    direction: "",
    type: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos del primer usuario desde la API
    axios.get(apiUrl)
      .then((response) => {
        setUserData({
          name: response.data.primer_nombre + " " + response.data.segundo_nombre + " " + response.data.primer_apellido + " " + response.data.segundo_apellido,
          email: response.data.email,
          password: response.data.password,
          direction: response.data.direccion,
          type: response.data.tipo,
        });
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  const handleUpdateUser = () => {
    const [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion] = userData.name.split(' ');

    // Realiza una solicitud PUT para actualizar los datos en la base de datos
    axios.put(apiUrl, {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      direccion,
      email: userData.email,
      tipo: userData.type,
    })
      .then(() => {
        setSuccessMessage("Usuario actualizado con éxito");
      })
      .catch((error) => console.error("Error al actualizar usuario:", error));
  };

  return (
    <>    
    <MainNavbar />
    <div className="conten">
      <aside className="right_side">
        <div className="insert">
          <div className="input-container">
            <label htmlFor="name">Usuario:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              placeholder="Nombre usuario"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              placeholder="Correo electrónico"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              placeholder="Contraseña usuario"
            />
          </div>

          <div className="input-container">
            <label htmlFor="direction">Dirección:</label>
            <input
              type="text"
              id="direction"
              name="direction"
              value={userData.direction}
              onChange={(e) => setUserData({ ...userData, direction: e.target.value })}
              placeholder="Dirección recogida"
            />
          </div>

          <div className="input-container">
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={userData.type}
              onChange={(e) => setUserData({ ...userData, type: e.target.value })}
              placeholder="Tipo de usuario"
            />
          </div>
          <div className="botones">         
            <button className="aceptar" onClick={handleUpdateUser}>Guardar</button>        
          </div>
          {successMessage && <p>{successMessage}</p>}
        </div>
        <div className="display_foto">
          <img src={user} alt="" className="img_user" />
          <button id="eliminar-cuenta">Eliminar cuenta</button>
        </div>
      </aside>
    </div>
    </>
  );
}

export default Settings;
