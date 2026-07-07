import Button from "../Button/Button";

import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article id="project-card" className="project-card">
      <img
        className="project-image"
        src={project.thumbnail}
        alt={project.title}
      />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index} className="technology-badge">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button>Live Demo</Button>
          </a>

          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button>GitHub</Button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
