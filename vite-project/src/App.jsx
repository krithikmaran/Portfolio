import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import resume from "./assets/KrithikMaranResume.pdf";
import logo from "./assets/large-website-logo.svg";
import osuEngineeringLogo from "./assets/Engineering-REV-Stacked-RGBHEX.png"; 
import "./App.css";

function App() {
  const containerRef = useRef(null);

  const sections = [
    {
      type: "hero",
      title: "Krithik Maran",
      subtitle: "SAP Analyst // Software Developer // Data Engineer // Problem Solver",
      content: "Bridging the gap between complex enterprise systems and streamlined business processes. Currently engineering the intersection of modern Enterprise Systems, Cloud Platforms, and AI.",
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
      type: "stack",
      title: "Enterprise Systems",
      content: ["SAP S/4HANA", "ABAP RAP & BAdI", "AMDP / SQLScript", "HANA CDS Views", "Fiori UI", "Data Migration"],
    },
    {
      type: "stack",
      title: "Engineering & Intelligence",
      content: ["Python (Pandas)", "PyTorch / Scikit-Learn", "PostgreSQL", "React.JS", "SQL", "Ignition SCADA"],
    },
    {
      type: "stack",
      title: "Cloud Infrastructure Project",
      content: [
        "Custom Oracle Cloud (OCI) Kubernetes Cluster", 
        "ARM64 Ampere Architecture", 
        "MetalLB Load Balancer",
        "Cloudflare Zero Trust Tunnel",
        "Automated Task Microservices"
      ],
    },
    {
      type: "stack",
      title: "Website Stack",
      content: ["Vercel Edge Hosting", "Cloudflare WAF Proxy", "Hybrid K8s Backend"],
    },
  ];

  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div 
      ref={containerRef}
      className="h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-black text-white selection:bg-white selection:text-black"
    >
      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/60 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Header Navigation */}
      <motion.nav
        className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[90]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          className="h-10 md:h-14 w-auto flex-shrink-0 opacity-100 transition-all active:scale-95" 
        />
        
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl px-5 py-3 rounded-full flex space-x-6 items-center shadow-2xl ml-2">
          <a href={resume} download className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase">Resume</a>
          <a href="https://github.com/krithikmaran" target="_blank" className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase">GitHub</a>
          <a href="https://linkedin.com/in/krithikmaran" target="_blank" className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase">LinkedIn</a>
        </div>
      </motion.nav>

      {sections.map((section, index) => (
        <section 
          key={index} 
          className="h-[100svh] w-full flex items-center justify-center snap-start bg-black relative px-6 overflow-hidden"
        >
          <motion.div
            className="w-full max-w-4xl text-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* HERO VARIANT */}
            {section.type === "hero" && (
              <div className="mt-[-5svh]">
                <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">
                  {section.title}
                </h1>
                <p className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-neutral-400 mb-8 font-bold">
                  {section.subtitle}
                </p>
                <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl backdrop-blur-sm mx-auto">
                  <p className="text-sm md:text-xl text-neutral-200 leading-relaxed font-light italic">
                    "{section.content}"
                  </p>
                </div>
              </div>
            )}

            {/* EDUCATION VARIANT */}
            {section.type === "education" && (
              <>
                <h2 className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-10">{section.title}</h2>
                <div className="mb-6 p-6 bg-white/[0.03] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                   <img 
                     src={section.logo} 
                     alt="OSU" 
                     className="h-12 md:h-28 w-auto object-contain brightness-0 invert opacity-90" 
                   />
                </div>
                <h3 className="text-white text-base md:text-2xl font-bold uppercase mb-2">{section.institution}</h3>
                <p className="text-neutral-400 text-xs md:text-sm mb-6 italic">{section.degree}</p>
                <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                  {section.content.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[9px] md:text-xs uppercase font-bold tracking-widest">
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* STACK VARIANT */}
            {section.type === "stack" && (
              <>
                <h2 className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-12">{section.title}</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                  {section.content.map((item, i) => (
                    <div key={i} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs md:text-lg tracking-widest uppercase text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* INDICATOR AT BOTTOM */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-[50]">
            {index < sections.length - 1 ? (
              <>
                <span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase mb-2 font-bold">Next</span>
                <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-white" 
                    animate={{ y: ["-100%", "100%"] }} 
                    transition={{ duration: 1.5, repeat: Infinity }} 
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden rotate-180">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-white" 
                    animate={{ y: ["-100%", "100%"] }} 
                    transition={{ duration: 1.5, repeat: Infinity }} 
                  />
                </div>
                <span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase mt-2 font-bold">Back</span>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;