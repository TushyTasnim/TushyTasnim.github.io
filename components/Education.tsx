import Section from "./Section";
import Timeline from "./Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" index="03" title="Education" accent="copper">
      <Timeline items={education} />
    </Section>
  );
}
