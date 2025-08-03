import { siteConfig } from "@/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import EducationSection from "@/components/EducationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header siteConfig={siteConfig} />
      <main>
        <Hero siteConfig={siteConfig} />
        <Section id="projects">
          <ProjectsGrid siteConfig={siteConfig} />
        </Section>
        <Section id="experience">
          <ExperienceTimeline siteConfig={siteConfig} />
        </Section>
        <Section id="skills">
          <SkillsGrid siteConfig={siteConfig} />
        </Section>
        <Section id="education">
          <EducationSection siteConfig={siteConfig} />
        </Section>
        <Section id="contact">
          <ContactForm siteConfig={siteConfig} />
        </Section>
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  );
}
