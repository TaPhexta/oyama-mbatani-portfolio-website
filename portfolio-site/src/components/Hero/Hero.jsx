import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";

import "./Hero.css";

function Hero({ personal }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">{personal?.fullName}</h1>

          <h2 className="hero-title">{personal?.jobTitle}</h2>

          <p className="hero-description">{personal?.heroDescription}</p>

          <div className="hero-buttons">
            <Button>View Projects</Button>

            <Button>Contact Me</Button>
          </div>

          <SocialLinks />
        </div>

        <div className="hero-image-container">
          <img
            className="hero-image"
            src={personal?.profileImage}
            alt={personal?.fullName}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
