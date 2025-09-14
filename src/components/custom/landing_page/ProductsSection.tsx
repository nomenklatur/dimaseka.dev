"use client"

import Link from "next/link"
import type { RefObject } from "react"

interface ProductsSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function ProductsSection({ sectionRef }: ProductsSectionProps) {
  const apps = [
    {
      name: "Focus Timer",
      description: "Minimalist pomodoro timer with ambient sounds",
      status: "Live",
    },
    {
      name: "Note Keeper",
      description: "Distraction-free markdown note-taking",
      status: "Live",
    },
    {
      name: "Task Board",
      description: "Simple kanban-style task management",
      status: "Live",
    },
    {
      name: "Color Palette",
      description: "Curated color schemes for designers",
      status: "Beta",
    },
    {
      name: "Reading List",
      description: "Bookmark manager for articles and resources",
      status: "Coming Soon",
    },
  ]

  return (
    <section id="products" ref={sectionRef} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Products</h2>
          <div className="text-sm text-muted-foreground font-mono">PERSONAL PROJECTS</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-light">Dim Environment</h3>
                <span className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full font-mono">ACTIVE</span>
              </div>
              <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A curated collection of web applications designed for
                <span className="text-foreground"> productivity</span>,
                <span className="text-foreground"> creativity</span>, and
                <span className="text-foreground"> digital wellness</span>.
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Built as a personal exploration into minimalist design and functional web experiences. Each application
              within the environment focuses on solving specific problems with clean, distraction-free interfaces that
              prioritize user focus and efficiency.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span>Visit Dim Environment</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm text-muted-foreground font-mono">APPLICATIONS</div>

            <div className="space-y-4">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {app.name}
                      </div>
                      <span
                        className={`px-2 py-1 text-xs text-white rounded-full ${
                          app.status === "Live"
                            ? "bg-green-600"
                            : app.status === "Beta"
                              ? "bg-yellow-600"
                              : "bg-gray-600"
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{app.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
