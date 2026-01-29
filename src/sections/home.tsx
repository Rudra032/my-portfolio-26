import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/animated-bg";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Intro */}
        <h1 className="text-8xl font-bold">
          Rudra
          <br /> Rathore
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Passionate Frontend Developer specializing in React, TypeScript, and
          modern web technologies. Currently crafting innovative solutions at
          Codemonk, with expertise in 3D visualization and building platforms
          that support startup mentoring and assist founders in securing
          funding.
        </p>

        {/* Tech Stack */}
        <TooltipProvider>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer rounded-xl border px-3 py-1 hover:bg-accent">
                  React
                </span>
              </TooltipTrigger>
              <TooltipContent>Component-based UI library</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer rounded-xl border px-3 py-1 hover:bg-accent">
                  TypeScript
                </span>
              </TooltipTrigger>
              <TooltipContent>Strongly typed JavaScript</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer rounded-xl border px-3 py-1 hover:bg-accent">
                  Tailwind
                </span>
              </TooltipTrigger>
              <TooltipContent>Utility-first CSS framework</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer rounded-xl border px-3 py-1 hover:bg-accent">
                  Framer Motion
                </span>
              </TooltipTrigger>
              <TooltipContent>Animation & gesture library</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer rounded-xl border px-3 py-1 hover:bg-accent">
                  Next.js
                </span>
              </TooltipTrigger>
              <TooltipContent>Full-stack React framework</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        {/* Contacts */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="tel:+918815757230"
            className="flex items-center gap-2 hover:underline"
          >
            <Phone size={16} /> +91-8815757230
          </a>

          <a
            href="mailto:rudrarathore148@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail size={16} /> rudrarathore148@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/rudra-rathore-a00623273"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={16} /> linkedin.com/in/rudra
          </a>
        </div>

        {/* CTA */}
        {/* <div className="mt-10">
          <Button size="lg" className="gap-2">
            <Download size={18} />
            Download Resume
          </Button>
        </div> */}
      </motion.div>
    </section>
  );
}
