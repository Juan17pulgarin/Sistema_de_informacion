import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const tiposDeBasuraReciclaje = ['Papel', 'Plástico', 'Vidrio', 'Metal', 'Cartón', 'Electrónicos'];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <div className="menu">
            <div
              className={`menu-item`}
              onMouseEnter={() => {
                setShowCategories(true);
                setShowReviews(false);
              }}
              onMouseLeave={() => {
                setShowCategories(false);
              }}
            >
              <i className="fas fa-recycle"></i> Categorías
              {showCategories && (
                <div className={`categories-dropdown`}>
                  {tiposDeBasuraReciclaje.map((tipo, index) => (
                    <ul key={index}>
                      <li><i>{tipo}</i></li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
            <div
              className={`menu-item`}
              onMouseEnter={() => {
                setShowReviews(true);
                setShowCategories(false);
              }}
              onMouseLeave={() => {
                setShowReviews(false);
              }}
            >
              <i className="fas fa-star"></i> Reseñas
              {showReviews && (
                <div className={`reviews-dropdown`}>
                  <ul>
                    <li>
                      <i className="fas fa-thumbs-up">Buenas</i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-grin">Muy Buenas</i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-meh">Regulares</i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-thumbs-down">Muy Malas</i>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right-section">
          <Link to="/login"> {}
            <button className="login-button">Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
