import Section from "@/components/section";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <p className="mb-12 text-center text-muted-foreground">
        My educational background and qualifications
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <Card className="border-muted/40 bg-background/70 backdrop-blur-md">
          <CardContent className="flex items-center justify-between p-8">
            {/* LEFT SIDE */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Master's in Computer Science
              </h3>

              <p className="text-primary font-medium">Barkatullah University</p>

              <p className="text-sm text-muted-foreground">Bhopal</p>
            </div>

            {/* RIGHT SIDE – TIME BADGE WITH TOOLTIP */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-pointer rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                    July 2021 – Aug 2023
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Duration of Study</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
