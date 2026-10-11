import Section from "./Section";
import Reveal from "./Reveal";
import { ongoingResearch, type OngoingResearchItem } from "@/data/portfolio";

type Status = OngoingResearchItem["status"];

// Tailwind only picks up class names it can see as literals, so each status
// maps to a full set of strings rather than an interpolated colour name.
const statusStyles: Record<
  Status,
  { rail: string; label: string; chip: string; hover: string; caption: string }
> = {
  Submitted: {
    rail: "bg-brand",
    label: "bg-brandSoft text-brand",
    chip: "bg-brandSoft text-brand",
    hover: "hover:border-brand/50",
    caption: "Under review",
  },
  Ongoing: {
    rail: "bg-teal",
    label: "bg-tealSoft text-teal",
    chip: "bg-tealSoft text-teal",
    hover: "hover:border-teal/50",
    caption: "In progress",
  },
};

const groups: Status[] = ["Submitted", "Ongoing"];

function ResearchEntry({ item, delay }: { item: OngoingResearchItem; delay: number }) {
  const s = statusStyles[item.status];
  return (
    <Reveal as="article" delay={delay}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-panel p-6 shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)] transition-all duration-300 hover:-translate-y-1 ${s.hover} md:p-7`}
      >
        <span aria-hidden className={`absolute inset-y-0 left-0 w-1 ${s.rail}`} />
        <span
          className={`inline-block rounded-md px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] ${s.label}`}
        >
          {item.status}
        </span>
        <h3 className="mt-3 font-display text-[19px] font-bold leading-snug tracking-tight text-ink md:text-[21px]">
          {item.title}
        </h3>
        {item.authors ? (
          <p className="mt-2 font-mono text-[11.5px] text-faint">{item.authors}</p>
        ) : null}
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">
          {item.summary}
        </p>
        {item.tools?.length ? (
          <div className="mt-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
              Tools
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className={`rounded-md px-2 py-1 font-mono text-[11px] font-medium ${s.chip}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {item.focus?.length ? (
          <div className="mt-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
              Key focus
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.focus.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line px-2.5 py-1 text-[12px] font-medium text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export default function OngoingResearch() {
  return (
    <Section
      id="ongoing-research"
      title="Ongoing & Submitted Research"
      index={4}
      accent="brand"
    >
      <div className="space-y-12">
        {groups.map((status) => {
          const items = ongoingResearch.filter((item) => item.status === status);
          if (items.length === 0) return null;
          const s = statusStyles[status];
          return (
            <div key={status}>
              <Reveal>
                <div className="mb-6 flex items-baseline gap-3">
                  <h3 className="font-display text-[20px] font-extrabold tracking-tight text-ink">
                    {status}
                  </h3>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                    {s.caption} &middot; {items.length}
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-4">
                {items.map((item, i) => (
                  <ResearchEntry key={item.title} item={item} delay={i * 110} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
