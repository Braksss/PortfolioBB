import React, { useState } from 'react';
import './styles/aboutCarousel.scss';

const NexabridgeCollapse = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Mon Parcours',
      content: (
        <>
        Avec une expérience approfondie dans le domaine de l'assistance technique et audiovisuelle, je combine cette expérience avec mon activité de <span className="important">développeur web freelance</span>. Mon parcours m'a permis de maîtriser la gestion de l'assistance technique et le développement de solutions web modernes. Je mets à profit mes compétences pour concevoir des applications adaptées aux besoins spécifiques des entreprises.
      </>
      )
    },
    {
      title: 'Mes Services',
      content: (
        <>
          Je propose des services sur mesure :
          <ul>
            <li>Développement front-end avec <span className="highlight">React</span></li>
            <li>Développement back-end en utilisant <span className="highlight">Node.js</span> et <span className="highlight">MongoDB</span></li>
            <li>Gestion complète de projets IT, de la conception à la mise en production</li>
            <li>Accompagnement des entreprises dans leur <span className="important">transformation digitale</span></li>
          </ul>
        </>
      )
    },
    {
      title: 'Mes Compétences',
      content: (
        <>
          J'ai acquis une expertise solide dans plusieurs domaines :
          <ul>
            <li><span className="highlight">Hardware</span> et support technique informatique</li>
            <li>Développement web avec <span className="highlight">PHP</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, HTML, et CSS</li>
            <li>Programmation back-end avec <span className="highlight">Node.js</span> et Express</li>
            <li>Gestion et sécurisation des bases de données</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="nexabridge-collapse">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`nexabridge-collapse__section ${openIndex === index ? 'open' : ''}`}
        >
          <div className="nexabridge-collapse__header" onClick={() => toggleSection(index)}>
            <h3>{section.title}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>

          <div className="nexabridge-collapse__content" style={{ maxHeight: openIndex === index ? '500px' : '0px' }}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NexabridgeCollapse;
