import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";

const wipProjects = [
  {
    title: "PySpark DAG Analyzer",
    description:
      "A VS Code extension that auto-detects Airflow DAG anti-patterns and suggests optimizations using Python AST parsing.",
    status: "Working prototype with AST engine.",
    githubUrl: "https://github.com/Amarnath27me",
  },
  {
    title: "Real-Time Streaming",
    description:
      "A Kafka → Spark Structured Streaming → Delta Lake → Grafana pipeline handling late-arriving data, shuffle skew, and stateful aggregations.",
    status: "Architecture designed, ingestion layer in progress.",
    githubUrl: "https://github.com/Amarnath27me",
  },
];

export default function CurrentThinking() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>Current Thinking</Eyebrow>
        <p className="font-sans ts-body-lg text-text-secondary mt-2">
          What I&apos;m building next.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {wipProjects.map((project) => (
          <FadeIn key={project.title}>
            <div className="bg-bg-elevated border border-border rounded-xl p-8 h-full flex flex-col">
              <span className="inline-block self-start font-mono ts-tiny uppercase text-accent border border-accent rounded px-2 py-0.5 mb-4">
                WIP
              </span>
              <h3 className="font-display ts-h2 text-text-primary">
                {project.title}
              </h3>
              <p className="font-sans ts-body text-text-secondary lh-normal mt-3 flex-1">
                {project.description}
              </p>
              <p className="font-mono ts-small text-text-primary mt-4">
                Status: {project.status}
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono ts-small text-text-primary hover:text-accent transition-colors duration-150 mt-3 inline-block"
              >
                GitHub →
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
