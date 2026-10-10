import Reveal from "./Reveal";
import { mlProjects, dashboards, skills, publications } from "@/data/portfolio";

const stats = [
  {
    value: `${mlProjects.length + dashboards.length}+`,
    label: "GitHub Projects",
  },
  {
    value: `${dashboards.length}`,
    label: "Dashboards Built",
  },
  {
    value: `${skills.reduce((total, group) => total + group.items.length, 0)}+`,
    label: "Tools & Technologies",
  },
  {
    value: `${publications.length}`,
    label: "Publications",
  },
];

export default function Stats() {
  return (
    <div className="border-y border-line bg-panel/70">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-10 md:grid-cols-4 md:px-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="rounded-xl border border-line bg-deep px-4 py-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-copper/50"
          >
            <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-wide text-faint">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
