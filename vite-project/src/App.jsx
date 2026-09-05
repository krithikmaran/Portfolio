import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import resume from "./assets/Krithik Maran Resume.pdf";
import logo from "./assets/large-website-logo.svg";
import osuEngineeringLogo from "./assets/Engineering-REV-Stacked-RGBHEX.png";
import cintasLogo from "./assets/CintasLogo.png";
import EnterpriseSystems from "./EnterpriseSystems";
import EngineeringIntelligence from "./EngineeringIntelligence";
import KubernetesDiagram from "./KubernetesDiagram";
import WebsiteStack from "./WebsiteStack";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState("dark");

  // --- Theme Management ---
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const initialTheme = savedTheme || (mediaQuery.matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // --- Content Data ---
  const sections = [
    {
      type: "hero",
      title: "Krithik Maran",
      subtitle: "SAP Analyst // Software Developer // Data Engineer // Problem Solver",
      content: "Bridging the gap between complex enterprise systems and streamlined business processes. Currently engineering the intersection of modern Enterprise Systems, Cloud Platforms, and AI.",
    },
    {
      type: "experience",
      title: "Experience",
      role: "IT SAP Analyst",
      logo: cintasLogo,
      content: [
        "Engineering S/4HANA solutions with a focus on ABAP RAP and CDS views.",
        "Modernizing legacy enterprise workflows leveraging modern SAP ABAP techniques.",
        "Utilizing AI insights and Cloud-native tools to automate complex data validation and processing."
      ],
    },
    {
      type: "education",
      title: "Education",
      institution: "The Ohio State University",
      degree: "B.S. Electrical and Computer Engineering",
      logo: osuEngineeringLogo,
      content: ["Graduated: May 2025", "Computer Engineering"],
    },
    {
      type: "enterprise-systems",
      title: "Enterprise Systems",
    },
    {
      type: "engineering-intelligence",
      title: "Engineering & Intelligence",
    },
    {
      type: "k8s-diagram",
      title: "Cloud Infrastructure Project",
    },
    {
      type: "website-stack",
      title: "Website Architecture & CI/CD",
    },
  ];

  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={containerRef}
      className="portfolio-container w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide theme-transition selection:bg-neutral-500 selection:text-white"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        style={{ scaleX, backgroundColor: "var(--text-main)" }}
      />

      <motion.nav
        className="fixed top-0 left-0 w-full px-4 py-3 sm:px-6 sm:py-4 md:p-6 flex justify-between items-center z-[90] bg-[var(--bg-main)]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ filter: "var(--nav-logo-filter)" }}
          className="h-8 sm:h-10 md:h-14 w-auto flex-shrink-0 transition-all active:scale-95 cursor-pointer"
          onClick={() => document.getElementById("section-0")?.scrollIntoView({ behavior: "smooth" })}
        />

        <div
          style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--card-border)" }}
          className="border backdrop-blur-2xl px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full flex space-x-3 sm:space-x-4 md:space-x-6 items-center shadow-xl"
        >
          <a href={resume} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-[11px] md:text-xs tracking-wider sm:tracking-widest font-bold uppercase hover:opacity-70 transition-opacity">Resume</a>
          <a href="https://github.com/krithikmaran" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-[11px] md:text-xs tracking-wider sm:tracking-widest font-bold uppercase hover:opacity-70 transition-opacity">GitHub</a>
          <a href="https://linkedin.com/in/krithikmaran" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-[11px] md:text-xs tracking-wider sm:tracking-widest font-bold uppercase hover:opacity-70 transition-opacity">LinkedIn</a>

          <button
            onClick={toggleTheme}
            className="hover:opacity-50 transition-all border-l pl-2.5 sm:pl-3 md:pl-4 border-current flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Moon size={15} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
            ) : (
              <Sun size={15} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </motion.nav>

      {sections.map((section, index) => (
        <section
          key={index}
          id={`section-${index}`}
          className="portfolio-section w-full flex flex-col justify-between items-center snap-start relative px-3 sm:px-6 overflow-hidden"
        >
          {/* Top fixed spacer matching navbar height - never collapses */}
          <div className="shrink-0 h-14 sm:h-18 md:h-24 w-full pointer-events-none" />

          {/* Center Main Content Area with adaptive internal scroll fallback for short screens */}
          <motion.div
            className="w-full max-w-4xl text-center flex flex-col items-center z-10 my-auto py-1 min-h-0 flex-1 justify-center overflow-y-auto md:overflow-visible scrollbar-hide"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {section.type === "hero" && (
              <div className="w-full flex flex-col items-center">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-3 sm:mb-4">{section.title}</h1>
                <p style={{ color: "var(--text-muted)" }} className="text-[10.5px] sm:text-xs md:text-sm tracking-[0.22em] md:tracking-[0.3em] uppercase mb-4 sm:mb-6 md:mb-8 font-bold max-w-xl">{section.subtitle}</p>
                <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }} className="border p-4 sm:p-7 md:p-10 rounded-2xl md:rounded-3xl backdrop-blur-sm mx-auto shadow-xl max-w-2xl">
                  <p className="text-xs sm:text-base md:text-xl leading-relaxed font-light italic">{section.content}</p>
                </div>
              </div>
            )}

            {section.type === "experience" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-sm sm:text-base md:text-xl font-light tracking-[0.35em] md:tracking-[0.4em] uppercase mb-2 sm:mb-4 md:mb-6">{section.title}</h2>
                {section.logo && (
                  <div className="mb-2 sm:mb-4 md:mb-8 flex justify-center">
                    <img
                      src={section.logo}
                      alt="Company"
                      style={{ filter: "var(--partner-logo-filter)" }}
                      className="h-9 sm:h-14 md:h-24 w-auto object-contain opacity-90"
                    />
                  </div>
                )}
                <h3 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase mb-3 sm:mb-4 md:mb-8 tracking-tighter">{section.role}</h3>
                <div className="space-y-2 sm:space-y-3 w-full max-w-2xl mx-auto">
                  {section.content.map((bullet, i) => (
                    <div key={i} style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }} className="border p-3 sm:p-3.5 md:p-4 rounded-xl backdrop-blur-sm">
                      <p style={{ color: "var(--text-muted)" }} className="text-xs sm:text-sm md:text-base font-light italic text-center leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.type === "education" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-sm sm:text-base md:text-xl font-light tracking-[0.35em] md:tracking-[0.4em] uppercase mb-2 sm:mb-4 md:mb-6">{section.title}</h2>
                <div className="mb-3 sm:mb-5 md:mb-8 flex justify-center">
                  <img
                    src={section.logo}
                    alt="University"
                    style={{ filter: "var(--partner-logo-filter)" }}
                    className="h-[60px] sm:h-[95px] md:h-[160px] w-auto object-contain opacity-90"
                  />
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase mb-1 sm:mb-2 tracking-tighter">{section.institution}</h3>
                <p style={{ color: "var(--text-muted)" }} className="text-xs sm:text-sm md:text-base mb-3 sm:mb-5 md:mb-7 italic uppercase tracking-wider md:tracking-widest">{section.degree}</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {section.content.map((item, i) => (
                    <span key={i} style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }} className="px-3 sm:px-4 py-1.5 rounded-full border text-[10px] sm:text-[11px] md:text-xs uppercase font-bold tracking-wider">{item}</span>
                  ))}
                </div>
              </div>
            )}

            {section.type === "enterprise-systems" && (
              <EnterpriseSystems />
            )}

            {section.type === "engineering-intelligence" && (
              <EngineeringIntelligence />
            )}

            {section.type === "k8s-diagram" && (
              <KubernetesDiagram />
            )}

            {section.type === "website-stack" && (
              <WebsiteStack />
            )}

            {section.type === "stack" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-base sm:text-xl md:text-3xl font-light tracking-[0.35em] sm:tracking-[0.4em] uppercase mb-2 md:mb-4">{section.title}</h2>
                {section.subtitle && (
                  <p style={{ color: "var(--text-muted)" }} className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 md:mb-8 font-semibold text-center max-w-xl">
                    {section.subtitle}
                  </p>
                )}
                {!section.subtitle && <div className="mb-4 md:mb-8" />}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl">
                  {section.content.map((item, i) => (
                    <div key={i} style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }} className="px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl border">
                      <span className="text-xs sm:text-sm md:text-lg tracking-wider md:tracking-widest uppercase font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Guaranteed Visible Scrolling Indicator Footer - Never pushed off screen */}
          <div className="shrink-0 w-full flex items-end justify-center pb-3 sm:pb-5 md:pb-8 safe-pb z-30">
            <div
              role="button"
              tabIndex={0}
              aria-label={index < sections.length - 1 ? "Next Section" : "Back to Top"}
              className="flex flex-col items-center cursor-pointer group py-1.5 px-6 select-none active:opacity-60 transition-opacity touch-manipulation"
              onClick={() => {
                const isLast = index === sections.length - 1;
                const targetId = isLast ? "section-0" : `section-${index + 1}`;
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                  targetEl.scrollIntoView({ behavior: "smooth" });
                } else {
                  const step = containerRef.current?.clientHeight || window.innerHeight;
                  containerRef.current?.scrollTo({
                    top: isLast ? 0 : (containerRef.current?.scrollTop || 0) + step,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span style={{ color: "var(--text-muted)" }} className="text-[10px] md:text-xs tracking-[0.35em] uppercase mb-1.5 md:mb-2 font-bold transition-colors group-hover:text-[var(--text-main)]">
                {index < sections.length - 1 ? "Next" : "Back"}
              </span>
              <div style={{ backgroundColor: "var(--card-border)" }} className="w-[1.5px] h-7 sm:h-8 md:h-10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ backgroundColor: "var(--text-main)" }}
                  animate={{
                    y: index < sections.length - 1 ? ["-100%", "100%"] : ["100%", "-100%"],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;