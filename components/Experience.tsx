"use client";

import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <FadeIn>
        <Eyebrow>Experience</Eyebrow>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-10">
          <div className="relative">
            <div className="absolute top-[5px] left-0 right-0 h-px bg-border" />
            <div className="flex justify-between">
              {experience.map((item) => (
                <div key={item.date} className="relative flex flex-col items-start">
                  <div
                    className={`w-[10px] h-[10px] rounded-full relative z-10 ${
                      item.current ? "bg-accent" : "bg-text-muted"
                    }`}
                  />
                  <span className="font-mono ts-tiny text-text-muted mt-3">
                    {item.date}
                  </span>
                  <span className="font-sans ts-small text-text-primary mt-1 font-medium">
                    {item.role}
                  </span>
                  <span className="font-sans ts-small text-text-secondary">
                    {item.org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-8">
          <div className="relative pl-6 border-l border-border">
            {experience.map((item) => (
              <div key={item.date} className="relative mb-8 last:mb-0">
                <div
                  className={`absolute -left-[calc(0.75rem+5px)] top-[5px] w-[10px] h-[10px] rounded-full ${
                    item.current ? "bg-accent" : "bg-text-muted"
                  }`}
                />
                <span className="font-mono ts-tiny text-text-muted">
                  {item.date}
                </span>
                <p className="font-sans ts-small text-text-primary font-medium mt-1">
                  {item.role}
                </p>
                <p className="font-sans ts-small text-text-secondary">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
