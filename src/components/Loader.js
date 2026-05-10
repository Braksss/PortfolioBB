import React from 'react';
import '../styles/loader.scss'; // Assure-toi d'ajouter le style CSS correspondant

const Loader = () => {
  return (
    <div className="loader">
      {/* Loader subtil */}
      <div className="loader__spinner"></div>

      {/* Nom et rôle */}
      <div className="loader__text">
        <h1 className="loader__name">Benjamin Brassart</h1>
        <h2 className="loader__role">Développeur Freelance</h2>
      </div>
    </div>
  );
};

export default Loader;