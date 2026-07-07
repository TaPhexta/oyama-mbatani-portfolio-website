import "./ExperienceCard.css";

function ExperienceCard({ experience }) {

  console.log(experience);
  return (
    <article id="experience-card" className="experience-card">
      <img
        className="company-logo"
        src={experience.companyLogo}
        alt={experience.company}
      />

      <div className="experience-content">
        <h3>{experience.company}</h3>

        <h4>{experience.position}</h4>

        <p>
          {experience.startDate} - {experience.endDate}
        </p>

        <ul className="achievement-list">
          {experience.achievements?.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
