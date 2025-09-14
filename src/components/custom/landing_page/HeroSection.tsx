"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function HeroSection({ sectionRef }: HeroSectionProps) {
  return (
    <motion.header
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <motion.div
          className="lg:col-span-3 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / {new Date().getFullYear()}</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Dimas
              <br />
              <span className="text-muted-foreground">Eka Putra</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Software Engineer blending 
              <span className="text-foreground"> creativity</span>,<span className="text-foreground"> code</span>, and curiosity into
              <span className="text-foreground"> innovation</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                Available for projects
              </div>
              <div>Indonesia</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-foreground">Fullstack Engineer</div>
              <div className="text-muted-foreground">@ <Link href={"https://code.id"} target="_blank" className="hover:text-foreground transition-colors duration-300" > Code.id</Link></div>
              <div className="text-xs text-muted-foreground">Sept 2025 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {["React", "Express.js", "TypeScript", "Node.js"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border rounded-full"
                  whileHover={{
                    borderColor: "hsl(var(--muted-foreground) / 0.5)",
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
