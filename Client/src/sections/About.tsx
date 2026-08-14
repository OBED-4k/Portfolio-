import { FaLaptopCode, FaServer, FaLightbulb } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
          About Me
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <h2 className="mt-4 max-w-3xl text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Building technology that solves problems and creates meaningful
              experiences.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              I started my journey in web development because I wanted to create
              solutions that could make a positive impact. Seeing problems
              caused by limited access to technology inspired me to learn how to
              build digital products that help people and communities grow.
            </p>
            <p>
              Today, I specialize in building interactive frontend experiences
              with React and TypeScript while using my full-stack knowledge to
              create complete applications. I enjoy turning ideas into reliable
              products that are useful, accessible, and easy to maintain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              <div className="rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 border-slate-700/50 bg-slate-900/30 p-4">
                <FaLaptopCode className="text-2xl text-blue-400 mb-3" />
                <h3 className="text-white font-semibold">
                  Frontend Development
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Building responsive and interactive interfaces.
                </p>
              </div>

              <div className="rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 border-slate-700/50 bg-slate-900/30 p-4">
                <FaServer className="text-2xl text-blue-400 mb-3" />
                <h3 className="text-white font-semibold">
                  Full-Stack Development
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Connecting modern frontend applications with secure APIs and
                  backend services.
                </p>
              </div>

              <div className="rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 border-slate-700/50 bg-slate-900/30 p-4">
                <FaLightbulb className="text-2xl text-blue-400 mb-3" />

                <h3 className="text-white font-semibold">Problem Solving</h3>

                <p className="text-sm text-slate-400 mt-2">
                  Turning ideas into practical digital solutions that create
                  real value.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-bold text-white mb-6">My Approach</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />

                <div>
                  <h4 className="text-white font-semibold">
                    Clean & Maintainable Code
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Writing code that is easy to understand, maintain, and
                    improve.
                  </p>
                </div>
              </div>
              <div className="flex-col pb-2">
                <div className="flex gap-4">
                  <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                  <h4 className="text-white font-semibold">
                    User-Focused Solutions
                  </h4>
                </div>
                <p className="text-slate-400">
                  Creating experiences that solve real problems and feel
                  intuitive.
                </p>
              </div>
              <div className="flex-col">
                <div className="flex gap-4 pb-2">
                  <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                  <h4 className="text-white font-semibold">
                    Continuous Growth
                  </h4>
                </div>

                <p className="text-slate-400">
                  Staying curious, learning new technologies, and building
                  better solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
