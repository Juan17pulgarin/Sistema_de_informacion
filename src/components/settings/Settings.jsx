import "../settings/settings.css";
import user from "../../assets/img/user.png";

function Settings() {
  return (
    <form action="">

      <aside className="right_side">
        
        <div className="insert">
          <div className="input-container">
            <label htmlFor="name">Nombre de usuario:</label>
            <input type="text" id="name" name="name" />
            <button className ="btnCambiar">Cambiar</button>
          </div>

          <div className="input-container">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="input-container">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
            <button className ="btnCambiar" >Cambiar</button>
          </div>

          <div className="input-container">
            <label htmlFor="direction">Dirección de residencia:</label>
            <input type="text" id="direction" name="direction" />
          </div>

          <div className="input-container">
            <label htmlFor="type">Tipo de perfil:</label>
            <input type="text" id="type" name="type" />
          </div>

          <div className="input-container">
            <label>Verificar identidad:</label>
            <button>Subir foto</button>
          </div>

          <button id="eliminar-cuenta">Eliminar cuenta</button>
        </div>

        <div className="display_foto">
          <img src={user} alt="" className="img_user" />
          <button>Cambiar foto</button>
          <button>Eliminar foto</button>
        </div>
      </aside>
    </form>
  );
}

export default Settings;
