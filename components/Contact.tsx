"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import FadeIn from "./ui/FadeIn";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Section id="contact">
      <FadeIn>
        <Eyebrow>Contact</Eyebrow>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <FadeIn>
          <div>
            <h2 className="font-display ts-h1 text-text-primary lh-snug">
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="font-sans ts-body text-text-secondary mt-4 lh-normal">
              I&apos;m available for Data Engineering roles. Drop a note.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="https://mail.google.com/mail/?view=cm&to=amarnathallamrajar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono ts-small text-text-secondary hover:text-accent transition-colors duration-150"
              >
                amarnathallamrajar@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/amarnathallamraju"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono ts-small text-text-secondary hover:text-accent transition-colors duration-150"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Amarnath27me"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono ts-small text-text-secondary hover:text-accent transition-colors duration-150"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          {submitted ? (
            <div className="bg-bg-elevated border border-border rounded-xl p-8">
              <p className="font-sans ts-body-lg text-text-primary">
                Thanks. I&apos;ll get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-mono ts-small text-text-secondary mb-1.5">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="w-full bg-bg-elevated border border-border rounded-md px-4 py-3 font-sans ts-body text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-150"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 ts-small mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-mono ts-small text-text-secondary mb-1.5">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-bg-elevated border border-border rounded-md px-4 py-3 font-sans ts-body text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-150"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 ts-small mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-mono ts-small text-text-secondary mb-1.5">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full bg-bg-elevated border border-border rounded-md px-4 py-3 font-sans ts-body text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-150 resize-none"
                  placeholder="What's on your mind?"
                />
                {errors.message && (
                  <p className="text-red-400 ts-small mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {error && (
                <p className="text-red-400 ts-small">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-white font-mono ts-small px-6 py-3 rounded-md hover:bg-accent-hover transition-colors duration-150 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send →"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </Section>
  );
}
