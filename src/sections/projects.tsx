import { motion } from "framer-motion";

import Section from "@/components/section";
import { projects } from "@/components/projects/projects.data";
import { ProjectCard } from "@/components/projects/ProjectCards";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A showcase of the innovative projects I've worked on at Codemonk"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
