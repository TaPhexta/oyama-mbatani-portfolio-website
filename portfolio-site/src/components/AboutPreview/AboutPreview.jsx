import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";

import personal from "../../data/personal.json";

import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section id="about-preview" className="about-preview">
      <div className="about-preview-container">
        <SectionTitle>About Me</SectionTitle>

        <p className="about-preview-text">{personal.about}</p>

        <NavLink to="/about">
          <Button>Read More</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default AboutPreview;
