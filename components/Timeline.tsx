import { TimelineItem } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8">
      <div
        aria-hidden
        className="absolute bottom-2 left-[5px] top-2 w-px bg-line"
      />
      <ol className="space-y-10">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 110} className="relative">
            <span
              aria-hidden
              className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                item.current
                  ? "border-copper bg-copper shadow-[0_0_0_0_rgba(140,47,57,0.5)] animate-[softPulse_2.6s_ease-in-out_infinite]"
                  : "border-teal bg-deep"
              }`}
            />
            <p className="font-mono text-[11px] uppercase tracking-wide text-copper">
              {item.status}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-medium text-ink md:text-[22px]">
              {item.title}
            </h3>
            {item.org ? (
              <p className="mt-1 text-[14.5px] font-medium text-ink/80">{item.org}</p>
            ) : null}
            <p className="mt-1.5 font-mono text-[12.5px] text-faint">{item.date}</p>
            {item.meta?.length ? (
              <ul className="mt-2 space-y-0.5 text-[14px] text-muted">
                {item.meta.map((m) => (
                  <li key={m}>{m}</li>
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
