import Section from "./Section";
import Reveal from "./Reveal";
import ProjectIllustration from "./ProjectIllustration";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Academic Projects" index={9} accent="amber" tint>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={i * 90}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber/50 hover:shadow-[0_22px_48px_-24px_rgba(180,83,9,0.28)]">
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-deep">
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
                <h3 className="font-display text-[17px] font-extrabold leading-snug tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-amberSoft px-2 py-1 font-mono text-[10.5px] font-medium text-amber"
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
