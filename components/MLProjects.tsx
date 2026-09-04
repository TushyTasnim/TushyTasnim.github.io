import { Gauge, Network, Truck, MessageSquareText, TrendingUp, HeartPulse, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { mlProjects } from "@/data/portfolio";

const projectIcons: Record<string, LucideIcon> = {
  "XGBoost-Based-Predictive-Maintenance-System": Gauge,
  supply_chain_optimization_projects: Network,
  "late-delivery-predictive-analytics-in-supply-chain-using-ML-HistGradientBoostingModel": Truck,
  "Emotion-Detection-NLP-and-ML": MessageSquareText,
  "Demand-Forecasting-App": TrendingUp,
  "heart-disease-prediction": HeartPulse,
};

export default function MLProjects() {
  return (
    <Section
      id="ml-projects"
      title="Data & ML Projects"
      intro="Applied data science, machine learning, and business-intelligence projects I've built end to end — predictive maintenance, demand forecasting, NLP, and dashboards. All published on my GitHub."
      accent="copper"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mlProjects.map((project, i) => {
          const Icon = projectIcons[project.repo] ?? Gauge;
          return (
            <Reveal
              as="article"
              key={project.repo}
              delay={i * 60}
              className="group flex h-full flex-col border border-line border-t-2 border-t-copper/60 bg-panel/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-copper/50 hover:bg-panel/50 hover:shadow-[0_20px_44px_-22px_rgba(242,136,75,0.4)]"
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-copperSoft text-copper transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wide text-copper">
                    {project.relevance}
                  </span>
                </div>
                <p className="mt-3.5 font-mono text-[12px] text-ink/80">{project.repo}</p>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line px-5 py-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-block w-fit text-[12.5px] font-semibold text-copper"
                >
                  View on GitHub
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-block w-fit text-[12.5px] font-semibold text-copper"
                  >
                    {project.demoLabel ?? "Live Demo"}
                  </a>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
