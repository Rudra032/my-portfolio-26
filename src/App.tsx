import Navbar from "@/components/navbar";
import Home from "@/sections/home";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Education from "@/sections/education";
import Contact from "@/sections/contact";
import ParticlesBackground from "./components/particles-background";

export default function App() {
  return (
    <div className="relative text-foreground">
      <ParticlesBackground />
      <Navbar />

      <main className="pt-24 space-y-32">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
