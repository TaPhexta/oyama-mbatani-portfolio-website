import AboutPreview from "../../components/AboutPreview/AboutPreview";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import ExperiencePreview from "../../components/ExperiencePreview/ExperiencePreview";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Hero from "../../components/Hero/Hero";
import SkillsSection from "../../components/SkillsSection/SkillsSection";

import personal from "../../data/personal.json";

import "./Home.css";

function Home() {
  return (
    <main id="home-page" className="home-page">
      <Hero personal={personal} />

      <AboutPreview />      

      <SkillsSection />

      <ExperiencePreview />
      
      <FeaturedProjects />

      <ContactCTA />
    </main>
  );
}

export default Home;
