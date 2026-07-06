import Button from "../Button/Button";

import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article id="project-card" className="project-card">
      <img
        className="project-image"
        src={project?.image}
        alt={project?.title}
      />

      <div className="project-content">
        <h3>{project?.title}</h3>

        <p>{project?.description}</p>

        <div className="project-technologies">
          {/* Technologies will be mapped later */}
        </div>

        <div className="project-buttons">
          <Button>Live Demo</Button>

          <Button>GitHub</Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
