import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../uiComponents/Button";
import { BsStars } from "react-icons/bs";

const navLinks = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-4 lg:px-15 py-5 w-full">
      <div className="mx-auto container">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl grid grid-cols-2 md:grid-cols-3 items-center h-20 rounded-full border border-slate-700/50 bg-slate-900/70 backdrop-blur-xl px-8 z-50">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-slate-50">
              M
            </span>

            <span className="text-2xl font-bold text-blue-400">.</span>

            <span className="text-2xl font-bold tracking-tight text-slate-50">
              O
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center gap-10 fontOutfit">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-500 hover:text-white transition-colors duration-200"
              >
                <p className="text-[18px]">{label}</p>
              </a>
            ))}
          </div>

          {/* Resume */}
          <div className="hidden md:flex justify-self-end">
            <a
              href="/Mike-Obed-Resume.pdf"
              download="Mike-Obed-Frontend-Resume.pdf"
            >
              <Button type="button">
                <BsStars /> Resume
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden justify-self-end text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[94%] z-40 bg-white rounded-2xl mt-4 shadow-lg py-5 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
