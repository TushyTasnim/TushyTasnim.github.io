import Section from "./Section";
import Reveal from "./Reveal";
import { news } from "@/data/portfolio";

export default function News() {
  return (
    <Section id="news" index="09" title="News" accent="copper">
      <ul className="divide-y divide-line border-t border-line">
        {news.map((item, i) => (
          <Reveal
            as="li"
            key={item.text.slice(0, 24)}
            delay={i * 60}
            className="group grid grid-cols-[92px_1fr] gap-6 border-l-2 border-transparent py-4 pl-4 -ml-4 transition-all duration-300 hover:border-copper hover:bg-panel/50 md:grid-cols-[120px_1fr]"
          >
            <time className="font-mono text-[12.5px] text-copper">{item.date}</time>
            <div>
              <p className="text-[14.5px] leading-relaxed text-ink/90">{item.text}</p>
              {item.certUrl ? (
                <a
                  href={item.certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-1.5 inline-block text-[12.5px] font-semibold text-teal"
                >
                  View certificate
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
