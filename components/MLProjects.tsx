import {
  Gauge,
  Network,
  Truck,
  MessageSquareText,
  TrendingUp,
  HeartPulse,
  Factory,
  Leaf,
  Route,
  type LucideIcon,
} from "lucide-react";
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
      index={7}
      accent="brand"
      tint
      intro="Data science, machine learning, and simulation projects built end to end — all published on GitHub."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mlProjects.map((project, i) => {
          const Icon = projectIcons[project.repo] ?? Gauge;
          return (
            <Reveal
              as="article"
              key={project.repo}
              delay={i * 60}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_22px_48px_-24px_rgba(67,56,202,0.32)]"
            >
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brandSoft text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-faint">
                    {project.relevance.split(" · ")[0]}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15.5px] font-extrabold capitalize leading-snug tracking-tight text-ink">
                  {project.repo.replace(/[-_]/g, " ")}
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
              <div className="flex items-center gap-2 border-t border-line p-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-lg bg-brand py-2 text-center text-[12.5px] font-bold text-white transition-colors hover:bg-brandDeep"
                  >
                    {project.demoLabel ?? "View Demo"}
                  </a>
                ) : null}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 rounded-lg py-2 text-center text-[12.5px] font-bold transition-colors ${
                    project.demoUrl
                      ? "border border-line text-ink hover:border-brand hover:text-brand"
                      : "bg-brand text-white hover:bg-brandDeep"
                  }`}
                >
                  View on GitHub
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
