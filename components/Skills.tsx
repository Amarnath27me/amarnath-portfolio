import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";
import { skills } from "@/lib/data/skills";

export default function Skills() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>Skills</Eyebrow>
        <p className="font-sans ts-body-lg text-text-secondary mt-2">
          What I work with.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mt-10">
        {skills.map((group) => (
          <FadeIn key={group.category}>
            <div>
              <h3 className="font-mono ts-tiny uppercase tracking-widest text-text-muted mb-4">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="font-sans ts-body text-text-primary lh-loose"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
