import Image from "next/image";

type Project = {
  number: string;
  name: string;
  title: string;
  meta: string | null;
  description: string;
  stack: string;
  liveUrl: string | null;
  githubUrl: string | null;
  heroImage: string;
  subImages: { src: string; label: string; caption: string }[] | null;
  featured: boolean;
  imagePosition?: "left" | "right";
};

export default function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return <FeaturedProject project={project} />;
  }
  return <StandardProject project={project} />;
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div>
      <span className="font-mono ts-tiny uppercase text-text-muted">
        {project.number} — {project.name}
      </span>
      <h3 className="font-display ts-h1 text-text-primary mt-2">
        {project.title}
      </h3>
      {project.meta && (
        <p className="font-mono ts-small text-text-secondary mt-2">
          {project.meta}
        </p>
      )}
      <p className="font-sans ts-body-lg text-text-secondary lh-loose mw-prose mt-4">
        {project.description}
      </p>
      <p className="font-mono ts-small text-text-muted mt-4">
        Stack: {project.stack}
      </p>
      <div className="flex items-center gap-4 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono ts-small text-text-primary hover:text-accent transition-colors duration-150"
          >
            View Live →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono ts-small text-text-primary hover:text-accent transition-colors duration-150"
          >
            GitHub →
          </a>
        )}
      </div>

      <div className="mt-8 relative w-full aspect-video max-h-[600px] rounded-xl border border-border overflow-hidden bg-bg-elevated project-img-hover">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      {project.subImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {project.subImages.map((img) => (
            <div key={img.src}>
              <div className="relative aspect-video rounded-lg border border-border overflow-hidden bg-bg-elevated">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans ts-small text-text-primary mt-2 font-medium">
                {img.label}
              </p>
              <p className="font-sans ts-small text-text-secondary">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StandardProject({ project }: { project: Project }) {
  const imageLeft = project.imagePosition === "left";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={imageLeft ? "md:order-2" : "md:order-1"}>
        <span className="font-mono ts-tiny uppercase text-text-muted">
          {project.number} — {project.name}
        </span>
        <h3 className="font-display ts-h2 text-text-primary mt-2">
          {project.title}
        </h3>
        <p className="font-sans ts-body-lg text-text-secondary lh-loose mt-4">
          {project.description}
        </p>
        <p className="font-mono ts-small text-text-muted mt-4">
          Stack: {project.stack}
        </p>
        <div className="flex items-center gap-4 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono ts-small text-text-primary hover:text-accent transition-colors duration-150"
            >
              View Live →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono ts-small text-text-primary hover:text-accent transition-colors duration-150"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>

      <div className={imageLeft ? "md:order-1" : "md:order-2"}>
        <div className="relative aspect-video rounded-xl border border-border overflow-hidden bg-bg-elevated project-img-hover">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
