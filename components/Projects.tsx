import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <Section id="work">
      <FadeIn>
        <Eyebrow>Work</Eyebrow>
        <p className="font-sans ts-body-lg text-text-secondary mt-2">
          Three projects. Real screenshots. Real GitHub.
        </p>
      </FadeIn>

      <div className="mt-12 space-y-24">
        {projects.map((project) => (
          <FadeIn key={project.slug}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
