import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import resume from "./assets/Krithik Maran Resume.pdf";
import logo from "./assets/large-website-logo.svg";
import osuEngineeringLogo from "./assets/Engineering-REV-Stacked-RGBHEX.png";
import cintasLogo from "./assets/CintasLogo.png"; 
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
      type: "stack",
      title: "Enterprise Systems",
      content: ["SAP S/4 HANA", "SAP ECC", "SAP BTP", "ABAP", "CDS Views", "RAP Applications"],
    },
    {
      type: "stack",
      title: "Engineering & Intelligence",
      content: ["Python", "Java", "React.JS", "Pytorch", "Scikit-Learn", "AWS EKS", "Oracle Cloud Compute", "Argo Workflows","Vertex AI", "BigQuery"],
    },
    {
      type: "stack",
      title: "Cloud Infrastructure Project",
      content: [
        "Custom Oracle Cloud (OCI) Kubernetes Cluster", 
        "ARM64 Ampere Architecture", 
        "MetalLB Load Balancer",
        "Automated Task Microservices"
      ],
    },
    {
      type: "stack",
      title: "Website Stack",
      content: ["React.JS","Vercel", "Cloudflare", "K8s Backend (Coming Soon)"],
    },
  ];

  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div 
      ref={containerRef}
      className="h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-black text-white selection:bg-white selection:text-black"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/60 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <motion.nav
        className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[90]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          className="h-10 md:h-14 w-auto flex-shrink-0 opacity-100 transition-all active:scale-95 cursor-pointer" 
          onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl px-5 py-3 rounded-full flex space-x-6 items-center shadow-2xl ml-2">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase hover:opacity-70 transition-opacity">Resume</a>
          <a href="https://github.com/krithikmaran" target="_blank" className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase hover:opacity-70 transition-opacity">GitHub</a>
          <a href="https://linkedin.com/in/krithikmaran" target="_blank" className="text-[10px] md:text-xs tracking-widest font-bold text-white uppercase hover:opacity-70 transition-opacity">LinkedIn</a>
        </div>
      </motion.nav>

      {sections.map((section, index) => (
        <section 
          key={index} 
          className="h-[100svh] w-full flex flex-col items-center snap-start bg-black relative px-6 overflow-hidden"
        >
          <div className="flex-1" />

          <motion.div
            className="w-full max-w-4xl text-center flex flex-col items-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {section.type === "hero" && (
              <div className="mt-[-2vh]">
                <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">{section.title}</h1>
                <p className="text-[10px] md:text-sm tracking-[0.3em] uppercase text-neutral-400 mb-8 font-bold">{section.subtitle}</p>
                <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl backdrop-blur-sm mx-auto">
                  <p className="text-sm md:text-xl text-neutral-200 leading-relaxed font-light italic">"{section.content}"</p>
                </div>
              </div>
            )}

            {section.type === "experience" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-10">{section.title}</h2>
                
                {section.logo && (
                  <div className="mb-12 flex justify-center">
                    <img 
                      src={section.logo} 
                      alt="Company Logo" 
                      className="h-16 md:h-28 w-auto object-contain brightness-0 invert opacity-90" 
                    />
                  </div>
                )}

                <h3 className="text-3xl md:text-6xl font-black uppercase mb-12 tracking-tighter">{section.role}</h3>
                
                <div className="space-y-3 w-full max-w-2xl mx-auto">
                  {section.content.map((bullet, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <p className="text-neutral-300 text-sm md:text-base font-light italic text-center">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.type === "education" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-10">{section.title}</h2>
                
                <div className="mb-12 flex justify-center">
                  <img 
                    src={section.logo} 
                    alt="OSU" 
                    className="h-[100px] md:h-[180px] w-auto object-contain brightness-0 invert opacity-90" 
                  />
                </div>

                <h3 className="text-white text-3xl md:text-6xl font-black uppercase mb-4 tracking-tighter">{section.institution}</h3>
                <p className="text-neutral-400 text-sm md:text-lg mb-8 italic uppercase tracking-widest">{section.degree}</p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {section.content.map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs uppercase font-bold tracking-widest">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {section.type === "stack" && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-12">{section.title}</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                  {section.content.map((item, i) => (
                    <div key={i} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs md:text-lg tracking-widest uppercase text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <div className="flex-1 w-full flex items-end justify-center pb-24 md:pb-12">
            <div className="flex flex-col items-center">
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
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;