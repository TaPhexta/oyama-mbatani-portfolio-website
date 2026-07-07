import { NavLink } from "react-router-dom";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../Button/Button";

import projects from "../../data/projects.json";

import "./FeaturedProjects.css";

function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="featured-projects" className="featured-projects">
      <div className="featured-projects-container">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <NavLink to="/projects">
          <Button>View All Projects</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default FeaturedProjects;
