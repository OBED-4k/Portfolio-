import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full pt-20 md:pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <header className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            My Skills
          </p>

          <h2 className="mt-4 max-w-3xl mx-auto text-3xl lg:text-5xl font-bold text-white">
            Technologies I use to build modern applications.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            A collection of tools and technologies I use to create responsive
            interfaces, scalable APIs, and complete web applications.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
