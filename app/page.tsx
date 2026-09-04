import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MLProjects from "@/components/MLProjects";
import Dashboards from "@/components/Dashboards";
import Projects from "@/components/Projects";
import News from "@/components/News";
import Service from "@/components/Service";
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
        <Education />
        <Experience />
        <Skills />
        <MLProjects />
        <Dashboards />
        <Projects />
        <News />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
