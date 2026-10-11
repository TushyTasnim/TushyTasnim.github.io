import { TimelineItem } from "@/data/portfolio";
import Reveal from "./Reveal";
import { accentStyles, type Accent } from "./Section";

export default function Timeline({
  items,
  accent = "brand",
}: {
  items: TimelineItem[];
  accent?: Accent;
}) {
  const a = accentStyles[accent];
  return (
    <div className="relative pl-8">
      <div aria-hidden className="absolute bottom-2 left-[5px] top-2 w-[2px] bg-line" />
      <ol className="space-y-9">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 110} className="relative">
            <span
              aria-hidden
              className={`absolute -left-8 top-2 h-3 w-3 rounded-full border-2 border-panel ${
                item.current ? `${a.bar} pulse-dot` : "bg-lineStrong"
              }`}
            />
            <p
              className={`font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] ${a.text}`}
            >
              {item.status}
            </p>
            <h3 className="mt-2 font-display text-[19px] font-bold leading-snug tracking-tight text-ink md:text-[21px]">
              {item.title}
            </h3>
            {item.org ? (
              <p className="mt-1 text-[14.5px] font-semibold text-ink/75">{item.org}</p>
            ) : null}
            <p className="mt-1.5 font-mono text-[12px] text-faint">{item.date}</p>
            {item.meta?.length ? (
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {item.meta.map((m) => (
                  <li
                    key={m}
                    className={`rounded-md px-2.5 py-1 text-[12.5px] font-semibold ${a.chip}`}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            ) : null}
            {item.bullets?.length ? (
              <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-4 text-[14.5px] leading-relaxed text-muted">
                {item.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
