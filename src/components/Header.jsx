import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>FidesKey</h1>
            <span>La llave de tu confianza digital</span>
          </div>
          <nav className="nav">
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
