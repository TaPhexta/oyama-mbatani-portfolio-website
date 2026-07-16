import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import { NavLink } from "react-router-dom";
import socials from "../../data/socials.json";

import "./Hero.css";

function Hero({ personal }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">{personal.fullName}</h1>

          <h2 className="hero-job-title">{personal.jobTitle}</h2>

          <p className="hero-description">{personal.heroDescription}</p>

          <div className="hero-button-group">
            <NavLink to="/projects">
              <Button>View Projects</Button>
            </NavLink>

            <NavLink to="/contact">
              <Button>Contact Me</Button>
            </NavLink>
          </div>

          <SocialLinks socials={socials} />
        </div>

        <div className="hero-image-container">
          <img
            className="hero-image"
            src={personal.profileImage}
            alt={personal.fullName}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
