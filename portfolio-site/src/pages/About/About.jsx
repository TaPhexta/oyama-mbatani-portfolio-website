import SectionTitle from "../../components/SectionTitle/SectionTitle";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import experience from "../../data/experience.json";

function About() {
  return (
    <main>
      <SectionTitle>About Me</SectionTitle>

      <section>
        {experience.map((experienceItem) => (
          <ExperienceCard key={experienceItem.id} experience={experienceItem} />
        ))}
      </section>
    </main>
  );
}

export default About;
