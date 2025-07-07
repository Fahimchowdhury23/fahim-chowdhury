import React, { useEffect } from "react";
import Myself from "../Components/Myself";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import ScrollRevealSection from "../Components/ScrollRevealSection";
import { useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = document.getElementById(location.hash.substring(1));
      if (id) {
        setTimeout(() => {
          id.scrollIntoView({ behavior: "smooth" });
        }, 50); // slight delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <section>
      <ScrollRevealSection>
        <section id="myself">
          <Myself />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection>
        <section id="projects">
          <Projects />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection>
        <section id="contact">
          <Contact />
        </section>
      </ScrollRevealSection>
    </section>
  );
};

export default Layout;
