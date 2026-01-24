import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import resume from "./assets/KrithikMaranResume.pdf";
import logo from "./assets/large-website-logo.svg";
import osuEngineeringLogo from "./assets/Engineering-REV-Stacked-RGBHEX.png"; 
import "./App.css";

function App() {
  const sections = [
    {
      type: "hero",
      title: "Krithik Maran",
      subtitle: "IT SAP Analyst // Data Engineer // Problem Solver",
      content: "Bridging the gap between complex enterprise systems and streamlined business processes. Currently engineering the nexus of modern Enterprise Systems, Cloud Platforms, and AI.",
    },
    {
      type: "education",
      title: "Education",
      institution: "The Ohio State University",
      degree: "B.S. Electrical and Computer Engineering",
      logo: osuEngineeringLogo,
      content: ["Graduated: May 2025", "Summa Cum Laude", "Computer Engineering"],
    },
    {
      type: "stack",
      title: "Enterprise Systems",
      content: [
        "SAP S/4HANA", 
        "ABAP RAP & BAdI", 
        "AMDP / SQLScript", 
        "HANA CDS Views", 
        "Fiori UI", 
        "Data Migration"
      ],
    },
    {
      type: "stack",
      title: "Engineering & Intelligence",
      content: [
        "Python (Pandas)", 
        "PyTorch / Scikit-Learn", 
        "PostgreSQL", 
        "React.JS", 
        "SQL", 
        "Ignition SCADA"
      ],
    },
    {
      /* UPDATED: OCI FREE TIER KUBERNETES PROJECT */
      type: "stack",
      title: "Cloud Infrastructure Project",
      content: [
        "Custom Oracle Cloud (OCI) Kubernetes Cluster", 
        "ARM64 Ampere Architecture", 
        "MetalLB",
        "Deployed Containerized Microservices to Automate Tasks"
      ],
    },
    {
      type: "stack",
      title: "Website Stack",
      content: [
        "Vercel Hosting", 
        "Cloudflare Domain", 
        "Kubernetes Backend (In Development)"
      ],
    },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacityIndicator = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-black selection:bg-white selection:text-black">
      
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-white/40 origin-left z-[60]" style={{ scaleX }} />

      {/* Header */}
      <motion.nav
        className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img src={logo} alt="Logo" className="h-7 md:h-9 opacity-90 hover:opacity-100 transition-opacity" />
        
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-full flex space-x-10 items-center shadow-2xl">
          <a href={resume} download className="text-[12px] md:text-[14px] tracking-[0.2em] font-medium text-neutral-300 hover:text-white transition-all hover:scale-105 uppercase">Resume</a>
          <a href="https://github.com/krithikmaran" target="_blank" rel="noopener noreferrer" className="text-[12px] md:text-[14px] tracking-[0.2em] font-medium text-neutral-300 hover:text-white transition-all hover:scale-105 uppercase">GitHub</a>
          <a href="https://linkedin.com/in/krithikmaran" target="_blank" rel="noopener noreferrer" className="text-[12px] md:text-[14px] tracking-[0.2em] font-medium text-neutral-300 hover:text-white transition-all hover:scale-105 uppercase">LinkedIn</a>
        </div>
      </motion.nav>

      {/* Main Sections */}
      {sections.map((section, index) => (
        <section key={index} className="h-screen w-full flex items-center justify-center snap-start bg-black relative px-4 overflow-hidden">
          
          <motion.div
            className="w-full max-w-5xl text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* HERO VARIANT */}
            {section.type === "hero" && (
              <>
                <motion.h1 
                  className="text-5xl md:text-8xl font-bold tracking-[0.1em] uppercase text-white mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {section.title}
                </motion.h1>
                <p className="text-xs md:text-sm tracking-[0.6em] uppercase text-neutral-400 mb-12 font-medium">
                  {section.subtitle}
                </p>
                <motion.div className="w-fit max-w-xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl px-10 py-8 rounded-[2.5rem] shadow-2xl">
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light italic">
                    "{section.content}"
                  </p>
                </motion.div>
              </>
            )}

            {/* EDUCATION VARIANT */}
            {section.type === "education" && (
              <>
                <h2 className="text-xl md:text-2xl font-light tracking-[0.6em] uppercase text-white mb-10 opacity-80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {section.title}
                </h2>
                <div className="mb-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                   <img 
                     src={section.logo} 
                     alt="Ohio State University College of Engineering" 
                     className="h-24 md:h-32 w-auto grayscale brightness-200 contrast-125" 
                   />
                </div>
                <h3 className="text-white text-lg font-medium tracking-widest mb-2 uppercase">{section.institution}</h3>
                <p className="text-neutral-400 text-sm mb-8 tracking-wide italic">{section.degree}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {section.content.map((item, i) => (
                    <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-300 uppercase tracking-widest font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* STACK VARIANT */}
            {section.type === "stack" && (
              <>
                <h2 className="text-xl md:text-2xl font-light tracking-[0.6em] uppercase text-white mb-12 opacity-80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {section.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
                  {section.content.map((item, i) => (
                    <motion.div
                      key={i}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-default"
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                    >
                      <span className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-neutral-200 font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          {index === 0 && (
            <motion.div style={{ opacity: opacityIndicator }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
               <div className="w-[1px] h-12 bg-neutral-900 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 w-full h-full bg-neutral-500" animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
              </div>
            </motion.div>
          )}
        </section>
      ))}
    </div>
  );
}

export default App;