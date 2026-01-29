import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Project } from "./projects.data";

export function ProjectCard({ project }: { project: Project }) {
  const MAX_VISIBLE = 2;
  const hasMore = project.achievements.length > MAX_VISIBLE;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <Card className="relative h-[520px] border-muted/40 bg-background/80 backdrop-blur">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="absolute right-4 top-4 rounded-full border p-2 opacity-70 hover:opacity-100"
          >
            <ExternalLink size={16} />
          </a>
        )}

        <CardContent className="flex h-full flex-col space-y-5 p-6">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm font-medium text-primary">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Achievements */}
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-semibold">Key Achievements:</h4>

            <div className="relative">
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground max-h-24 overflow-hidden group-hover:max-h-40 group-hover:overflow-y-auto transition-all duration-300">
                {(hasMore
                  ? project.achievements.slice(0, MAX_VISIBLE)
                  : project.achievements
                ).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}

                {hasMore &&
                  project.achievements.slice(MAX_VISIBLE).map((item, i) => (
                    <li
                      key={`more-${i}`}
                      className="hidden group-hover:list-item"
                    >
                      {item}
                    </li>
                  ))}
              </ul>

              {hasMore && (
                <span className="mt-2 inline-block text-sm font-medium text-primary group-hover:hidden">
                  + more achievements...
                </span>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-2 text-sm font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
