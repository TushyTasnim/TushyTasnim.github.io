import Section from "./Section";
import Timeline from "./Timeline";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Work Experience" tint accent="teal">
      <Timeline items={experience} />
    </Section>
  );
}
