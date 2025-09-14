"use client"

import Link from "next/link"
import { Linkedin, Github, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

interface ConnectSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function ConnectSection({ sectionRef }: ConnectSectionProps) {
  const socials = [
    { name: "LinkedIn", handle: "masdimasekaputra", url: "https://linkedin.com/in/masdimasekaputra", icon: Linkedin },
    { name: "GitHub", handle: "@nomenklatur", url: "https://github.com/nomenklatur", icon: Github },
    { name: "Instagram", handle: "@masstaahh", url: "https://instagram.com/masstaahh", icon: Instagram },
    { name: "Twitter", handle: "@masnomenklatur", url: "https://twitter.com/masnomenklatur", icon: Twitter },
  ]

  return (
    <motion.section 
      id="connect" 
      ref={sectionRef} className="py-20 sm:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <motion.div 
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always interested in new opportunities, collaborations, and conversations about software engineering and career.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:test@example.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">hi@dimaseka.my.id</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
              >
                <div className="space-y-2">
                  <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex items-center">
                    <social.icon className="inline w-4 h-4 mr-2" />
                    {social.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{social.handle}</div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
