import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { SmallCorner } from "./design";
import { SmallStar } from "./design";
import { Link } from "react-router-dom";
import Codezy1 from '../assets/Codezy1.png'
import codezyai from '../assets/codezyai.png'
import portfolio1 from '../assets/portfolio1.png'
import expenzo from '../assets/expenzo.png' 

const projects = [
  {
    title: "Codezy",
    description:
      "A tech video platform inspired by YouTube — designed for exploring and watching coding tutorials and tech content.",
    tags: ["JavaScript", "Tailwind CSS", "React.js"],
    image: Codezy1,
    github: "https://github.com/sujalshah593/Codezy",
    live: "https://effervescent-crepe-836929.netlify.app/",
    featured: true,
  },
  {
    title: "Codezy AI",
    description:
      "A real-time chat application powered by AI, allowing users to interact with an AI assistant for various queries and tasks.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Assistant UI"],
    image: codezyai,
    github: "https://github.com/sujalshah593/Codezy-AI",
    live: "https://codezy-ai-6wui.vercel.app/",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: portfolio1,
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com",
    featured: false,
  },
    {
      title: "Expense Tracker",
      description: "Manage your income and expense in expense tracker with graphs! ",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Recharts"],
      image: expenzo,
      github: "https://github.com/sujalshah593/ExpenseTracker",
      live: "https://expense-tracker-55dj.vercel.app//",
      featured: false,
    },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("all");
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) =>
          activeTab === "featured" ? p.featured : !p.featured
        );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl sm:text-4xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r header from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 extra max-w-2xl mx-auto text-lg">
            A showcase of my recent work, personal projects, and experiments
            with various technologies.
          </p>

          <div className="flex justify-center mt-8 header space-x-2 relative">
            {["all", "featured", "other"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative  rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <SmallCorner
                className="absolute top-2 left-2 z-10 opacity-30"
                position="top-left"
              />
              <SmallCorner
                className="absolute top-2 right-2 z-10 opacity-30"
                position="top-right"
              />
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="p-6 relative">
                {project.featured && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-blue-500 text-white extra font-medium rounded-full">
                    Featured
                  </div>
                )}

                <h3 className="text-lg header font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 extra mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => {
                    let tagClass = "bg-white/5"; // fallback
                    if (tag.toLowerCase() === "react.js") {
                      tagClass = "bg-green-600 text-white"; // React -> Green
                    } else if (tag.toLowerCase() === "javascript") {
                      tagClass = "bg-yellow-500 text-black"; // JS -> Yellow
                    } else if (tag.toLowerCase() === "typescript") {
                      tagClass = "bg-blue-600 text-white"; // TS -> Blue
                    } else if (tag.toLowerCase() === "tailwind css") {
                      tagClass = "bg-cyan-500 text-white"; // Tailwind -> Aqua
                    } else if (tag.toLowerCase() === "framer motion") {
                      tagClass = "bg-purple-600 text-white"; // Framer Motion -> Purple
                    } else if (tag.toLowerCase() === "next.js") {
                      tagClass = "bg-blue-700 text-white"; // Next.js -> Dark Blue
                    } else if (tag.toLowerCase() === "firebase") {
                      tagClass = "bg-orange-500 text-white"; // Firebase -> Orange
                    }

                    return (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs font-medium border border-white/10 ${tagClass}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <LuGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <SmallCorner
                className="absolute bottom-2 left-2 opacity-30"
                position="bottom-left"
              />
              <SmallCorner
                className="absolute bottom-2 right-2 opacity-30"
                position="bottom-right"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/project"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white overflow-hidden group"
          >
            {/* Background gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full border border-white/10"></span>

            <button className="relative extra flex items-center gap-2">
              View All Projects
              <GoArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
//  <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 group"
//           >
//             View All Projects
//             <GoArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//           </a>
