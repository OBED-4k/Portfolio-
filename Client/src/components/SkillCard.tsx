import type { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  icon: IconType;
};

export default function SkillCard({
  title,
  description,
  technologies,
  icon,
}: Props) {
  const Icon = icon;
  return (
    <div className=" group rounded-3xl border border-slate-700/50 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
        <Icon className="text-3xl text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 transition-colors duration-300 hover:bg-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
