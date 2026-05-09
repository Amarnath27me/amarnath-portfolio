"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY + window.scrollY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.08;
      currentY += (y - currentY) * 0.08;
      el.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] z-0"
      style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
    />
  );
}
