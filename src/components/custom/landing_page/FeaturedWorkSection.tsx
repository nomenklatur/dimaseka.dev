"use client"

import type { RefObject } from "react"

interface FeaturedWorksSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function FeaturedWorksSection({ sectionRef }: FeaturedWorksSectionProps) {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      client: "TechCorp",
      year: "2024",
      description:
        "Complete redesign of a multi-vendor marketplace focusing on user experience and conversion optimization.",
      tech: ["React", "TypeScript", "Stripe API", "Framer Motion"],
      status: "Live",
    },
    {
      title: "SaaS Dashboard Interface",
      client: "DataFlow",
      year: "2024",
      description: "Analytics dashboard with real-time data visualization and customizable reporting features.",
      tech: ["Next.js", "D3.js", "WebSocket", "Tailwind CSS"],
      status: "Live",
    },
    {
      title: "Mobile Banking App",
      client: "FinanceFirst",
      year: "2023",
      description: "Secure mobile banking interface with biometric authentication and seamless transaction flows.",
      tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      status: "Live",
    },
    {
      title: "Content Management System",
      client: "MediaHub",
      year: "2023",
      description: "Headless CMS with drag-and-drop page builder and multi-language content management.",
      tech: ["Vue.js", "GraphQL", "MongoDB", "AWS S3"],
      status: "Live",
    },
  ]

  return (
    <section id="featured" ref={sectionRef} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Featured Works</h2>
          <div className="text-sm text-muted-foreground font-mono">SELECTED PROJECTS</div>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-green-600 text-white rounded-full">{project.status}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.client} • {project.year}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <span>View project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
