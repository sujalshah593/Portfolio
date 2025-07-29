import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { VscCoffee } from "react-icons/vsc";
import sujal from "../assets/sujal.jpg";
import CountUp from "../reactbits/countup";
import TiltedCard from "../reactbits/card";
import { SmallCorner } from "./design";
import sujalres from '../assets/certificates/sujalres.pdf'

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      icon: <CiCalendar className="w-5 h-5" />,
      label: "Years Experience",
      value: 1,
      bg: "bg-red-500 ",
      iconColor: "text-white",
    },
    {
      icon: <VscCoffee className="w-5 h-5" />,
      label: "Projects Completed",
      value: 10,
      bg: "	bg-orange-500",
    },
    {
      icon: <LuMapPin className="w-5 h-5" />,
      label: "Lived In",
      value: "Vadodara, India",
      bg: "bg-green-500",
      
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >

            <div className="space-y-4">
              <h2 className="text-4xl header sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-300 text-6xl via-blue-300 to-purple-400 bg-clip-text text-transparent">
                  About me
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>

            <div className="space-y-6 extra  text-justify text-gray-300 text-xl leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-cyan-400 font-semibold">
                  Frontend Developer
                </span>{" "}
                with over 1 years of experience creating digital solutions that
                make a difference. I specialize in building modern web
                applications using cutting-edge technologies.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                things work on the internet. Today, I help individuals bring
                their ideas to life through clean, efficient, and user-friendly
                applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div
                  className="text-center group"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 transition hover:scale-110 rounded-full bg-gradient-to-r ${stat.bg} flex items-center justify-center group-hover:brightness-110 transition-all duration-300`}
                  >
                    <div className={`${stat.iconColor}`}>{stat.icon}</div>
                  </div>

                  <div className="text-xl header font-bold text-white mb-1 ">
                    {typeof stat.value === "number" ? (
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator=","
                        className="text-3xl"
                        direction="up"
                        duration={2.3}
                      />
                    ) : (
                      <span className="text-3xl">{stat.value}</span>
                    )}
                    {typeof stat.value === "number" && "+" }
                  </div>
                  <div className="text-sm header  text-gray-400">
                    {stat.label} 
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={sujalres}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <GoDownload className="w-5 h-5 group-hover:translate-y-0.5  transition-transform" />
                <span className="header">Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="header">Let's Talk</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse"></div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative">
                <img
                  src={sujal}
                  altText="Sujal Shah - Frontend Developer"
                  className="z-10 relative  w-full max-w-[500px] h-auto rounded-2xl"
                />

                <div
                  animate={{ y: [0, -5, 0] }} // reduce movement
                  transition={{
                    duration: 5, // slower = smoother
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 hidden lg:flex -right-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full  items-center justify-center shadow-lg shadow-cyan-500/25 z-20"
                >
                  <span className="text-white font-bold text-lg">👋</span>
                </div>

                <div
                  className="absolute hidden lg:flex -bottom-5 lg:-bottom-2 -left-7 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full  items-center justify-center shadow-lg shadow-purple-500/25 z-20"
                >
                  <span className="text-white font-bold">💻</span>
                </div>

                <div className="absolute hidden md:block top-1/2 -left-10  transform -translate-y-1/2 space-y-4 z-20">
                  {["React", "Node.js", "JavaScript"].map((tech, index) => (
                    <div
                      className="px-3 py-1 extra  bg-black/80 backdrop-blur-sm text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
