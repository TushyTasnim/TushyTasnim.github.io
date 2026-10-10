import Section from "./Section";
import Reveal from "./Reveal";
import { ongoingResearch, type OngoingResearchItem } from "@/data/portfolio";

type Status = OngoingResearchItem["status"];

// Tailwind only picks up class names it can see as literals, so each status
// maps to a full set of strings rather than an interpolated colour name.
const statusStyles: Record<
  Status,
  { rule: string; label: string; chip: string; caption: string }
> = {
  Submitted: {
    rule: "border-teal",
    label: "text-teal",
    chip: "bg-tealSoft text-teal",
    caption: "Under review",
  },
  Ongoing: {
    rule: "border-copper",
    label: "text-copper",
    chip: "bg-copperSoft text-copper",
    caption: "In progress",
  },
};

const groups: Status[] = ["Submitted", "Ongoing"];

function ResearchEntry({ item, delay }: { item: OngoingResearchItem; delay: number }) {
  const s = statusStyles[item.status];
  return (
    <Reveal as="article" delay={delay}>
      <div className={`border-l-2 ${s.rule} py-1 pl-6`}>
        <p className={`font-mono text-[11px] uppercase tracking-wide ${s.label}`}>
          {item.status}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink md:text-[22px]">
          {item.title}
        </h3>
        {item.authors ? (
          <p className="mt-2 font-mono text-[12px] text-faint">{item.authors}</p>
        ) : null}
        <p className="mt-3 text-[15px] leading-[1.75] text-muted">
          {item.summary}
        </p>
        {item.tools?.length ? (
          <div className="mt-4">
            <p className="font-mono text-[10.5px] uppercase tracking-wide text-faint">
              Tools &amp; Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className={`rounded-sm px-2 py-1 font-mono text-[11px] ${s.chip}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {item.focus?.length ? (
          <div className="mt-4">
            <p className="font-mono text-[10.5px] uppercase tracking-wide text-faint">
              Key Focus
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.focus.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line px-2.5 py-1 text-[12px] text-muted"
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
      title="Ongoing &amp; Submitted Research"
      tint
      accent="teal"
    >
      <div className="space-y-14">
        {groups.map((status) => {
          const items = ongoingResearch.filter((item) => item.status === status);
          if (items.length === 0) return null;
          const s = statusStyles[status];
          return (
            <div key={status}>
              <Reveal>
                <div className="mb-7 flex items-baseline gap-3">
                  <h3 className="font-display text-[22px] font-medium text-ink">
                    {status}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-faint">
                    {s.caption} &middot; {items.length}
                  </span>
                </div>
              </Reveal>
              <div className="space-y-12">
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
