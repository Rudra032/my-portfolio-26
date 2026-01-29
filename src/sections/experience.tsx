import Section from "@/components/section";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <p className="mb-12 text-center text-muted-foreground">
        My professional journey and work experience
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <Card>
          <CardContent className="space-y-6 p-8 text-center">
            {/* Role */}
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-sm text-muted-foreground">Codemonk</p>
            </div>

            {/* Location & Duration */}
            <div className="text-sm text-muted-foreground">
              <p>Bengaluru, Karnataka</p>
              <p>May 2024 – Present</p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground">
              Working as a Software Engineer at Codemonk, I’ve been involved in
              developing innovative web applications and tools. My role spans
              frontend development, user experience optimization, and
              collaboration with cross-functional teams to deliver high-quality
              software solutions.
            </p>

            {/* Responsibilities */}
            <div className="space-y-3 text-left">
              <h4 className="text-sm font-semibold text-center">
                Key Responsibilities
              </h4>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>
                  Developing and maintaining complex web applications using
                  React, TypeScript, and modern frontend technologies
                </li>
                <li>
                  Collaborating with clients for requirement gathering and
                  ensuring timely project delivery
                </li>
                <li>
                  Implementing responsive designs and ensuring cross-browser
                  compatibility
                </li>
                <li>
                  Optimizing application performance and applying best practices
                  for code quality
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
