import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import mainresume from '../assets/certificates/mainresume.pdf'

const navItems = [
  { label: "Home", id: "home" },
  { label: "About me", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/sujalshah593 ",
    label: "GitHub",
  },
  {
    icon: <CiLinkedin className="w-5 h-5 hover:bg-blue-400" />,
    href: "https://www.linkedin.com/in/sujal-shah-399334306/",
    label: "LinkedIn",
  },
  {
    icon: <CiMail className="w-5 h-5 hover:bg-red-400" />,
    href: "mailto:sujalshah593@gmail.com",
    label: "Email",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Not on the homepage ➔ navigate to homepage
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on the homepage ➔ scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = navItems.find((item) => {
        if (!item.href) return false; // <-- Guard against undefined
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current.href.substring(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, isCertificate) => {
    if (isCertificate) {
      navigate("/", { state: { scrollTo: "certificate" } }); // no hash, matches id
      setMobileOpen(false);
      return;
    }
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`w-full header  fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center space-x-3"
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-out"></div>
                <div className="absolute inset-2 bg-black rounded-lg rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-out"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-500">
                    S
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  Sujal Shah
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Frontend Developer
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative px-4 py-2 text-lg font-medium rounded-lg group ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  <div
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Social + Resume */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:bg-white/5 rounded-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href={mainresume}
              download
              className="relative group px-6 py-2.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <IoDownloadOutline className="w-4 h-4" />
                <span className="text-xl font-light">Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-xl">
          <div className="space-y-3 flex flex-col">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setMobileOpen(false);
                  }}
                  className={`block text-lg font-semibold py-2 px-4 rounded-md ${
                    isActive
                      ? "bg-aqua-500 text-white"
                      : "text-gray-300 hover:bg-gray-300 hover:text-black"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Social & Resume */}
          <div
            className="flex items-center flex-wrap gap-4 pt-4 opacity-0 translate-x-4 animate-slide-in"
            style={{
              animationDelay: `${navItems.length * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-full font-medium hover:bg-cyan-700 transition"
            >
              <IoDownloadOutline className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
