import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiStar } from "react-icons/ci";
import { LuQuote } from "react-icons/lu";
import CountUp from "../reactbits/countup";
import { useState } from "react";
import meet from "../assets/meet.jpg";
import mansi from "../assets/mansi.jpg";
import pranjal from "../assets/pranjal.jpg";
import Riya from "../assets/Riya.jpg";
import vipul from "../assets/vipul.jpg";
import nishant from "../assets/nishant.jpg";
import indrajit from "../assets/indrajit.jpg";
import shashank from "../assets/shashank.jpg";
import mohit from "../assets/mohit.jpg";
import harsh from "../assets/harsh.jpg";
import Nidhi from "../assets/Nidhi.png";
import yovan from "../assets/yovan.jpg";
import jeet from "../assets/jeet.jpg";
import ved from "../assets/ved.jpg";
import jay from "../assets/jay.jpg";
import samarth from "../assets/samarth.jpg";
import vanshika from "../assets/vanshika.jpg";
import { SmallStar } from "./design";

const reviews = [
  {
    id: 1,
    name: "Meet Bhayani",
    role: "Data Scientist ",
    avatar: meet,
    rating: 5,
    review:
      "Sujal delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
  },
  {
    id: 2,
    name: "Mansi Shah",
    role: "Senior Software Engineer ",
    avatar: mansi,
    rating: 5,
    review:
      "Impressive problem-solving abilities and attention to detail. Sujal is a developer you can trust with complex projects. ",
  },
  {
    id: 3,
    name: "Pranjal Oza",
    role: "Data Scientist ",
    avatar: pranjal,
    rating: 5,
    review:
      "Sujal's creativity and problem-solving skills are outstanding. He delivered our project on time and within budget.",
  },
  {
    id: 4,
    name: "Riya Patel",
    role: "Data Scientist ",
    avatar: Riya,
    rating: 5,
    review:
      "Excellent communication and technical skills. Sujal understood our requirements perfectly and help in Designing our website.",
  },
  {
    id: 5,
    name: "Vipul Parekh",
    role: "Project Manager",
    avatar: vipul,
    rating: 5,
    review:
      "Sujal showed great enthusiasm and a strong willingness to learn throughout the project. Even as a second-year student, he picked up tasks quickly and delivered them with dedication. I'm impressed by his potential and positive attitude.",
  },
  {
    id: 6,
    name: "Nishant Damani",
    role: "Data Analyst",
    avatar: nishant,
    rating: 5,
    review:
      "Professional, reliable, and skilled. Sujal helped us modernize our online presence with a stunning website.",
  },
  {
    id: 7,
    name: "Indrajit Atodariya",
    role: "Software Engineer",
    avatar: indrajit,
    rating: 5,
    review:
      "Sujal's code quality is exceptional. He writes clean, maintainable code and follows best practices consistently.",
  },
  {
    id: 8,
    name: "Shashank Pithva",
    role: "AI/ML Engineer",
    avatar: shashank,
    rating: 5,
    review:
      "Impressive problem-solving abilities and attention to detail. Sujal is a developer you can trust with complex projects.",
  },
  {
    id: 9,
    name: "Mohit Paladiya",
    role: "Full Stack Developer",
    avatar: mohit,
    rating: 4,
    review:
      "Sujal consistently delivers clean, efficient code and communicates effectively throughout the project lifecycle.",
  },
  {
    id: 10,
    name: "Harsh Dholakiya",
    role: "Frontend Developer",
    avatar: harsh,
    rating: 5,
    review:
      "Sujal’s backend solutions are robust and scalable. He’s a reliable team player.",
  },
  {
    id: 11,
    name: "Nidhi Chaudhary",
    role: "UI/UX Designer",
    avatar: Nidhi,
    rating: 5,
    review:
      "Excellent project management skills and timely delivery. Sujal exceeded our expectations.",
  },
  {
    id: 12,
    name: "Yovan Badarshahi",
    role: "Full Stack Engineer",
    avatar: yovan,
    rating: 4,
    review:
      "Working with Sujal was a smooth experience. He quickly understood tasks and delivered with focus. A motivated learner with great potential.",
  },
  {
    id: 13,
    name: "Jeet Khambhaita",
    role: "Cloud Engineer",
    avatar: jeet,
    rating: 5,
    review:
      "Thorough testing and attention to detail. Sujal ensures high-quality releases.",
  },
  {
    id: 14,
    name: "Ved Darji",
    role: "AI/ML Engineer",
    avatar: ved,
    rating: 4,
    review:
      "Sujal supported our AI/ML team with clean and responsive frontend work. His designs made our tools easier to use and visually appealing.",
  },
  {
    id: 15,
    name: "Jayveersinh Solanki",
    role: "Backend Developer",
    avatar: jay,
    rating: 5,
    review:
      "Sujal was great to work with. He handled the frontend smoothly and made sure it integrated well with our backend APIs.",
  },
  {
    id: 16,
    name: "Samarth Parekh",
    role: "Full Stack Developer",
    avatar: samarth,
    rating: 4,
    review:
      "Sujal did a great job on the frontend side. He was quick, detail-oriented, and ensured smooth integration with our backend services.",
  },
  {
    id: 17,
    name: "Vanshika Thesiya",
    role: "MERN Stack Developer",
    avatar: vanshika,
    rating: 5,
    review:
      "Sujal was a great support on the frontend. His React skills and eye for UI made a real difference in our MERN stack project.",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full">
        <div className="flex justify-between items-start mb-4">
          <LuQuote className="w-8 h-8 text-cyan-400 opacity-50" />
          <div className="flex space-x-1">
            {[...Array(review.rating)].map((_, i) => (
              <CiStar
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-300 extra text-sm leading-relaxed mb-6 line-clamp-4">
          "{review.review}"
        </p>
        <div className="flex items-center space-x-3">
          <img
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
          />
          <div>
            <h4 className="text-white header font-semibold text-sm">{review.name}</h4>
            <p className="text-gray-400 text-xs extra">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfiniteCarousel = ({ reviews, direction = "forward" }) => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x:
            direction === "forward"
              ? [0, -100 * reviews.length]
              : [-100 * reviews.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 90,
            ease: "linear",
          },
        }}
        style={{ width: `${200 * reviews.length}%` }}
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const firstHalf = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondHalf = reviews.slice(Math.ceil(reviews.length / 2));


  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-18 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[20%] w-72 h-72 bg-gradient-to-r from-purple-700/10 to-pink-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-72 h-72 bg-gradient-to-r from-cyan-700/10 to-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 2.5 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl sm:text-4xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r header from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Client Reviews
            </span>
          </h2>
         

          <h2 className="text-2xl header sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block text-white text-3xl  ">
              Worked alongside peers  
            </span>

            <span className="block bg-gradient-to-r text-2xl from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              who reviewed my work.
            </span>
          </h2>

          <p className="text-gray-300 extra max-w-2xl mx-auto text-lg">
            Here's what my clients and collaborators have to say about working
            with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="relative">
            <InfiniteCarousel reviews={firstHalf} direction="forward" />
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
          </div>

          <div className="relative">
            <InfiniteCarousel reviews={secondHalf} direction="reverse" />
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r header from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp
                from={0}
                to={50}
                separator=","
                className="text-4xl"
                direction="up"
                duration={2.3}
              />
              <span className="text-3xl">+</span>
            </div>
            <div className="text-gray-400 header text-sm">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r header from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <CountUp
                from={0}
                to={100}
                separator=","
                   className="text-4xl"
                direction="up"
                duration={2.3}
              />
              <span className="text-3xl">%</span>
            </div>
            <div className="text-gray-400 text-sm header">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r header from-green-400 to-teal-400 bg-clip-text text-transparent">
              <CountUp
                from={0}
                to={4}
                separator=","
                   className="text-4xl"
                direction="up"
                duration={2.3}
              />
              <span className="text-3xl">.8/5</span>
            </div>
            <div className="text-gray-400 text-sm header ">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r header from-orange-400 to-red-400 bg-clip-text text-transparent">
              <span className="text-3xl">24/7</span>
            </div>
            <div className="text-gray-400 text-sm header">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
