import "./ExperienceCard.css";

function ExperienceCard({ experience }) {
  return (
    <article id="experience-card" className="experience-card">
      <img
        className="company-logo"
        src={experience?.companyLogo}
        alt={experience?.company}
      />

      <h3>{experience?.company}</h3>

      <h4>{experience?.position}</h4>

      <p>
        {experience?.startDate} - {experience?.endDate}
      </p>
    </article>
  );
}

export default ExperienceCard;
