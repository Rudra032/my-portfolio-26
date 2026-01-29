import Section from "@/components/section";
import { motion, type Transition } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin } from "lucide-react";

const hoverEffect = {
  whileHover: {
    y: -6,
    scale: 1.03,
    transition: { type: "spring" as const, stiffness: 300 } as Transition,
  },
};

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <p className="mb-12 text-center text-muted-foreground">
        I'm always interested in new opportunities and collaborations. Feel free
        to reach out!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto pb-4">
        <ContactCard
          icon={<Phone size={20} />}
          title="Phone"
          value="+91-8815757230"
          href="tel:+918815757230"
        />

        <ContactCard
          icon={<Mail size={20} />}
          title="Email"
          value="rudrarathore148@gmail.com"
          href="mailto:rudrarathore148@gmail.com"
        />

        <ContactCard
          icon={<Linkedin size={20} />}
          title="LinkedIn"
          value="Connect with me"
          href="https://www.linkedin.com/in/rudra-rathore-a00623273"
        />
      </div>
    </Section>
  );
}

/* ---------------- CONTACT CARD ---------------- */

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      {...hoverEffect}
      href={href}
      target={title === "LinkedIn" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="h-full cursor-pointer transition-colors hover:bg-muted/40">
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
          <div className="rounded-full bg-muted p-3">{icon}</div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">{value}</p>
        </CardContent>
      </Card>
    </motion.a>
  );
}
