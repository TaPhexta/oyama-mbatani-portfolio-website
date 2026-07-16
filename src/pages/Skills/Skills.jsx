import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import skills from "../../data/skills.json";

function Skills() {
  return (
    <main id="skills-page" className="skills-page">
      <SectionTitle>Skills</SectionTitle>

      <section className="skills-container">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </section>
    </main>
  );
}

export default Skills;
