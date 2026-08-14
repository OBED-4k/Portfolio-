import MediBridge from "../assets/MediBridge2.jpg";
import Snap from "../assets/Snap.png";
import MultiForm from "../assets/Multiform.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export const projects = [
  {
    id: 1,
    title: "MediBridge",
    description:
      "A healthcare appointment platform where patients can discover doctors, book appointments, and manage their healthcare online.",
    image: MediBridge,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/OBED-4k/MEDIBRIDE",
    live: "https://medi-bridge-client-ruddy.vercel.app/",
    featured: true,
  },

  {
    id: 2,
    title: "Multi-form-project",
    description: "A Multi form project with payment authentication process",
    image: MultiForm,
    technologies: ["JavaScript", "Tailwind Css"],
    github: "https://github.com/OBED-4k/Multi-form-project",
    live: "https://multi-form-project-eight.vercel.app/",
  },

  {
    id: 3,
    title: "Snap",
    description: "A website for to get teams sync, no matter the location.",
    technologies: ["Tailwind Css", "HTML"],
    image: Snap,
    github: "https://github.com/OBED-4k/NFT",
    live: "https://nfttt-nine.vercel.app/",
  },
];
