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
    <header className="sticky top-0 z-50 border-b border-line bg-deep/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#about"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <nav className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`link-underline whitespace-nowrap text-[12.5px] font-medium transition-colors duration-200 hover:text-ink ${
                active === item.href ? "text-copper" : "text-muted"
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
          className="flex h-9 w-9 flex-none items-center justify-center rounded border border-line text-ink lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            {open ? (
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="1.5" y1="4" x2="14.5" y2="4" stroke="currentColor" strokeWidth="1.4" />
                <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="currentColor" strokeWidth="1.4" />
                <line x1="1.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth="1.4" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-6 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-muted hover:text-ink"
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
