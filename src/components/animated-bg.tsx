import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: mouse.x * 60,
          y: mouse.y * 60,
        }}
        transition={{ type: "spring", stiffness: 40 }}
        className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: mouse.x * -80,
          y: mouse.y * 80,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: mouse.x * 50,
          y: mouse.y * -50,
        }}
        transition={{ type: "spring", stiffness: 25 }}
        className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl"
      />
    </div>
  );
}
