import Section from "./Section";
import Timeline from "./Timeline";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" accent="copper">
      <Timeline items={experience} />
    </Section>
  );
}
