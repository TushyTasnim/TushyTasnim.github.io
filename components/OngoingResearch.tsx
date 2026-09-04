import Section from "./Section";
import Reveal from "./Reveal";
import { ongoingResearch } from "@/data/portfolio";

export default function OngoingResearch() {
  return (
    <Section id="ongoing-research" title="Ongoing Research" accent="copper">
      <div className="space-y-6">
        {ongoingResearch.map((item, i) => (
          <Reveal as="article" key={item.title} delay={i * 110}>
            <div className="border-l-2 border-copper py-1 pl-6">
              <p className="font-mono text-[11px] uppercase tracking-wide text-copper">
                Ongoing
              </p>
              <h3 className="mt-2 max-w-prose font-display text-xl font-medium leading-snug text-ink md:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-muted">
                {item.summary}
              </p>
              {item.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-copperSoft px-2 py-1 font-mono text-[11px] text-copper"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
