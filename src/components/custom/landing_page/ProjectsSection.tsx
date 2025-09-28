"use client"

import Link from "next/link"
import { Linkedin, Github, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

interface ProjectsSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

const projects = [
  {
    id: 1,
    image: "/assets/images/projects/menuju.jpeg",
    title: "Analytics Dashboard",
    gridClass: "col-span-2 row-span-2",
  },
  {
    id: 2,
    image: "/assets/images/projects/menuju.jpeg",
    title: "Music Focus App",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 3,
    image: "/assets/images/projects/menuju.jpeg",
    title: "Restaurant App",
    gridClass: "col-span-1 row-span-1",
  },
];

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of innovative digital experiences and creative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-[600px] max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
