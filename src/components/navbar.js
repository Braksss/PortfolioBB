import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Ajout de useLocation pour obtenir la page actuelle
import '../styles/navbar.scss';
import logo from '../components/Images/logo-nxb.png'; 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Obtenez la page actuelle
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setShowNav(false); // Cacher la navbar quand on défile vers le bas
      } else {
        setShowNav(true); // Montrer la navbar quand on défile vers le haut
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour faire défiler vers les sections de la page d'accueil
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fonction pour gérer la navigation et le défilement
  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <div className={`navbar minimalist ${showNav ? '' : 'hidden'}`}>
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Nexabridge Logo" />
      </Link>

      {/* Menu de navigation qui se déploie en liste simple pour les petites tailles d'écran */}
      <button className="navbar__menu-button" onClick={toggleMenu}>
        {isOpen ? 'Fermer' : 'Menu'}
      </button>

      <div className={`navbar__list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleNavigation('home')}>Accueil</li>
          <li onClick={() => navigate('/nexabridge')}>À Propos</li>
          <li onClick={() => navigate('/portfolio')}>Portfolio</li>
        </ul>
      </div>

      <div className="navbar__cta">
        <button onClick={() => handleNavigation('contact')} className="navbar__cta-button">Proposez un projet</button>
      </div>
    </div>
  );
}

export default NavBar;