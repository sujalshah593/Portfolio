import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import {
  SmallLine,
  SmallArrow,
  SmallDotLine,
  SmallUnderline,
  SmallCorner,
  SmallStar,
} from "./design";
import certi1 from '../assets/certificates/certi1.pdf'

const certifications = [
  {
    title: "Decode C++ with DSA",
    issuer: "PW Skills",
    date: "25th August 2024",
    image: "C++ DSA Certificate",
    link: certi1,
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="certificate" ref={ref} className="relative py-15 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-[10%] w-72 h-72 bg-gradient-to-r from-purple-700/10 to-pink-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-[10%] w-72 h-72 bg-gradient-to-r from-cyan-700/10 to-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl sm:text-4xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r header from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 extra max-w-2xl mx-auto text-lg">
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <SmallCorner className="absolute top-2 left-2 opacity-20" position="top-left" />
              <SmallCorner className="absolute top-2 right-2 opacity-20" position="top-right" />

              <div className="p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative">
                  <FaAward className="w-6 h-6 text-cyan-400" />
                  <SmallStar className="absolute -top-2 -right-2" />
                </div>
                <h3 className="text-lg font-bold mb-1 header text-white group-hover:text-cyan-300 transition-colors duration-300 relative">
                  {cert.title}
                  <SmallLine
                    className="absolute -bottom-1 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    width="40"
                  />
                </h3>
                <p className="text-gray-400 extra text-sm mb-4 relative">
                  {cert.issuer} • {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center extra text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 relative group"
                >
                  <span>View Certificate</span>
                  <RiExternalLinkLine  className="ml-1 w-4 h-4" />
                  <SmallArrow
                    className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    direction="right"
                  />
                </a>
              </div>

              <SmallCorner className="absolute bottom-2 left-2 opacity-20" position="bottom-left" />
              <SmallCorner className="absolute bottom-2 right-2 opacity-20" position="bottom-right" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
