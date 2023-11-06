import "../settings/settings.css";
import user from "../../assets/img/usuario.png";
import MainNavbar from '../mainNavbar/MainNavbar';

function Settings() {
  return (
    <div className="conten">
      <aside className="right_side">
        <div className="insert">
          <div className="input-container">
            <label htmlFor="name">Nombre de usuario:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="input-container">
            <label htmlFor="password">Contraseña:</label>
            <input  type="password" id="password" name="password" />
          </div>

          <div className="input-container">
            <label htmlFor="direction">Dirección de residencia:</label>
            <input type="text" id="direction" name="direction" />
          </div>

          <div className="input-container">
            <label htmlFor="type">Tipo de perfil:</label>
            <input type="text" id="type" name="type" />
          </div>
          <div className="botones">         
            <button className="aceptar">Guardar</button>        
          </div>
        </div>
        <div className="display_foto">
          <img src={user} alt="" className="img_user" />
          <button id="eliminar-cuenta">Eliminar cuenta</button>
        </div>
      </aside>
      <MainNavbar />
    </div>
  );
}

export default Settings;
