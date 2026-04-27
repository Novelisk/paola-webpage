import { useState } from 'react';
import { projects } from '../data/projects';
import { BiMovie } from 'react-icons/bi';
import { GiCharacter } from 'react-icons/gi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('doblaje');
  const filteredProjects = projects.filter(
    (project) => project.type === activeTab,
  );

  return (
    <section id="proyectos" className="projects">
      <div className="projects-header">
        <h2 className="projects-header__title">Proyectos</h2>
        <p className="projects-header__description">
          Aquí tienes algunos de mis proyectos más recientes.
        </p>
      </div>

      <div className="projects-selector">
        <button
          className={`projects-tab ${activeTab === 'doblaje' ? 'active' : ''}`}
          onClick={() => setActiveTab('doblaje')}
        >
          Doblaje
        </button>
        <button
          className={`projects-tab ${activeTab === 'direcciones' ? 'active' : ''}`}
          onClick={() => setActiveTab('direcciones')}
        >
          Direcciones
        </button>
      </div>

      <div className="projects-content">
        {filteredProjects.length === 0 ? (
          <p className="projects-no-results">
            No hay proyectos para esta categoría.
          </p>
        ) : (
          filteredProjects.map((project) => {
            const StreamingIcon = project.streamingIcon;
            const WikiIcon = project.wikiIcon;

            return (
              <div key={project.id} className="project-card">
                <div className="project-card__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                  <div className="project-card__info">
                    <div className="project-card__info-container">
                      <div className="project-card__title-container">
                        <BiMovie
                          size={20}
                          className="project-card__title-icon"
                        />
                        <h3 className="project-card__title">{project.title}</h3>
                      </div>

                      <div className="project-card__character-container">
                        <GiCharacter
                          size={20}
                          className="project-card__character-icon"
                        />
                        <p className="project-card__character">
                          {project.character}
                        </p>
                      </div>

                      <div className="project-card__release-year-container">
                        <FaRegCalendarAlt
                          size={20}
                          className="project-card__release-year-icon"
                        />
                        <p className="project-card__release-year">
                          {project.releaseYear}
                        </p>
                      </div>
                    </div>

                    <div className="project-card__links">
                      <div className="project-card__streaming-container">
                        <StreamingIcon size={20} />
                        <a
                          href={project.streamingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__streaming-link"
                        >
                          Ver en streaming
                        </a>
                      </div>

                      <div className="project-card__wiki-container">
                        <WikiIcon size={20} />
                        <a
                          href={project.wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__wiki-link"
                        >
                          Ver en Wiki
                        </a>
                      </div>

                      <div className="project-card__studio-container">
                        <p className="project-card__studio-description">
                          Estudio de doblaje:
                        </p>
                        <a
                          href={project.studioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__studio-link"
                        >
                          {project.studioName}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Projects;
