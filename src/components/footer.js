import React from 'react';
import '../styles/footer.scss'; // Assure-toi que ce fichier existe
import NexaLogo from '../components/Images/logo-nxb.png'; // Vérifie le chemin de l'image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logoContainer">
        {/* Logo */}
        <img src={NexaLogo} alt="Nexabridge Logo" className="footer__logo" />
      </div>
      
      <div className="footer__quote">
        <p>« L’imagination est plus importante que le savoir. » — Albert Einstein</p>
      </div>
      
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Benjamin Brassart - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;