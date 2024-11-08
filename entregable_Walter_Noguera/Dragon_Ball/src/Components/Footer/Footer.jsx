// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-stats">
        <span>PERSONAJES: 58</span>
     
      </div>
      <hr className="footer-divider" />
      <div className="server-status">
        <span>ESTADO DEL SERVIDOR:</span>
        <span className="status-indicator">●</span>
      </div>
      <div className="footer-logos">

      </div>
      <div className="footer-icons">
        <a href="https://github.com/WalterNoguera21" target="_blank" rel="git hub">⚙</a>
        <a href="https://web.dragonball-api.com/" target="_blank" rel="api original">🔗</a>
        <a href="https://www.facebook.com/walterdanilo.nogueraquintero" target="_blank" rel="red social">❤️</a>
      </div>
      <div className="footer-credits">
        <span>&lt;/&gt; por <strong>Walter Danilo Noguera QUintero</strong> 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
