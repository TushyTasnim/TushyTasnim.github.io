import Section from "./Section";
import Reveal from "./Reveal";
import { dashboards } from "@/data/portfolio";

export default function Dashboards() {
  return (
    <Section
      id="dashboards"
      title="Dashboards"
      index={8}
      accent="teal"
      intro="Business-intelligence dashboards that turn operational data into decision-ready visuals."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dashboards.map((project, i) => (
          <Reveal
            as="article"
            key={project.repo}
            delay={i * 70}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/50 hover:shadow-[0_22px_48px_-24px_rgba(15,118,110,0.3)]"
          >
            <a href={project.url} target="_blank" rel="noreferrer" className="flex flex-1 flex-col">
              <div className="aspect-[1200/630] w-full overflow-hidden border-b border-line bg-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image ?? `https://opengraph.githubassets.com/1/TushyTasnim/${project.repo}`}
                  alt={`${project.repo} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-teal">
                  {project.relevance}
                </p>
                <h3 className="mt-2.5 font-display text-[15.5px] font-extrabold leading-snug tracking-tight text-ink">
                  {project.repo.replace(/-/g, " ")}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-deep px-2 py-1 font-mono text-[10.5px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <div className="flex items-center gap-2 border-t border-line p-4">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg bg-teal py-2 text-center text-[12.5px] font-bold text-white transition-colors hover:bg-tealDeep"
                >
                  {project.demoLabel ?? "Live Demo"}
                </a>
              ) : null}
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg border border-line py-2 text-center text-[12.5px] font-bold text-ink transition-colors hover:border-teal hover:text-teal"
              >
                View on GitHub
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
