import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import OngoingResearch from "@/components/OngoingResearch";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MLProjects from "@/components/MLProjects";
import Dashboards from "@/components/Dashboards";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <OngoingResearch />
        <Education />
        <Experience />
        <Skills />
        <MLProjects />
        <Dashboards />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
