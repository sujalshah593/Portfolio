"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { SmallCorner, SmallDotLine } from "./design";
import { RiCodeLine } from "react-icons/ri";
import { MdOutlinePalette } from "react-icons/md";
import { GoZap } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import CountUp from "../reactbits/countup";

const skillCategories = [
  {
    title: "Core Frontend",
    icon: <RiCodeLine className="w-6 h-6" />,
  bgColor: "bg-cyan-500",
    iconcolor: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", level: 96, icon: "🟢" },
      { name: "HTML5", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "HTML/CSS", level: 98, icon: "🌐" },
      { name: "Flutter", level: 65, icon: "📱" },
    ],
  },
  {
    title: "Styling & Design",
    icon: <MdOutlinePalette className="w-6 h-6" />,
    bgColor: "bg-purple-500",
    iconcolor: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 98, icon: "💨" },
      { name: "CSS Modules", level: 85, icon: "📦" },
      { name: "Framer Motion", level: 88, icon: "🎭" },
      { name: "Responsive Design", level: 95, icon: "📱" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <GoZap className="w-6 h-6" />,
    bgColor: "bg-green-500",
    iconcolor: "from-green-500 to-teal-500",
    skills: [
      { name: "Git & GitHub", level: 95, icon: "🐙" },
      { name: "Vite", level: 85, icon: "⚡" },
      { name: "ESLint", level: 90, icon: "🔍" },
      { name: "Figma", level: 85, icon: "🎨" },
    ],
  },
  {
    title: "Programming",
    icon: <FaLaptopCode className="w-6 h-6" />,
    bgColor: "bg-red-500",
    iconcolor: "from-red-500 to-orange-500",
    skills: [
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "C++", level: 95, icon: "👾" },
    ],
  },
];

const learningSkills = [
  { name: "Vue.js", icon: "💚", status: "Learning" },
  { name: "Node.js", icon: "⚙️", status: "Learning" },
  { name: "Three.js", icon: "🎮", status: "Exploring" },
  { name: "Redux", icon: "🔄", status: "Learning" },
];

export default function MobileSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full min-h-screen  bg-black py-28 px-4 relative overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16 relative z-10"
        >
          <h2 className="text-5xl sm:text-3xl md:text-4xl lg:text-8xl font-bold mb-4 sm:mb-6 relative px-4">
            <span className="bg-gradient-to-r from-cyan-300 header via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-300 extra max-w-2xl mx-auto text-base sm:text-lg px-4">
            Specialized in modern frontend development with a focus on creating
            exceptional user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-7 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                ease: "easeOut",
              }}
              className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.iconcolor} flex items-center justify-center`}
                >
                  <span className="text-white text-xl">{category.icon}</span>
                </div>
                <h3 className="text-xl  text-white header">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1 extra">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <span>{skill.icon}</span>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${category.bgColor}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }} // triggers only when 40% is in view
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.05 * skillIndex,
                        }}
                        style={{ willChange: "width" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          }}
          transition={{ duration: 1.9, delay: 0.8 }}
          className="mb-12"
        >
          <div className="text-center text-2xl mb-6">
            <h3 className="text-2xl font-bold header text-white mb-4 relative">
              Currently Learning & Exploring
              <SmallDotLine
                className="absolute top-10 -bottom-2 left-1/2 transform -translate-x-1/2"
                dots={5}
              />
            </h3>
            <p className="text-gray-400 extra">
              Technologies I'm actively exploring
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8,
                  rotateY: isInView ? 0 : -180,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                className=" rounded-xl p-4 border border-white/10 hover:border-yellow-500/50 transition-all duration-500 group text-center relative overflow-hidden cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(249, 115, 22, 0.05), rgba(239, 68, 68, 0.1))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating dots */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  className="text-3xl mb-3 relative z-10"
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateZ: 15,
                    filter: "drop-shadow(0 0 8px rgba(234, 179, 8, 0.5))",
                  }}
                >
                  {skill.icon}
                </motion.div>
                <motion.div
                  className="text-white text-sm header font-medium mb-2 relative z-10"
                  whileHover={{ color: "#fbbf24" }}
                >
                  {skill.name}
                </motion.div>
                <motion.div
                  className="text-xs text-yellow-400 extra bg-yellow-500/20 px-3 py-1.5 rounded-full border border-yellow-500/30 relative z-10"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(234, 179, 8, 0.4)",
                      "0 0 0 4px rgba(234, 179, 8, 0.1)",
                      "0 0 0 0 rgba(234, 179, 8, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(234, 179, 8, 0.3)",
                    scale: 1.05,
                  }}
                >
                  {skill.status}
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-b-xl"
                  initial={{ width: "0%" }}
                  animate={{ width: isInView ? "100%" : "0%" }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 blur-xl"
                  transition={{ duration: 0.3 }}
                />
                <SmallCorner
                  className="absolute top-1 left-1 opacity-30 group-hover:opacity-60 transition-opacity"
                  position="top-left"
                />
                <SmallCorner
                  className="absolute bottom-1 right-1 opacity-30 group-hover:opacity-60 transition-opacity"
                  position="bottom-right"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-cyan-400 header mb-1">
              {" "}
              <CountUp
                from={0}
                to={1}
                separator=","
                className="text-3xl"
                direction="up"
                duration={2.3}
              />
              +
            </div>
            <div className="text-gray-400 text-sm header">Years React</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold header text-purple-400 mb-1">
              {" "}
              <CountUp
                from={0}
                to={15}
                separator=","
                className="text-3xl"
                direction="up"
                duration={2.3}
              />
              +
            </div>
            <div className="text-gray-400 text-sm header">Technologies</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold header text-green-400 mb-1">
              {" "}
              <CountUp
                from={0}
                to={10}
                separator=","
                className="text-3xl"
                direction="up"
                duration={2.3}
              />
              +
            </div>
            <div className="text-gray-400 header text-sm">Projects</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-orange-400 mb-1 header">
              <p className="text-3xl">8/7</p>
            </div>
            <div className="text-gray-400 text-sm header">Learning</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center mb-14 gap-4 px-6 py-4 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-full border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 group-hover:text-white extra transition-colors duration-300">
                Constantly evolving and learning new technologies
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
