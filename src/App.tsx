import { Navigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      <Navigation />
      
      <section id="home" className="scroll-mt-20 sm:scroll-mt-24">
        <HomeSection />
      </section>
      
      <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
        <AboutSection />
      </section>
      
      <section id="skills" className="scroll-mt-20 sm:scroll-mt-24">
        <SkillsSection />
      </section>
      
      <section id="projects" className="scroll-mt-20 sm:scroll-mt-24">
        <ProjectsSection />
      </section>
      
      <section id="contact" className="scroll-mt-20 sm:scroll-mt-24">
        <ContactSection />
      </section>
    </div>
  );
}