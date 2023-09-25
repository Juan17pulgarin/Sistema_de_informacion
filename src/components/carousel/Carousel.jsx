import './Carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import papel from '../../assets/img/papel.jpeg'
import plastico from '../../assets/img/plastico.png'
import vidrio from '../../assets/img/vidrio.png'
import metal from '../../assets/img/metal.png'
import carton from '../../assets/img/carton.jpg'
import electronicos from '../../assets/img/electronicos.png'

function Carousels() {
  const tiposDeBasura = [
    {
      nombre: 'Papel',
      descripcion: 'El papel se recicla separando los diferentes tipos y retirando las impurezas antes de convertirlo en nuevos productos de papel.',
      imagenSrc: papel,
    },
    {
      nombre: 'Plástico',
      descripcion: 'El plástico se recicla clasificándolo según su tipo y fundiéndolo para crear nuevos productos de plástico.',
      imagenSrc: plastico,
    },
    {
      nombre: 'Vidrio',
      descripcion: 'El vidrio se recicla fundiéndolo y dándole forma para producir envases y objetos de vidrio reciclado.',
      imagenSrc: vidrio,
    },
    {
      nombre: 'Metal',
      descripcion: 'El metal se recicla fundiéndolo y transformándolo en productos metálicos reciclados, como latas y piezas de metal.',
      imagenSrc: metal,
    },
    {
      nombre: 'Cartón',
      descripcion: 'El cartón se recicla triturándolo y convirtiéndolo en pasta de papel, que se utiliza para hacer nuevos productos de cartón.',
      imagenSrc: carton,
    },
    {
      nombre: 'Electrónicos',
      descripcion: 'Los electrónicos se reciclan desmontando y separando sus componentes para recuperar materiales valiosos y reducir residuos.',
      imagenSrc: electronicos,
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {tiposDeBasura.map((tipo, index) => (
          <div className="carousel-item" key={index}>
            <div className="imagen-container">
              <img src={tipo.imagenSrc} alt={tipo.nombre} />
            </div>
            <h2>{tipo.nombre}</h2>
            <p>{tipo.descripcion}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
