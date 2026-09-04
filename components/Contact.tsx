import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

const emailSubject = encodeURIComponent("Hello from your portfolio");
const mailtoHref = `mailto:${profile.email}?subject=${emailSubject}`;

const details = [
  { label: "Email", value: profile.email, href: mailtoHref },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location },
];

const actions = [
  { label: "Send email", href: mailtoHref, external: false },
  { label: "Google Scholar", href: profile.links.scholar, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "GitHub", href: profile.links.github, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" tint accent="teal">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h3 className="max-w-prose font-display text-2xl font-medium leading-snug text-ink">
            Let&rsquo;s connect about graduate research, collaboration, or academic
            opportunities.
          </h3>
          <p className="mt-4 max-w-prose text-[14.5px] leading-relaxed text-muted">
            I am open to professor outreach, MS/PhD research conversations, and
            opportunities related to supply chain analytics, smart manufacturing,
            sustainable operations, and data-driven industrial systems.
          </p>

          <dl className="mt-8 space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-baseline gap-4 border-b border-line pb-3">
                <dt className="w-20 flex-none font-mono text-[11px] uppercase tracking-wide text-faint">
                  {d.label}
                </dt>
                <dd>
                  {d.href ? (
                    <a href={d.href} className="link-underline text-[14.5px] font-medium text-ink">
                      {d.value}
                    </a>
                  ) : (
                    <span className="text-[14.5px] font-medium text-ink">{d.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="flex flex-col divide-y divide-line border border-line">
          {actions.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noreferrer" : undefined}
              className={`group flex items-center justify-between px-5 py-4 text-[14px] font-medium transition-colors ${
                i === 0 ? "bg-copper text-white hover:bg-[#d9683a]" : "text-ink hover:bg-panel"
              }`}
            >
              {a.label}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                &#8594;
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
