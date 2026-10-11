import Image from "next/image";
import { profile } from "@/data/portfolio";

const socials = [
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-panel">
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute -left-28 -top-36 h-[480px] w-[480px] rounded-full bg-brand/[0.14] blur-[120px]"
      />
      <div
        aria-hidden
        className="ambient-glow-slow pointer-events-none absolute -right-32 top-0 h-[440px] w-[440px] rounded-full bg-teal/[0.12] blur-[120px]"
      />
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-amber/[0.09] blur-[110px]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10 md:py-28">
        <div>
          <span className="rise-in inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brandSoft px-4 py-1.5 font-mono text-[11.5px] font-medium tracking-wide text-brand [animation-delay:0ms]">
            <span
              aria-hidden
              className="pulse-dot h-1.5 w-1.5 flex-none rounded-full bg-brand"
            />
            Seeking Fall admission — MS / PhD, Industrial Engineering
          </span>

          <h1 className="rise-in mt-6 font-display text-[42px] font-extrabold leading-[1.02] tracking-tight [animation-delay:90ms] sm:text-[56px] md:text-[64px]">
            <span className="block text-ink">{profile.name.split(" ")[0]}</span>
            <span className="block bg-gradient-to-r from-brand via-[#6d28d9] to-teal bg-clip-text text-transparent">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="rise-in mt-5 text-[17px] font-medium leading-relaxed text-ink/80 [animation-delay:180ms] md:text-[19px]">
            {profile.role}
          </p>
          <p className="rise-in mt-2 text-[15.5px] leading-relaxed text-muted [animation-delay:200ms]">
            {profile.tagline}
          </p>

          <div className="rise-in mt-8 flex flex-wrap items-center gap-3 [animation-delay:270ms]">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-xl bg-brand px-6 text-[14px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(67,56,202,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brandDeep hover:shadow-[0_18px_36px_-14px_rgba(67,56,202,0.6)]"
            >
              Contact me
            </a>
            <a
              href="#research"
              className="inline-flex h-11 items-center rounded-xl border border-lineStrong bg-panel px-6 text-[14px] font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              View research
            </a>
          </div>

          <div className="rise-in mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] font-medium text-muted [animation-delay:340ms]">
            {socials.map((s) => (
              <a
                key={s.label}
                className="link-underline hover:text-brand"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rise-in relative mx-auto w-full max-w-[280px] [animation-delay:200ms] md:max-w-none">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 aspect-square w-full rounded-[28px] bg-gradient-to-br from-brand/35 to-teal/35"
          />
          <div className="group relative aspect-square w-full overflow-hidden rounded-[28px] border border-line bg-panel shadow-[0_30px_60px_-24px_rgba(13,20,36,0.28)] transition-all duration-500 hover:shadow-[0_34px_66px_-20px_rgba(67,56,202,0.35)]">
            <Image
              src="/images/headshot.jpeg"
              alt={profile.name}
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint transition-colors duration-200 hover:text-brand md:block"
      >
        <svg
          className="animate-bounce"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
