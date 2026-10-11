import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About" index={1} accent="brand" tint>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-[16px] leading-[1.75] text-ink/85">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <div className="rounded-2xl border border-line bg-deep/70 p-6">
          <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-faint">
            Research areas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.researchAreas.map((item) => (
              <span
                key={item}
                className="rounded-full bg-panel px-3 py-1.5 text-[12.5px] font-semibold text-ink shadow-[0_2px_8px_-4px_rgba(13,20,36,0.3)] ring-1 ring-line transition-colors hover:text-brand hover:ring-brand/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
