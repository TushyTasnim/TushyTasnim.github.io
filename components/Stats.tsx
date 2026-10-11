import Reveal from "./Reveal";
import { mlProjects, dashboards, skills, publications } from "@/data/portfolio";

const accents = [
  { value: "text-brand", chip: "bg-brandSoft", hover: "hover:border-brand/50" },
  { value: "text-teal", chip: "bg-tealSoft", hover: "hover:border-teal/50" },
  { value: "text-amber", chip: "bg-amberSoft", hover: "hover:border-amber/50" },
  { value: "text-brand", chip: "bg-brandSoft", hover: "hover:border-brand/50" },
];

const stats = [
  { value: `${mlProjects.length + dashboards.length}+`, label: "GitHub Projects" },
  { value: `${dashboards.length}`, label: "Dashboards Built" },
  {
    value: `${skills.reduce((total, group) => total + group.items.length, 0)}+`,
    label: "Tools & Technologies",
  },
  { value: `${publications.length}`, label: "Publications" },
];

export default function Stats() {
  return (
    <div className="relative border-y border-line bg-deep/60">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-10 md:grid-cols-4 md:px-10">
        {stats.map((stat, i) => {
          const a = accents[i % accents.length];
          return (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={`rounded-2xl border border-line bg-panel px-4 py-6 text-center shadow-[0_10px_30px_-22px_rgba(13,20,36,0.35)] transition-all duration-300 hover:-translate-y-1 ${a.hover}`}
            >
              <p
                className={`font-display text-[30px] font-extrabold tracking-tight md:text-[36px] ${a.value}`}
              >
                {stat.value}
              </p>
              <p className="mt-1.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-faint">
                {stat.label}
              </p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
