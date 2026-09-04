import Section from "./Section";
import Reveal from "./Reveal";
import { publications } from "@/data/portfolio";

export default function Research() {
  return (
    <Section id="research" title="Research & Publications" tint accent="teal">
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal as="article" key={pub.title} delay={i * 110}>
            <div
              className={`border-l-2 py-1 pl-6 transition-colors duration-300 ${
                pub.type === "Journal" ? "border-teal" : "border-copper"
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                {pub.type} · {pub.date} · {pub.venue}
              </p>
              <h3 className="mt-2 max-w-prose font-display text-xl font-medium leading-snug text-ink md:text-[22px]">
                {pub.title}
              </h3>
              <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-muted">
                {pub.summary}
              </p>
              <a
                href={pub.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-4 inline-block text-[13px] font-semibold text-copper"
              >
                Read the paper
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
