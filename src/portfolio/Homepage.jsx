import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClickSpark from "../reactbits/clickhere";
import HeroSection from "./herosection";
import AboutSection from "./Aboutsection";

import ProjectsSection from "./projectsection";
import SkillsSection from "./skillssection";
import CertificationsSection from "./Certifications";
import ContactSection from "./contactsection";
import Footer from "./footer";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Use a slight delay to allow the page to fully mount
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay works well
    }
  }, [location]);

  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </ClickSpark>
    </>
  );
}
