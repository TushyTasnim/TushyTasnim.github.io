import { ReactNode } from "react";
import Reveal from "./Reveal";

export type Accent = "brand" | "teal" | "amber";

// Tailwind only sees class names written as literals, so each accent carries a
// full set of strings rather than an interpolated colour name.
export const accentStyles: Record<
  Accent,
  {
    text: string;
    bar: string;
    rule: string;
    chip: string;
    border: string;
    hoverBorder: string;
    glowA: string;
    glowB: string;
    button: string;
  }
> = {
  brand: {
    text: "text-brand",
    bar: "bg-gradient-to-r from-brand to-teal",
    rule: "bg-gradient-to-r from-brand via-brand/35 to-transparent",
    chip: "bg-brandSoft text-brand",
    border: "border-t-brand",
    hoverBorder: "hover:border-brand/60",
    glowA: "bg-brand/[0.10]",
    glowB: "bg-teal/[0.08]",
    button: "bg-brand hover:bg-brandDeep",
  },
  teal: {
    text: "text-teal",
    bar: "bg-gradient-to-r from-teal to-brand",
    rule: "bg-gradient-to-r from-teal via-teal/35 to-transparent",
    chip: "bg-tealSoft text-teal",
    border: "border-t-teal",
    hoverBorder: "hover:border-teal/60",
    glowA: "bg-teal/[0.10]",
    glowB: "bg-brand/[0.08]",
    button: "bg-teal hover:bg-tealDeep",
  },
  amber: {
    text: "text-amber",
    bar: "bg-gradient-to-r from-amber to-brand",
    rule: "bg-gradient-to-r from-amber via-amber/35 to-transparent",
    chip: "bg-amberSoft text-amber",
    border: "border-t-amber",
    hoverBorder: "hover:border-amber/60",
    glowA: "bg-amber/[0.10]",
    glowB: "bg-brand/[0.08]",
    button: "bg-amber hover:bg-amberDeep",
  },
};

export default function Section({
  id,
  title,
  index,
  intro,
  children,
  tint,
  accent = "brand",
}: {
  id: string;
  title: string;
  /** Section number shown above the heading, e.g. 3 renders as "03". */
  index: number;
  intro?: string;
  children: ReactNode;
  tint?: boolean;
  accent?: Accent;
}) {
  const a = accentStyles[accent];
  return (
    <section
      id={id}
      className={`scroll-mt-20 relative overflow-hidden ${
        tint ? "bg-panel" : "bg-deep/40"
      }`}
    >
      {/* Full-bleed accent rule: gives every band its own identity at a glance. */}
      <div aria-hidden className={`absolute inset-x-0 top-0 h-[3px] ${a.rule}`} />
      <div
        aria-hidden
        className={`ambient-glow pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full ${a.glowA} blur-[110px]`}
      />
      <div
        aria-hidden
        className={`ambient-glow-slow pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full ${a.glowB} blur-[110px]`}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-[12px] font-bold tabular-nums tracking-[0.2em] ${a.text}`}
              >
                {String(index).padStart(2, "0")}
              </span>
              <span aria-hidden className={`h-[2px] w-7 flex-none rounded-full ${a.bar}`} />
            </div>
            <h2 className="mt-3 font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-ink md:text-[42px]">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
