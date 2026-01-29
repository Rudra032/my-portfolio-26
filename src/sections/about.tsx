import Section from "@/components/section";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const hoverEffect = {
  whileHover: {
    y: -6,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="mb-10 text-center text-muted-foreground">
        Get to know me better — my skills, background, and what drives my
        passion for development.
      </p>

      {/* ABOUT CARD (CENTERED) */}
      <motion.div {...hoverEffect} className="mx-auto mb-16 max-w-3xl">
        <Card>
          <CardContent className="space-y-6 p-8 text-center">
            <div>
              <h3 className="text-xl font-semibold">Rudra Rathore</h3>
              <p className="text-sm text-muted-foreground">
                Frontend Developer & Problem Solver
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              I’m a passionate Frontend Developer with a strong foundation in
              modern web technologies and a keen eye for creating exceptional
              user experiences. Based in Bengaluru, I’ve been crafting
              innovative web solutions since joining Codemonk in May 2024.
            </p>

            <p className="text-sm text-muted-foreground">
              My journey includes building high-performance 3D point cloud
              visualization platforms handling millions of data points and
              developing platforms that support startup mentoring and funding. I
              thrive on solving complex problems while maintaining clean,
              accessible, and scalable code.
            </p>

            <p className="text-sm text-muted-foreground">
              When I’m not coding, I’m constantly learning emerging technologies
              and best practices. I believe code should not only work, but be
              maintainable, scalable, and accessible.
            </p>

            {/* STATS */}
            <div className="flex justify-center gap-12 pt-4">
              <div>
                <p className="text-3xl font-bold">1.5+</p>
                <p className="text-xs text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">6+</p>
                <p className="text-xs text-muted-foreground">
                  Projects Completed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* TECHNICAL SKILLS (CENTERED BLOCK) */}
      <div className="mx-auto max-w-5xl text-center">
        <h3 className="mb-6 text-2xl font-semibold">Technical Skills</h3>
        <p className="mb-10 text-muted-foreground">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <SkillCard
            title="Programming Languages"
            skills={["JavaScript", "TypeScript", "C++", "Python"]}
          />

          <SkillCard
            title="Frontend"
            skills={[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React.js",
              "Next.js",
              "Redux",
              "RTK Query",
              "GraphQL",
              "React Query",
              "Tauri",
              "Axios",
              "Three.js",
              "Fabric.js",
              "Shadcn",
              "Material UI",
              "Bootstrap",
            ]}
          />

          <SkillCard
            title="Backend Technologies"
            skills={["Node.js", "Express.js", "MongoDB", "Strapi", "Nest"]}
          />

          <SkillCard
            title="Tools & Practices"
            skills={[
              "Git",
              "REST APIs",
              "Clean Architecture",
              "Responsive Design",
              "Performance Optimization",
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------------- SKILL CARD ---------------- */

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div {...hoverEffect} className="h-full">
      <Card className="h-full rounded-2xl border-muted/40 bg-background/70 backdrop-blur-md transition-all duration-300">
        <CardContent className="p-6 text-left">
          <h4 className="mb-5 text-lg font-semibold">{title}</h4>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-muted/40
                  bg-muted/30
                  px-3 py-1
                  text-xs
                  text-muted-foreground
                  backdrop-blur
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
