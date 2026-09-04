import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b-2 border-b-copper/50">
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute -left-24 -top-32 h-[460px] w-[460px] rounded-full bg-teal/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="ambient-glow-slow pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-copper/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#7a5af8]/15 blur-[110px]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10 md:py-28">
        <div>
          <span className="rise-in mb-5 inline-flex items-center rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-[12px] text-copper backdrop-blur-md [animation-delay:0ms]">
            Seeking Fall admission — MS / PhD, Industrial Engineering
          </span>
          <h1 className="rise-in mt-5 font-display text-4xl font-medium leading-[1.08] [animation-delay:90ms] sm:text-5xl md:text-6xl">
            <span className="text-copper">{profile.name.split(" ")[0]}</span>{" "}
            <span className="bg-gradient-to-r from-teal to-[#7a5af8] bg-clip-text text-transparent">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="rise-in mt-4 max-w-prose text-lg text-muted [animation-delay:180ms] md:text-xl">
            {profile.role}. {profile.tagline}
          </p>

          <div className="rise-in mt-8 flex flex-wrap items-center gap-3 [animation-delay:270ms]">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-sm bg-copper px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d9683a] hover:shadow-[0_14px_30px_-12px_rgba(242,136,75,0.5)]"
            >
              Contact me
            </a>
          </div>

          <div className="rise-in mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-muted [animation-delay:340ms]">
            <a
              className="link-underline hover:text-ink"
              href={profile.links.scholar}
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            <a
              className="link-underline hover:text-ink"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-underline hover:text-ink"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="rise-in relative mx-auto w-full max-w-[280px] [animation-delay:200ms] md:max-w-none">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 aspect-square w-full rounded-3xl border-2 border-copper/50"
          />
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-line bg-panel shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-teal/60 hover:shadow-[0_30px_60px_-20px_rgba(232,93,143,0.4)]">
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint transition-colors duration-200 hover:text-copper md:block"
      >
        <svg
          className="animate-bounce"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
