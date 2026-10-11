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
    <Section id="contact" title="Contact" index={10} accent="brand">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h3 className="max-w-prose font-display text-[22px] font-extrabold leading-snug tracking-tight text-ink md:text-[26px]">
            Open to MS / PhD research conversations and collaboration.
          </h3>
          <dl className="mt-7 space-y-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-baseline gap-4 border-b border-line pb-3"
              >
                <dt className="w-20 flex-none font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-faint">
                  {d.label}
                </dt>
                <dd>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="link-underline text-[14.5px] font-semibold text-ink hover:text-brand"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span className="text-[14.5px] font-semibold text-ink">{d.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col divide-y divide-line overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_12px_34px_-26px_rgba(13,20,36,0.4)]"
        >
          {actions.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noreferrer" : undefined}
              className={`group flex items-center justify-between px-5 py-4 text-[14px] font-bold transition-colors ${
                i === 0
                  ? "bg-brand text-white hover:bg-brandDeep"
                  : "text-ink hover:bg-deep hover:text-brand"
              }`}
            >
              {a.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
