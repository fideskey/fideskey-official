import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>En un mundo digital saturado de desinformación, FidesKey es tu puerto seguro</h1>
          <p>El primer ecosistema que cierra la puerta al contenido no verificado. Donde cada video proviene exclusivamente de instituciones pre-verificadas.</p>
          <div className="hero-buttons">
            <button className="hero-primary">Comenzar Gratis</button>
            <button className="hero-secondary">Ver Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>100%</strong>
              <span>Contenido Verificado</span>
            </div>
            <div className="stat">
              <strong>0%</strong>
              <span>Fake News</span>
            </div>
            <div className="stat">
              <strong>24-48h</strong>
              <span>Verificación Express</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
