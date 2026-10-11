import Section from "./Section";
import Reveal from "./Reveal";
import { publications } from "@/data/portfolio";

export default function Research() {
  return (
    <Section
      id="research"
      title="Research & Publications"
      index={3}
      accent="amber"
      tint
    >
      <div className="grid gap-4">
        {publications.map((pub, i) => (
          <Reveal as="article" key={pub.title} delay={i * 110}>
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-6 shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_20px_44px_-24px_rgba(180,83,9,0.3)] md:p-7">
              <span
                aria-hidden
                className={`absolute inset-y-0 left-0 w-1 ${
                  pub.type === "Journal" ? "bg-amber" : "bg-brand"
                }`}
              />
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] ${
                    pub.type === "Journal"
                      ? "bg-amberSoft text-amber"
                      : "bg-brandSoft text-brand"
                  }`}
                >
                  {pub.type}
                </span>
                <span className="font-mono text-[11.5px] text-faint">{pub.date}</span>
              </div>
              <h3 className="mt-3 font-display text-[19px] font-bold leading-snug tracking-tight text-ink md:text-[22px]">
                {pub.title}
              </h3>
              <p className="mt-2 text-[13px] font-semibold text-muted">{pub.venue}</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted">
                {pub.summary}
              </p>
              <a
                href={pub.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-amber"
              >
                Read the paper
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  &#8594;
                </span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
