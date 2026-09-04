import Section from "./Section";
import { about } from "@/data/portfolio";

function TagList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-faint">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-sm border border-line px-2.5 py-1 text-[12.5px] text-ink/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About" accent="copper">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-prose space-y-5 text-[15px] leading-relaxed text-ink/90">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <div className="border-t border-line pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <TagList label="Research areas" items={about.researchAreas} />
        </div>
      </div>
    </Section>
  );
}
