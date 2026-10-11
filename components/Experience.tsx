import Section from "./Section";
import Timeline from "./Timeline";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" index={5} accent="teal" tint>
      <Timeline items={experience} accent="teal" />
    </Section>
  );
}
