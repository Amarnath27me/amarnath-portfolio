import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import { metrics, anchorStats } from "@/lib/data/metrics";

export default function Metrics() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>Impact</Eyebrow>
        <p className="font-sans ts-body-lg text-text-secondary mt-2">
          By the numbers.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {metrics.map((metric) => (
          <FadeIn key={metric.label}>
            <div className="metric-card bg-bg-elevated border border-border rounded-xl p-8 hover:border-border-strong hover:-translate-y-0.5">
              <p className="font-display ts-h1 text-text-primary">
                <AnimatedCounter value={metric.value} />
              </p>
              <p className="font-mono ts-small uppercase tracking-wide text-text-secondary mt-2">
                {metric.label}
              </p>
              <p className="font-sans ts-small text-text-muted mt-2">
                {metric.context}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <p className="font-mono ts-small text-text-secondary mt-8 text-center">
          {anchorStats}
        </p>
      </FadeIn>
    </Section>
  );
}
