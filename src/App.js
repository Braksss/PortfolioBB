import React, { useEffect, useState } from 'react';
import './styles/global.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Nexabridge from './pages/Nexabridge'; // Import de la page "À Propos" (Nexabridge)
import Servicesx from './pages/Servicesx';
import UnderDevelopment from './pages/UnderDevelopment';
import Footer from './components/footer';
import Loader from './components/Loader'; // Importer le Loader
import Portfolio from './pages/Portfolio'; // Import de la page Portfolio
import Blog from './pages/Blog'; // Import de la nouvelle page Blog
import BlogPost from './components/Blog/BlogPost';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true); // Ajout d'un état pour le loader

  // Détection de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Si l'écran est de taille inférieure ou égale à 768px, c'est un mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Pour vérifier la taille au chargement de la page

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Simulation du chargement initial (loader pendant 3 secondes)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simule 3 secondes de chargement

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  if (loading) {
    return <Loader />; // Si le site est en train de charger, afficher le Loader
  }

  return (
    <>
      
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nexabridge" element={<Nexabridge />} /> {/* Page À Propos */}
            <Route path="/servicesx" element={<Servicesx />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} /> {/* Ajout de la route vers Portfolio */}
            <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} /> {/* Route dynamique pour l'article */}
          </Routes>
          <Footer />
        </>

    </>
  );
}

export default App;