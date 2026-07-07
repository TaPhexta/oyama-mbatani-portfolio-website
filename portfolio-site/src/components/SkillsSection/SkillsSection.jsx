import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";

import skills from "../../data/skills.json";

import "./SkillsSection.css";

function SkillsSection() {
  return (
    <section id="skills-section" className="skills-section">
      <div className="skills-section-container">
        <SectionTitle>Skills</SectionTitle>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
