import { Gauge, Network, Truck, MessageSquareText, TrendingUp, HeartPulse, Factory, Leaf, Route, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { mlProjects } from "@/data/portfolio";

const projectIcons: Record<string, LucideIcon> = {
  "production-line-digital-twin": Factory,
  "lean-green-sewing-line": Leaf,
  "last-mile-delivery": Route,
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
      title="Projects"
      intro="Applied data science, machine learning, and simulation projects I've built end to end — digital twins, production and routing simulation, predictive maintenance, demand forecasting, and NLP. All published on my GitHub."
      accent="copper"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mlProjects.map((project, i) => {
          const Icon = projectIcons[project.repo] ?? Gauge;
          const index = String(i + 1).padStart(2, "0");
          return (
            <Reveal
              as="article"
              key={project.repo}
              delay={i * 60}
              className="group flex h-full flex-col border border-line border-t-2 border-t-copper/60 bg-panel/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-copper/50 hover:bg-panel hover:shadow-[0_20px_44px_-22px_rgba(22,33,62,0.13)]"
            >
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-copperSoft text-copper transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-copper">
                    {index} <span className="text-faint">&middot;</span> {project.relevance.split(" · ")[0]}
                  </span>
                </div>
                <h3 className="mt-3.5 text-[15px] font-semibold leading-snug text-ink">
                  {project.repo.replace(/[-_]/g, " ")}
                </h3>
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
              </div>
              <div className="flex items-center gap-2 border-t border-line p-4">
                <a
                  href={project.demoUrl ?? project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg bg-copper py-2 text-center text-[12.5px] font-semibold text-white transition-colors hover:bg-[#6f252d]"
                >
                  {project.demoUrl ? project.demoLabel ?? "View Demo" : "View Project"}
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg border border-line py-2 text-center text-[12.5px] font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
                >
                  View GitHub
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
