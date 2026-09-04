import { ReactNode } from "react";
import Reveal from "./Reveal";

type Accent = "copper" | "teal";

const accentStyles: Record<
  Accent,
  { border: string; text: string; tick: string; glowA: string; glowB: string; corner: string }
> = {
  copper: {
    border: "border-t-copper/50",
    text: "text-copper",
    tick: "bg-copper",
    glowA: "bg-copper/20",
    glowB: "bg-teal/[0.15]",
    corner: "border-copper/40",
  },
  teal: {
    border: "border-t-teal/50",
    text: "text-teal",
    tick: "bg-teal",
    glowA: "bg-teal/20",
    glowB: "bg-copper/[0.15]",
    corner: "border-teal/40",
  },
};

export default function Section({
  id,
  index,
  title,
  intro,
  children,
  tint,
  accent = "copper",
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tint?: boolean;
  accent?: Accent;
}) {
  const a = accentStyles[accent];
  return (
    <section
      id={id}
      className={`scroll-mt-24 relative overflow-hidden border-t-2 ${a.border} ${
        tint ? "bg-panel/40" : ""
      }`}
    >
      <div
        aria-hidden
        className={`ambient-glow pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full ${a.glowA} blur-[100px]`}
      />
      <div
        aria-hidden
        className={`ambient-glow-slow pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full ${a.glowB} blur-[100px]`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute left-4 top-4 hidden h-4 w-4 border-l-2 border-t-2 md:block ${a.corner}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute right-4 top-4 hidden h-4 w-4 border-r-2 border-t-2 md:block ${a.corner}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-4 left-4 hidden h-4 w-4 border-b-2 border-l-2 md:block ${a.corner}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-4 right-4 hidden h-4 w-4 border-b-2 border-r-2 md:block ${a.corner}`}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-4 md:mb-14">
            <span aria-hidden className={`h-[2px] w-8 flex-none ${a.tick}`} />
            <span className={`font-mono text-[12px] tracking-wide ${a.text}`}>
              {index}
            </span>
            <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
              {title}
            </h2>
          </div>
          {intro ? (
            <p className="mb-10 max-w-prose text-[15px] leading-relaxed text-muted">
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
