import Section from "./Section";
import Reveal from "./Reveal";
import { dashboards } from "@/data/portfolio";

export default function Dashboards() {
  return (
    <Section
      id="dashboards"
      title="Dashboards"
      intro="Business-intelligence dashboards built in Power BI and Excel — turning raw operational data into decision-ready visuals."
      tint
      accent="teal"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dashboards.map((project, i) => (
          <Reveal
            as="article"
            key={project.repo}
            delay={i * 70}
            className="group flex h-full flex-col overflow-hidden border border-line border-t-2 border-t-teal/60 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-lineStrong hover:shadow-[0_24px_50px_-22px_rgba(232,93,143,0.4)]"
          >
            <a href={project.url} target="_blank" rel="noreferrer" className="flex flex-1 flex-col">
              <div className="aspect-[1200/630] w-full overflow-hidden border-b border-line bg-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image ?? `https://opengraph.githubassets.com/1/TushyTasnim/${project.repo}`}
                  alt={`${project.repo} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pb-0">
                <p className="font-mono text-[12px] text-ink/80">{project.repo}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-teal">
                  {project.relevance}
                </p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 p-6 pt-5">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-block w-fit text-[13px] font-semibold text-teal"
              >
                View on GitHub
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-block w-fit text-[13px] font-semibold text-copper"
                >
                  {project.demoLabel ?? "Live Demo"}
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
