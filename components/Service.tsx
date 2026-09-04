import Section from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import ActivityIcon from "./ActivityIcon";
import { service, activities } from "@/data/portfolio";

export default function Service() {
  return (
    <Section id="service" index="10" title="Leadership & Service" tint accent="teal">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <Reveal className="flex flex-row items-center gap-6 border border-line border-t-2 border-t-teal/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-22px_rgba(232,93,143,0.35)] md:flex-col md:items-start">
          <span className="font-display text-5xl font-medium text-copper">
            <CountUp target={service.awardCount} />
          </span>
          <span className="text-[13px] text-muted">Honors &amp; scholarships</span>
        </Reveal>

        <div className="space-y-6">
          {service.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="border-l-2 border-line pb-6 pl-5 transition-colors duration-300 last:pb-0 hover:border-teal"
            >
              <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="mb-5 text-[14.5px] font-semibold text-ink">
          Activities &amp; certifications
        </p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 80}
              className="flex items-start gap-3 border border-line p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_16px_36px_-20px_rgba(232,93,143,0.4)]"
            >
              <span className="mt-0.5 flex-none text-copper">
                <ActivityIcon kind={a.icon} />
              </span>
              <span>
                <span className="block font-mono text-[11px] text-faint">{a.date}</span>
                <span className="mt-1.5 block text-[14px] font-medium text-ink/90">
                  {a.title}
                </span>
                {a.certUrl ? (
                  <a
                    href={a.certUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-1.5 inline-block text-[12px] font-semibold text-copper"
                  >
                    View certificate
                  </a>
                ) : null}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
