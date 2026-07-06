import "./SkillCard.css";

function SkillCard({ skill }) {
  return (
    <article id="skill-card" className="skill-card">
      <h3 className="skill-name">{skill?.name}</h3>

      <p className="skill-category">{skill?.category}</p>

      <p className="skill-experience">{skill?.yearsExperience} Years</p>
    </article>
  );
}

export default SkillCard;
