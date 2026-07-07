import SectionTitle from "../../components/SectionTitle/SectionTitle";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import SkillCard from "../../components/SkillCard/SkillCard";

import personal from "../../data/personal.json";
import experience from "../../data/experience.json";
import education from "../../data/education.json";
import certifications from "../../data/certifications.json";
import skills from "../../data/skills.json";

import "./About.css";

function About() {
  return (
    <main id="about-page" className="about-page">
      {/* ABOUT */}

      <section id="about-section" className="about-section">
        <div className="about-container">
          <SectionTitle>About Me</SectionTitle>

          <p className="about-text">{personal.about}</p>
        </div>
      </section>

      {/* EDUCATION */}

      <section id="education-section" className="education-section">
        <div className="education-container">
          <SectionTitle>Education</SectionTitle>

          {education.map((educationItem) => (
            <article key={educationItem.id} className="education-card">
              <h3>{educationItem.qualification}</h3>

              <h4>{educationItem.institution}</h4>

              <p>
                {educationItem.startDate} - {educationItem.endDate}
              </p>

              <p>{educationItem.fieldOfStudy}</p>

              <h5>Skills Covered</h5>

              <ul>
                {educationItem.skillsCovered.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience-section" className="experience-section">
        <div className="experience-container">
          <SectionTitle>Experience</SectionTitle>

          {experience.map((experienceItem) => (
            <ExperienceCard
              key={experienceItem.id}
              experience={experienceItem}
            />
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section id="certifications-section" className="certifications-section">
        <div className="certifications-container">
          <SectionTitle>Certifications</SectionTitle>

          {certifications.map((certification) => (
            <article key={certification.id} className="certification-card">
              <h3>{certification.name}</h3>

              <h4>{certification.issuer}</h4>

              <p>{certification.issueDate}</p>

              <ul>
                {certification.skillsCovered.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills-section" className="skills-section">
        <div className="skills-container">
          <SectionTitle>Technical Skills</SectionTitle>

          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
