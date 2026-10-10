import Section from "./Section";
import Reveal from "./Reveal";
import ProjectIllustration from "./ProjectIllustration";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Academic Projects" accent="copper">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={i * 90}>
            <div className="group flex h-full flex-col border border-line border-t-2 border-t-copper/60 bg-panel/80 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-lineStrong hover:shadow-[0_24px_50px_-22px_rgba(22,33,62,0.13)]">
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-panel">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <ProjectIllustration variant={project.illustration} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-medium leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-copperSoft px-2 py-1 font-mono text-[11px] text-copper"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
