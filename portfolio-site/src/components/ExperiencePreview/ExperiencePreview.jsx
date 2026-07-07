import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import experience from "../../data/experience.json";

import "./ExperiencePreview.css";

function ExperiencePreview() {
  const latestExperience = experience.slice(0, 1);

  return (
    <section id="experience-preview" className="experience-preview">
      <div className="experience-preview-container">
        <SectionTitle>Experience</SectionTitle>

        {latestExperience.map((experienceItem) => (
          <ExperienceCard key={experienceItem.id} experience={experienceItem} />
        ))}

        <NavLink to="/about">
          <Button>View Full Experience</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default ExperiencePreview;
