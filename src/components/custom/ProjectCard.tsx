"use client"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link";


const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`${project.gridClass} group cursor-pointer`}
    >
      <Card className="h-full rounded-none overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
        <motion.div 
          className="flex flex-col gap-2 h-full bg-blue-300 p-8 items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="text-center object-contain shadow-lg"
          />
          <div className="text-left w-full">
            <Link href="https://google.com" target="_blank" className="text-black text-left">{project.title}</Link>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;