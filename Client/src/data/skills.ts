import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: IconType;
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: FaReact,
    description: "Building fast, responsive, and accessible user interfaces.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: FaServer,
    description: "Developing scalable APIs and secure backend services.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    id: 3,
    title: "Tools",
    icon: FiTool,
    description: "Tools that support my development workflow.",
    technologies: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];
