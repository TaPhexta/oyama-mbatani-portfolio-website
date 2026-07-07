import SectionTitle from "../../components/SectionTitle/SectionTitle";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import experience from "../../data/experience.json";
// import education from "../../data/education.json";

function About() {
  return (
    <main>
      <SectionTitle>About Me</SectionTitle>

      {/*<section>
        {education?.map((educationItem) => (
          education={educationItem} 
        ))}
      </section>*/}

      <section>
        {experience.map((experienceItem) => (
          <ExperienceCard key={experienceItem.id} experience={experienceItem} />
        ))}
      </section>
    </main>
  );
}

export default About;
