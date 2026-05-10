import React from 'react';
import './styles/modal.scss';

const Modal = ({ project, onClose, projectData, selectProject }) => {
  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>X</button>

        {/* Section principale */}
        <div className="modal__main">
          <div className="modal__header">
            <h2>{project.title}</h2>
            <p>{new Date(project.date).toLocaleDateString()}</p>
          </div>

          <div className="modal__body">
            <img src={project.img} alt={project.title} className="modal__image" />
            <p>{project.content}</p>
          </div>

          {/* Carousel des projets en bas */}
          <div className="modal__carousel">
            {projectData &&
              projectData.length > 0 &&
              projectData.map((p, index) => (
                <div
                  key={index}
                  className={`modal__carousel-item ${p.title === project.title ? 'active' : ''}`}
                  onClick={() => selectProject(index)}
                >
                  <img src={p.img} alt={p.title} className="modal__carousel-image" />
                </div>
              ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="modal__sidebar">
          {project.technologies && (
            <>
              <h3>Technologies utilisées</h3>
              <ul className="modal__technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          {project.tags && (
            <>
              <h3>Tags</h3>
              <div className="modal__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="modal__tag">{tag}</span>
                ))}
              </div>
            </>
          )}

          {/* Vérification de la présence d'un lien */}
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__link"
            >
              Voir le projet
            </a>
          ) : (
            <div className="modal__no-link">
              Ce projet n'est pas accessible publiquement.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;