import React, { useState } from 'react';
import PortfolioFilterBar from '../components/Portfolio/PortfolioFilterBar';
import PortfolioCard from '../components/Portfolio/PortfolioCard';
import Modal from '../components/Portfolio/Modal';
import '../styles/portfolio.scss';

import Nexabridge from '../components/Images/nexabridge.png';
import Axis from '../components/Images/Axis.png';
import Ever from '../components/Images/ever.png';
import Booki from '../components/Images/booki.png';
import LaBelleEpoque from '../components/Images/La-Belle-Epoque.png';
import Qwenta from '../components/Images/Qwenta.png';
import Carducci from '../components/Images/Carducci.png';
import Kasa from '../components/Images/Kasa.png';
import SB from '../components/Images/SB.png';
import Grimoire from '../components/Images/Grimoire.png';
import DefaultImage from '../components/Images/bg-project.png'; // Image par défaut



const projectData = [
  { 
    title: "Nexabridge",
    category: "Développement Web",
    date: new Date("2024-01-05"), 
    img: Nexabridge, 
    content: "Développement du site web pour Nexabridge, une société holding spécialisée dans l'accompagnement d'entrepreneurs. Ce projet a consisté à créer une vitrine moderne et responsive en HTML, optimisée pour présenter les services et activités de la holding, tout en assurant une navigation fluide et une excellente compatibilité mobile.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Vitrine", "Holding", "Responsive"],
    projectLink: "https://nxbtech.github.io/nexabridge-hld/"
  },
  { 
    title: "Axis",
    category: "Développement Web",
    date: new Date("2024-02-10"), 
    img: Axis, 
    content: "Développement du site web pour Axis, une agence digitale spécialisée dans le sport. Le site présente les services de l'agence, ses études de cas, et offre une interface intuitive avec un design axé sur l'expérience utilisateur, entièrement conçu en HTML et CSS pour un rendu performant.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Sport", "Agence Digitale", "UX/UI"],
    projectLink: "https://nxbtech.github.io/AXIS/"
  },
  { 
    title: "Ever",
    category: "Développement Web",
    date: new Date("2024-03-15"), 
    img: Ever, 
    content: "Création d'un site web pour Ever, une agence de voyage et de publicité d'influence basée à Platja d'Aro. Ce projet a permis de mettre en avant l'offre touristique et les services de l'agence à travers un site moderne, responsive, avec une présentation visuelle engageante.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Agence de Voyage", "Publicité", "Design Moderne"],
    projectLink: "https://platjadaro.fr"
  },
  { 
    title: "Booki",
    category: "Développement Web",
    date: new Date("2024-04-20"), 
    img: Booki, 
    content: "Développement d'un site web de réservation d'hébergement pour la ville de Marseille. Ce projet a été conçu en HTML et CSS, avec un accent sur l'accessibilité et l'optimisation SEO pour améliorer la visibilité du site dans les moteurs de recherche.",
    technologies: ["HTML", "CSS", "SEO"],
    tags: ["Hébergement", "Marseille", "SEO"],
    projectLink: "https://nxbtech.github.io/booki-starter-code/"
  },
  { 
    title: "Kasa",
    category: "Développement Web",
    date: new Date("2024-05-30"), 
    img: Kasa, 
    content: "Développement d'une plateforme complète pour la gestion de locations de courte durée, intégrée avec des fonctionnalités de paiement sécurisé et de réservation en temps réel. Le projet utilise React pour un front-end interactif et Firebase pour la gestion des données.",
    technologies: ["React", "Firebase", "Node.js"],
    tags: ["Location", "Paiements", "Sécurité"],
    projectLink: ""
  },
  { 
    title: "Mon vieux grimoire",
    category: "Développement Web",
    date: new Date("2024-06-25"), 
    img: Grimoire, 
    content: "Développement d'une plateforme de gestion et de partage de fiches de lecture sur des livres anciens et contemporains. Ce projet a utilisé React pour le front-end et Node.js pour le back-end, permettant aux utilisateurs de créer, modifier et consulter des fiches détaillées.",
    technologies: ["React", "Node.js", "MongoDB"],
    tags: ["Livres", "Base de Données", "CRUD"],
    projectLink: ""
  },
  { 
    title: "Nina Carducci",
    category: "SEO & Maintenance",
    date: new Date("2024-07-15"), 
    img: Carducci, 
    content: "Travail de SEO et maintenance pour le site web d'une photographe freelance. Le projet visait à améliorer la visibilité du site dans les résultats de recherche Google tout en maintenant des performances optimales grâce à des optimisations régulières.",
    technologies: ["SEO", "WordPress", "Maintenance"],
    tags: ["Photographie", "SEO", "Maintenance"],
    projectLink: ""
  },
  { 
    title: "Sophie Bluel",
    category: "Développement Web",
    date: new Date("2024-08-01"), 
    img: SB, 
    content: "Création d'un portfolio interactif pour une photographe professionnelle. Le site, développé en JavaScript avec un back-end en Node.js, permet à l'artiste de présenter son travail avec des galeries dynamiques et une interface simple à mettre à jour.",
    technologies: ["JavaScript", "Node.js", "React"],
    tags: ["Photographie", "Portfolio", "Backend"],
    projectLink: ""
  },
  { 
    title: "Qwenta - Menu Maker",
    category: "Gestion de Projet",
    date: new Date("2024-09-15"), 
    img: Qwenta, 
    content: "Gestion de projet pour le développement d'une solution SaaS permettant aux restaurateurs de créer des menus en ligne personnalisés. Supervision des équipes techniques et collaboration étroite avec les parties prenantes pour garantir une livraison conforme aux attentes des utilisateurs finaux.",
    technologies: ["Gestion de Projet", "SaaS", "API", "Cloud"],
    tags: ["SaaS", "Gestion de Projet", "Restauration"],
    projectLink: ""
  },
  {
    title: "La Belle Époque",
    category: "Développement Web",
    date: new Date("2024-10-05"), 
    img: LaBelleEpoque, 
    content: "Développement d'un site web moderne et responsive pour l'hôtel La Belle Époque situé à Toulouse. Le site inclut une plateforme de réservation en ligne intuitive permettant aux clients de vérifier les disponibilités, choisir leurs chambres et effectuer des paiements sécurisés. Design élégant et expérience utilisateur optimisée pour refléter l'image haut de gamme de l'établissement.",
    technologies: ["HTML", "CSS", "JavaScript", "Plateforme de réservation"],
    tags: ["Hôtellerie", "Toulouse", "Responsive Design", "Réservation en ligne"],
    projectLink: null // Pas de lien public
  },
];


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const categories = [...new Set(projectData.map(project => project.category))];

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const selectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  // Limiter l'affichage du contenu sur les cartes à 100 caractères
  const getShortContent = (content) => {
    return content.length > 100 ? `${content.substring(0, 100)}...` : content;
  };

  const filteredProjects = projectData
    .filter(project => selectedCategory === 'all' || project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <PortfolioFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />

      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            content={getShortContent(project.content)}  // Limiter l'affichage du contenu
            img={project.img || DefaultImage}  // Afficher l'image par défaut si aucune n'est fournie
            date={project.date}
            onClick={() => openModal(index)} // Ouverture de la modale au clic
          />
        ))}
      </div>

      {selectedProjectIndex !== null && (
        <Modal
          project={projectData[selectedProjectIndex]}
          onClose={closeModal}
          projectData={projectData} // Pass projectData fpour le carousel
          selectProject={selectProject} // fonction pour naviguer a travers les projets
        />
      )}
    </div>
  );
};

export default Portfolio;