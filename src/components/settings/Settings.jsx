import "../settings/settings.css";
import user from "../../assets/img/usuario.png";
import MainNavbar from '../mainNavbar/MainNavbar';

function Settings() {
  return (
    <>    
    <MainNavbar />
    <div className="conten">
      <aside className="right_side">
        <div className="insert">
          <div className="input-container">
            <label htmlFor="name">Usuario:</label>
            <input type="text" id="name" name="name" placeholder="Nombre usuario" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Correo electrónica"/>
          </div>

          <div className="input-container">
            <label htmlFor="password" >Contraseña:</label>
            <input  type="password" id="password" name="password" placeholder="Contraseña usuario"/>
          </div>

          <div className="input-container">
            <label htmlFor="direction" >Dirección:</label>
            <input type="text" id="direction" name="direction" placeholder="Dirección recogida" />
          </div>

          <div className="input-container">
            <label htmlFor="type">Tipo:</label>
            <input type="text" id="type" name="type"  placeholder="Tipo de usuario" />
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
    </div>
    </>

  );
}

export default Settings;
