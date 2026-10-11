import Section from "./Section";
import Timeline from "./Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education" index={2} accent="teal">
      <Timeline items={education} accent="teal" />
    </Section>
  );
}
