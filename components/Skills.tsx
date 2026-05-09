"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";
import { skills } from "@/lib/data/skills";

const categoryColors: Record<string, string> = {
  "Data Engineering": "border-blue-500/40 hover:bg-blue-500/10 hover:border-blue-400",
  "Cloud & Storage": "border-amber-500/40 hover:bg-amber-500/10 hover:border-amber-400",
  "Tools & Analytics": "border-emerald-500/40 hover:bg-emerald-500/10 hover:border-emerald-400",
  "Languages": "border-violet-500/40 hover:bg-violet-500/10 hover:border-violet-400",
  "Data Operations": "border-rose-500/40 hover:bg-rose-500/10 hover:border-rose-400",
  "Leadership": "border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400",
};

const categoryDots: Record<string, string> = {
  "Data Engineering": "bg-blue-500",
  "Cloud & Storage": "bg-amber-500",
  "Tools & Analytics": "bg-emerald-500",
  "Languages": "bg-violet-500",
  "Data Operations": "bg-rose-500",
  "Leadership": "bg-cyan-500",
};

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? skills.filter((g) => g.category === active)
    : skills;

  return (
    <Section>
      <FadeIn>
        <Eyebrow>Skills</Eyebrow>
        <p className="font-sans ts-body-lg text-text-secondary mt-2">
          What I work with.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-wrap gap-2 mt-8">
          <button
            onClick={() => setActive(null)}
            className={`font-mono ts-tiny uppercase tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 ${
              active === null
                ? "bg-text-primary text-bg border-text-primary"
                : "border-border text-text-muted hover:text-text-secondary hover:border-border-strong"
            }`}
          >
            All
          </button>
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() =>
                setActive(active === group.category ? null : group.category)
              }
              className={`font-mono ts-tiny uppercase tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                active === group.category
                  ? "bg-text-primary text-bg border-text-primary"
                  : "border-border text-text-muted hover:text-text-secondary hover:border-border-strong"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${categoryDots[group.category]}`}
              />
              {group.category}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="mt-8 space-y-8">
        {filtered.map((group) => (
          <FadeIn key={group.category}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-2 h-2 rounded-full ${categoryDots[group.category]}`}
                />
                <h3 className="font-mono ts-tiny uppercase tracking-widest text-text-muted">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`font-sans ts-small text-text-primary px-4 py-2 rounded-lg border bg-bg-elevated/50 transition-all duration-200 cursor-default ${
                      categoryColors[group.category] || "border-border hover:border-border-strong"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
