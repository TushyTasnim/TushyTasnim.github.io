import Section from "./Section";
import Timeline from "./Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education" tint accent="teal">
      <Timeline items={education} />
    </Section>
  );
}
