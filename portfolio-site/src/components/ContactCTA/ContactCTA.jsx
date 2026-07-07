import { NavLink } from "react-router-dom";

import Button from "../Button/Button";

import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section id="contact-cta" className="contact-cta">
      <div className="contact-cta-container">
        <h2>Let's Build Something Together</h2>

        <p>
          I'm always open to discussing opportunities, collaborations, or
          exciting new projects.
        </p>

        <NavLink to="/contact">
          <Button>Contact Me</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default ContactCTA;
