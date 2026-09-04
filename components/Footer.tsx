import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-faint md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#hero" className="link-underline hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
