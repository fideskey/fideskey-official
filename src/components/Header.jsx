import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>FidesKey</h1>
              <span>La llave de tu confianza digital</span>
            </Link>
          </div>
          <nav className="nav">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-active' : ''}
            >
              Home
            </Link>
            <Link 
              to="/demo" 
              className={location.pathname === '/demo' ? 'nav-active' : ''}
            >
              Demo
            </Link>
            <a href="#instituciones">Para Instituciones</a>
            <a href="#usuarios">Para Usuarios</a>
            <a href="#inversion">Para Inversores</a>
            <button className="login-button">Acceder</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
