import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme.toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* NAME */}
          <h1 className="text-xl font-semibold tracking-tight">
            Rudra Rathore
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button onClick={() => setOpen(true)} aria-label="Open Menu">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background">
          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X size={26} />
            </button>
          </div>

          {/* NAV ITEMS */}
          <div className="flex flex-col items-center justify-center gap-6 py-16">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-lg"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
