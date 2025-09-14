"use client"

import type { RefObject } from "react"

interface WorkSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function WorkSection({ sectionRef }: WorkSectionProps) {
  const jobs = [
    {
      year: "2023",
      role: "Senior Frontend Engineer",
      company: "Vercel",
      description: "Leading frontend architecture for developer tools and AI-powered features.",
      tech: ["React", "TypeScript", "Next.js"],
    },
    {
      year: "2022",
      role: "Frontend Engineer",
      company: "Linear",
      description: "Built performant interfaces for project management and team collaboration.",
      tech: ["React", "GraphQL", "Framer Motion"],
    },
    {
      year: "2021",
      role: "Full Stack Developer",
      company: "Stripe",
      description: "Developed payment infrastructure and merchant-facing dashboard features.",
      tech: ["Ruby", "React", "PostgreSQL"],
    },
    {
      year: "2019",
      role: "Software Engineer",
      company: "Airbnb",
      description: "Created booking flow optimizations and host management tools.",
      tech: ["React", "Node.js", "MySQL"],
    },
  ]

  return (
    <section id="work" ref={sectionRef} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
          <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
