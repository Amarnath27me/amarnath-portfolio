"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const { prefix, number, suffix } = parseValue(value);
          const isDecimal = value.includes(".") && !suffix.includes(".");
          const duration = 1600;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * number;

            if (isDecimal) {
              setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
            } else {
              setDisplay(`${prefix}${Math.floor(current)}${suffix}`);
            }

            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
          };

          setDisplay(`${prefix}0${suffix}`);
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
