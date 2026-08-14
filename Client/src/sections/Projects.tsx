import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pt-30 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="p-6 max-w-3xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm font-semibold">
            Featured Projects
          </p>
          <h2 className="mt-5 text-2xl md:text-4xl font-bold leading-tight">
            Projects I've built with a focus on performance, usability, and
            clean code.
          </h2>
          <p className="mt-6 text-slate-400 leading-8">
            A selection of applications demonstrating my frontend skills and
            full-stack experience.
          </p>
        </header>
        <div className="flex flex-col gap-10 mt-10 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30">
          {projects.map((project, index) => (
            <FeaturedProjectCard
              index={index}
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
