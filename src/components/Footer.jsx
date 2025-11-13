import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FidesKey</h3>
            <p>La llave de tu confianza digital</p>
            <div className="contact-info">
              <p>📧 gustavo.merladett@fideskey.com</p>
              <p>📞 +34643924145</p>
              <p>🌐 fideskey.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#equipo">Nuestro Equipo</a></li>
              <li><a href="#inversion">Para Inversores</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacidad">Política de Privacidad</a></li>
              <li><a href="#terminos">Términos de Servicio</a></li>
              <li><a href="#cookies">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 FidesKey. Todos los derechos reservados.</p>
          <p>Documento confidencial - FidesKey © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
