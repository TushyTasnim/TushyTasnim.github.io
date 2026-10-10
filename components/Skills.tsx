import {
  FileSpreadsheet,
  BarChart3,
  Network,
  GitBranch,
  Layers,
  Sigma,
  Activity,
  Code2,
  Braces,
  Grid3x3,
  Table2,
  Brain,
  LineChart,
  AreaChart,
  Target,
  Globe,
  LayoutTemplate,
  Layout,
  Zap,
  Workflow,
  Boxes,
  Ruler,
  PenTool,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/portfolio";

const skillIcons: Record<string, LucideIcon> = {
  "MS Excel": FileSpreadsheet,
  "Google Sheets": FileSpreadsheet,
  "Power BI": BarChart3,
  SmartPLS: Network,
  "PLS-SEM": GitBranch,
  "ISM-MICMAC": Layers,
  "Linear Programming": Sigma,
  Simulation: Activity,
  Python: Code2,
  "C Language": Braces,
  NumPy: Grid3x3,
  Pandas: Table2,
  "scikit-learn": Brain,
  Matplotlib: LineChart,
  Seaborn: AreaChart,
  Gurobipy: Target,
  WordPress: Globe,
  Webflow: LayoutTemplate,
  Squarespace: Layout,
  Zapier: Zap,
  "Pabbly Connect": Workflow,
  Arena: Boxes,
  AutoCAD: Ruler,
  "Adobe Illustrator": PenTool,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      intro="Tools and methods I use across data analysis, research, and industrial systems work — from statistical modeling to dashboards to simulation."
      tint
      accent="teal"
    >
      <div className="relative">
        <div
          aria-hidden
          className="ambient-glow pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-copper/10 blur-[100px]"
        />
        <div
          aria-hidden
          className="ambient-glow-slow pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-[100px]"
        />
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 60}
              className="group flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-panel hover:shadow-[0_20px_44px_-24px_rgba(22,33,62,0.13)]"
            >
              <p className="text-[14.5px] font-semibold text-ink">{group.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = skillIcons[item] ?? Wrench;
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-deep px-3 py-1.5 text-[12.5px] font-medium text-muted backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-copper hover:text-ink hover:shadow-[0_10px_24px_-14px_rgba(140,47,57,0.25)]"
                    >
                      <Icon size={13} className="flex-none text-copper" strokeWidth={1.8} />
                      {item}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
