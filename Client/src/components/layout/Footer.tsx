import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-slate-50">
                M
              </span>

              <span className="text-2xl font-bold text-blue-400">.</span>

              <span className="text-2xl font-bold tracking-tight text-slate-50">
                O
              </span>
            </a>

            <p className="mt-3 max-w-md text-slate-400 leading-relaxed">
              Building modern web applications with clean design, scalable
              architecture, and meaningful user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-right">
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-4 flex flex-wrap gap-5 md:justify-end">
              <a
                href="#projects"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Projects
              </a>

              <a
                href="#skills"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Skills
              </a>

              <a
                href="#about"
                className="text-slate-400 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-800/70 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Mike Obed. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/OBED-4k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/isaiah-obed-5b449a427"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="mailto:simonmike299@gmail.com"
              aria-label="Email"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <HiOutlineMail className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
