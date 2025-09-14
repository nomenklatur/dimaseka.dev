"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface WorkSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

interface Job {
  year: string
  role: string
  company: string
  link?: string
  description: string
  tech: string[]
}

export default function WorkSection({ sectionRef }: WorkSectionProps) {
  const jobs: Job[] = [
    {
      year: "2025",
      role: "Fullstack Engineer",
      company: "Code.id",
      link: "https://code.id",
      description: "Developed scalable web applications and internal tools for various clients.",
      tech: ["React", "TypeScript", "Node.js"],
    },
    {
      year: "2023",
      role: "Fullstack Engineer",
      company: "Lezenda",
      link: "https://lezenda.com",
      description: "Led the development of a SaaS platform for marketing and e-commerce.",
      tech: ["Laravel", "Node.js", "React", "Flutter"],
    },
    {
      year: "2023",
      role: "Backend Engineer Intern",
      company: "Rey.id",
      link: "https://rey.id",
      description: "Built and maintained RESTful APIs for an enterprise insurance platform.",
      tech: ["Node.js", "Typescript", "PostgreSQL"],
    },
    {
      year: "2022",
      role: "Backend Engineer Intern",
      company: "Kawan Kerja",
      description: "Assisted in developing backend services for an e-learning space management system.",
      tech: ["Python", "Bitbucket", "MySQL"],
    },
    {
      year: "2019",
      role: "Web Developer",
      company: "IAKN Tarutung",
      description: "Designed and developed custom websites for educational institution.",
      tech: ["Laravel", "CodeIgniter", "PHP", "MySQL"],
    }
  ]

  return (
    <motion.section
      id="work"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="space-y-12 sm:space-y-16">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-light">Work Experiences</h2>
          <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50"
              whileHover={{ borderColor: "hsl(var(--border))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                hover: { duration: 0.3 },
              }}
            >
              <div className="lg:col-span-2">
                <motion.div
                  className="text-xl sm:text-2xl font-light text-muted-foreground"
                  whileHover={{ color: "hsl(var(--foreground))" }}
                  transition={{ duration: 0.3 }}
                >
                  {job.year}
                </motion.div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground hover:text-foreground"><Link href={job.link ?? "#"} target="_blank">{job.company}</Link></div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded"
                    whileHover={{
                      borderColor: "hsl(var(--muted-foreground) / 0.5)",
                      scale: 1.05,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + techIndex * 0.05,
                      hover: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
