import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto max-w-5xl px-6"
    >
      <h2 className="mb-6 text-3xl font-bold text-center">{title}</h2>
      {children}
    </motion.section>
  );
}
