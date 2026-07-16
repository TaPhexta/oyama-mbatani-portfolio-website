import SectionTitle from "../../components/SectionTitle/SectionTitle";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects.json";

function Projects() {
  return (
    <main id="projects-page" className="projects-page">
      <SectionTitle>Projects</SectionTitle>

      <section className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
