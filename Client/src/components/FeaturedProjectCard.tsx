import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  index: number;
};

export default function FeaturedProjectCard({
  index,
  image,
  title,
  description,
  technologies,
  github,
  live,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-10 rounded-3xl border border-slate-700/50 bg-slate-900/40 p-8">
      {/* Left */}
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex md:w-1/2 flex-col gap-6 p-4 justify-center">
        <div className="flex items-center gap-2 md:gap-5">
          <span className="text-5xl font-bold text-slate-700">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="h-px w-16 bg-slate-700"></div>
          <p className="text-sm text-nowrap uppercase tracking-widest text-slate-400">
            FEATURED PROJECT
          </p>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="max-w-lg text-slate-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Live
              <IoIosArrowRoundForward className="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Source Code
              <IoIosArrowRoundForward className="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
