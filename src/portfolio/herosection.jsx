import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";
import react from "../assets/react.svg";
import n1 from "../assets/n1.svg";
import ts from "../assets/ts.svg";
import node2 from "../assets/node2.png";
import tailwind2 from "../assets/tailwind2.png";
import mongodb from "../assets/mongodb.png";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import ClickSpark from "../reactbits/clickhere";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 139, 248, 0.15) 0%, rgba(0, 0, 0, 0) 60%)`,
  };

  return (
    <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-50 px-4 sm:px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
     <div className="absolute top-58 right-[37%] w-110 h-96 bg-gradient-to-r from-gray-400/25 to-gray-100/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-green-300 text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="header">Available for Work</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-7xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r header  from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            Sujal Shah
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl extra  text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I'm a <span className="text-green-500 header">Frontend Developer</span> passionate about building exceptional digital experiences that live at
          the intersection of design and technology.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="flex extra items-center justify-center gap-2">
              View My Work
              <IoLayersOutline className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="flex extra items-center justify-center gap-2">
              Get In Touch
              <IoIosArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1.3, delay: 1.4 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center pt-20 gap-2">
            <HiOutlineMinusSmall width="40" color="aqua" />
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              Tech Stack
            </p>
            <HiOutlineMinusSmall width="40" color="aqua" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-3 header max-w-3xl mx-auto">
            {[
              { name: "React", icon: react },
              { name: "Next.js", icon: n1 },
              { name: "TypeScript", icon: ts },
              { name: "Node.js", icon: node2 },
              { name: "Tailwind CSS", icon: tailwind2 },
              { name: "MongoDB", icon: mongodb },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group hover:scale-110 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 border transition-all duration-300
          ${
            tech.name === "Next.js" ||
            tech.name === "Node.js" ||
            tech.name === "Tailwind CSS" ||
            tech.name === "MongoDB"
              ? "bg-white border-white/20 group-hover:border-cyan-500/50"
              : "bg-white/5 border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5"
          }`}
                >
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className={`object-contain ${
                      tech.name === "TypeScript"
                        ? "w-10 rounded-lg h-10 "
                        : "w-8 h-8"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-9 rounded-full border-2 border-white/20 flex items-center justify-center">
            <FaChevronDown className="text-white animate-bounce w-4 h-4" />
          </div>
          <span className="text-xs text-gray-400">Scroll Down</span>
        </div>
      </motion.div>

      {/* Feature cards gradient */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"
      ></motion.div>
    </section>
    </ClickSpark>
  );
}
