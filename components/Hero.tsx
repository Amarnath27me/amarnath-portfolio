export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center px-(--spacing-section-x) pt-16">
      <div className="mw-content mx-auto w-full">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-2 mb-8 hero-animate">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono ts-tiny text-text-secondary">
              Available for new opportunities
            </span>
          </div>

          <h1 className="font-display ts-display lh-tight text-text-primary italic mb-4 hero-animate hero-animate-delay-1">
            Amarnath Allamraju
          </h1>

          <p className="font-mono ts-small text-text-muted tracking-wide mb-8 hero-animate hero-animate-delay-1">
            No bricks without clay.
          </p>

          <p className="font-sans ts-body-lg text-text-secondary lh-loose mw-prose mb-10 hero-animate hero-animate-delay-2">
            Data Engineer building production data systems at scale — PySpark,
            Delta Lake, Airflow, dbt, Snowflake. Currently at Community Dreams
            Foundation, helping 45+ analysts make sense of a $50M+ portfolio.
          </p>

          <div className="flex items-center gap-6 hero-animate hero-animate-delay-3">
            <a
              href="#work"
              className="font-mono ts-small text-text-primary border border-border rounded-md px-5 py-2.5 hover:bg-accent hover:border-accent hover:text-white transition-all duration-250"
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="font-mono ts-small text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
