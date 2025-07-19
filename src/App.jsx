import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./portfolio/Navbar";
import HomePage from "./portfolio/Homepage";
import Project from "./portfolio/Project";
import ScrollToTop from "./portfolio/scroll";
import Footer from "./portfolio/footer";


export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ScrollToTop is now here */}
      <Navbar /> {/* Navbar is now here */}
      <AnimatedPages />
      <Footer/>
    </Router>
    
  );
}

function AnimatedPages() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper><Project /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function PageWrapper({ children }) {
  return (
  <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
