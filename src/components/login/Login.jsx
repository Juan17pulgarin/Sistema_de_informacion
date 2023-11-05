import imagenizquierda from '../../assets/img/caneca.png'
import imagenDerecha from '../../assets/img/basurero.png'
import usuario from '../../assets/img/usuario.png'
import './login.css'

const Login = () => {
  return (
    <div>
      <div className='card-contenedora-login'>
        <div className="card-left">
          <img className='user' src={usuario} alt="Imagen Izquierda" />
          <h3>Inicio de sesión</h3>
          <input className='campos' type="text" placeholder="Usuario" />
          <input className='campos' type="password" placeholder="Contraseña" />
          <button className='ok'>Ingresar</button>
        </div>

        <div className="card-right">
          <img />
          <h3>Registrarse</h3>
          <input className='campos' type="text" placeholder="Nombre" />
          <input className='campos' type="email" placeholder="Email" />
          <input className='campos' type="text" placeholder="Dirección" />
          <input className='campos' type="text" placeholder="Teléfono" />
          <input className='campos' type="password" placeholder="Contraseña" />
          <label htmlFor="accept-terms">Acepto los términos y condiciones</label>
          <input type="checkbox" id="accept-terms" />
          <div className='contenedor-botones'>
            <button className="ok">Registrarse</button>
            <button className="cancel">Cancelar</button>
          </div>
        </div>
      </div>
      <img className="imagen-izquierda" src={imagenizquierda} alt="Imagen Izquierda" />
      <div className='inferior'></div>
      <img className="imagen-derecha" src={imagenDerecha} alt="Imagen Derecha" />
    </div>
  );
};

export default Login;
