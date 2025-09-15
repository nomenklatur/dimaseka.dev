"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/custom/landing_page/HeroSection"
import WorkSection from "@/components/custom/landing_page/WorkSection"
import ConnectSection from "@/components/custom/landing_page/ConnectSection"
import ThoughtsSection from "@/components/custom/landing_page/ThoughtsSection"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts",  "connect"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30"
              }`}
              aria-label={`Navigate to ${section}`}
              whileHover={{
                backgroundColor: activeSection === section ? undefined : "hsl(var(--muted-foreground) / 0.6)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <HeroSection sectionRef={(el) => (sectionsRef.current[0] = el)} />
        <WorkSection sectionRef={(el) => (sectionsRef.current[1] = el)} />
        <ThoughtsSection sectionRef={(el) => (sectionsRef.current[4] = el)} />
        <ConnectSection sectionRef={(el) => (sectionsRef.current[5] = el)} />

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dimas Eka Putra. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js by Dimas Eka Putra</div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border"
                aria-label="Toggle theme"
                whileHover={{
                  borderColor: "hsl(var(--muted-foreground) / 0.5)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div whileHover={{ color: "hsl(var(--foreground))" }} transition={{ duration: 0.2 }}>
                  {isDark ? (
                    <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>

              <motion.button
                className="group p-3 rounded-lg border border-border"
                whileHover={{
                  borderColor: "hsl(var(--muted-foreground) / 0.5)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ color: "hsl(var(--foreground))" }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}