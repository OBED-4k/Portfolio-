import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Image from "../assets/MIKEOBED.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="w-full mt-25">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-10 lg: lg:px-20 md:py-8 py-3">
        {/* Left side */}
        <div className="flex flex-col">
          <h1 className="text-white md:text-5xl text-3xl pb-5 fontSora font-bold">
            👋 Hi, I'm
          </h1>
          <h2 className="fontSora text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mike Obed
          </h2>
          <p className="text-2xl md:text-3xl">Frontend Developer</p>
          <p className="lg:w-130 w-75 md:w-90">
            I build fast, responsive, and accessible web applications using
            React, TypeScript, and modern frontend technologies. With full-stack
            experience, I enjoy creating seamless experiences from the UI to the
            API.
          </p>
          <div className="flex gap-5 pt-8">
            <a
              href="#project"
              className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white md:px-5 px-3 py-2 md:py-2.5 rounded-full font-medium hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all  duration-300 hover:-translate-y-0.5 hover:shadow-xl md:text-nowrap"
            >
              View Projects
            </a>
            {/* <Link to="/project"></Link> */}
            <a
              href="/Mike-Obed-Resume.pdf"
              download="Mike-Obed-Frontend-Resume.pdf"
              className="relative flex gap-1 border-2 md:border-3 lg:border-2 border-(--primary) hover:bg-(--primary-hover) text-(--primary)
              hover:text-slate-200 hover:-translate-y-0.5 rounded-full px-3 py-3 w-45"
            >
              Download Resume
              <span className="absolute right-1/20 text-2xl">
                <FiArrowUpRight />
              </span>
            </a>
          </div>
          <div className="flex flex-row gap-5 md:gap-7 p-5 md:pb-0 pb-20">
            <a
              href="https://github.com/OBED-4k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/isaiah-obed-5b449a427"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
            <a
              href="mailto:simonmike299@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <span>Email</span>
              <HiOutlineMail />
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex justify-center items-center flex-1">
          <div className="relative lg:w-80 md:w-68 md:h-68 w-70 h-70 lg:h-80">
            {/* Photo */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-700">
              <img
                src={Image}
                alt="Mike Obed"
                className="w-full h-full object-cover"
              />
            </div>

            {/* React */}
            <div className="absolute -top-15 left-1/2 -translate-x-1/2">
              <FaReact className="text-sky-400 text-5xl" />
            </div>

            {/* Node */}
            <div className="absolute top-10 -right-10">
              <FaNodeJs className="text-green-500 text-5xl" />
            </div>

            {/* TypeScript */}
            <div className="absolute bottom-16 -right-13">
              <BiLogoTypescript className="text-blue-500 text-5xl" />
            </div>

            {/* Mongo */}
            <div className="absolute -bottom-15 left-1/2 -translate-x-1/2">
              <BiLogoMongodb className="text-green-500 text-5xl" />
            </div>

            {/* JavaScript */}
            <div className="absolute bottom-10 -left-12">
              <DiJavascript className="text-yellow-400 text-5xl" />
            </div>

            {/* Express */}
            <div className="absolute top-10 -left-12">
              <span className="text-gray-300 text-5xl">ex</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
