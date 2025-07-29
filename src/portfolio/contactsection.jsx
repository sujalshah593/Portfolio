import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MdMailOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com"
import { useSound } from 'react-sounds';

import {
  SmallLine,
  SmallArrow,
  SmallDotLine,
  SmallUnderline,
  SmallCross,
  SmallCorner,
  SmallStar,
} from "./design"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { play } = useSound('notification/success');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_d25vjvr", // e.g., "service_abc123"
      "template_8ix1f6v", // e.g., "template_xyz456"
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
      },
      "c1tYcWhfCiOa2NAYT" // e.g., "xyz987SECRETKEY"
    );
    setSubmitSuccess(true);
    play();
    setFormState({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Try again.");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitSuccess(false), 5000);
  }
};


  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-gradient-to-r from-cyan-700/10 to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-[10%] w-72 h-72 bg-gradient-to-r from-purple-700/10 to-pink-700/10 rounded-full blur-3xl"></div>
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 extra max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <span className=" text-white header">Contact Information</span>
            <p className="text-gray-300 mt-5 extra">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some
              creative work, don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r bg-red-600 flex items-center justify-center flex-shrink-0">
                  <MdMailOutline className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white header font-medium mb-1 relative">
                    Email
                    <SmallLine className="absolute -bottom-1 left-0" width="20" />
                  </h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-300 extra hover:text-cyan-400 transition-colors duration-300"
                  >
                    sujalshah593@gmail.com
                  </a>
                </div>
                <SmallArrow className="absolute -right-4 top-1/2 transform -translate-y-1/2" direction="right" />
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r bg-lime-500 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white header font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 extra hover:text-cyan-400 transition-colors duration-300"
                  >
                    +91 9825647679
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r bg-green-500 flex items-center justify-center flex-shrink-0">
                  <LuMapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium header mb-1">Location</h4>
                  <p className="text-gray-300 extra">Vadodara - 390001</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-white font-medium mb-4 header">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sujalshah593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border hover:scale-110 bg-black  flex items-center justify-center hover:bg-gradient-to-r  transition-all duration-300"
                >
                  <FiGithub className="w-5 h-5 fill-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujal-shah-399334306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-500 flex items-center hover:scale-110 justify-center hover:bg-gradient-to-r hover:from-cyan-500/20  hover:border-cyan-500/50 transition-all duration-300"
                >
                  <FiLinkedin className="w-5 h-5 fill-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-white/5 hover:scale-105 transition to-white/[0.02] rounded-2xl p-6 border border-white/10 relative"
          >
            <SmallCorner className="absolute top-2 left-2 opacity-30" position="top-left" />
            <SmallCorner className="absolute top-2 right-2 opacity-30" position="top-right" />

            <h3 className="text-2xl font-bold header text-white mb-6 relative">
              Send Me a Message
              <SmallDotLine className="absolute -bottom-2 left-0" dots={4} />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative ">
                <label htmlFor="name" className="block header text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 extra bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="Sujal Shah"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm header font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 extra bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="sujal@gmail.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm header font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 extra bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="Hi, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 relative"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span className="extra">Send Message</span>
                    <SmallArrow className="absolute -right-8 top-1/2 transform -translate-y-1/2" direction="right" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg relative">
                  <p className="text-cyan-300 text-center">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                  <SmallStar className="absolute -top-2 -right-2" />
                </div>
              )}
            </form>

            <SmallCorner className="absolute bottom-2 left-2 opacity-30" position="bottom-left" />
            <SmallCorner className="absolute bottom-2 right-2 opacity-30" position="bottom-right" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
