import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";

export default function About() {
  return (
    <Section id="about">
      <FadeIn>
        <Eyebrow>About</Eyebrow>
        <div className="mt-6 mw-prose space-y-6 font-sans ts-body-lg text-text-secondary lh-loose">
          <p>
            I&apos;m a <B>Data Engineer</B> at <B>Community Dreams Foundation</B>,
            where I build reliable data pipelines with <B>Medallion Architecture</B> serving{" "}
            <B>45+ analysts</B> on a <B>$50M+</B> portfolio. I&apos;ve taken our data
            freshness from daily to hourly, cut request times <B>40%</B>, and
            improved donor retention targeting by <B>22%</B>.
          </p>
          <p>
            Previously at <B>HighRadius</B>, I automated Order-to-Cash workflows
            using <B>AWS Glue</B>, <B>Lambda</B>, and <B>Redshift</B> — freeing{" "}
            <B>$750K+</B> in annual working capital and helping Finance close
            month-end 2 days earlier.
          </p>
          <p>
            I hold an <B>MS in Applied Data Management & Analytics</B> from{" "}
            <B>Purdue University</B> (3.7 GPA), and I build production-grade
            tools on the side — most recently <B>SQLit</B>, a SQL learning
            platform with <B>500+ users</B>.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-text-primary">{children}</span>;
}
