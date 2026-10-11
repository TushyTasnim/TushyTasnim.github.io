"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-panel/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3.5 md:px-10">
        <a
          href="#hero"
          className="font-display text-[17px] font-extrabold tracking-tight text-ink"
        >
          {profile.name}
          <span className="text-brand">.</span>
        </a>

        <nav className="hidden flex-wrap items-center justify-end gap-x-1 gap-y-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[12.5px] font-semibold transition-colors duration-200 ${
                active === item.href
                  ? "bg-brandSoft text-brand"
                  : "text-muted hover:bg-deep hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            {open ? (
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="1.5" y1="4" x2="14.5" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="1.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line bg-panel px-6 py-3 lg:hidden">
          <ul className="flex flex-col gap-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors ${
                    active === item.href
                      ? "bg-brandSoft text-brand"
                      : "text-muted hover:bg-deep hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
