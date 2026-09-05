import { Globe, Workflow, Cloud, ShieldCheck, Zap } from "lucide-react";

export default function WebsiteStack() {
  const pipeline = [
    {
      step: "01",
      layer: "Frontend Engine",
      primary: "React + Vite",
      description: "Fluid Single-Page Architecture with Framer Motion & Tailwind CSS",
      icon: Globe,
      tags: ["React 19", "Vite", "Framer Motion"],
    },
    {
      step: "02",
      layer: "CI/CD & DevSecOps",
      primary: "GitHub Actions",
      description: "Automated linting, builds, and Aqua Trivy CVE/secret security scanning",
      icon: Workflow,
      tags: ["Trivy Scanner", "Automated Tests", "Dockerized"],
    },
    {
      step: "03",
      layer: "Hosting & Edge",
      primary: "Cloudflare Pages",
      description: "Global Anycast edge deployment, custom domain routing & automated TLS",
      icon: Cloud,
      tags: ["Cloudflare Pages", "Wrangler CLI", "Edge Network"],
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center px-2 sm:px-4 md:px-6">
      <h2 className="text-base sm:text-xl md:text-3xl font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1 sm:mb-2 text-center">
        Website Architecture & CI/CD
      </h2>
      <p
        style={{ color: "var(--text-muted)" }}
        className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 md:mb-6 font-semibold text-center max-w-xl px-2"
      >
        Automated GitOps Pipeline & Global Cloudflare Edge Hosting
      </p>

      {/* Main Pipeline Cards */}
      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-stretch justify-between gap-2.5 sm:gap-3 md:gap-4 relative"
      >
        {pipeline.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div key={idx} className="flex-1 flex flex-col">
              <div
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
                className="border rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col justify-between h-full text-center items-center transition-colors hover:border-neutral-400/40"
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                  <span
                    style={{ color: "var(--text-muted)" }}
                    className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider"
                  >
                    STAGE {stage.step}
                  </span>
                  <div
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                    className="p-1 sm:p-1.5 rounded-md sm:rounded-lg border flex items-center justify-center"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
                  </div>
                </div>

                {/* Primary Titles */}
                <div className="my-0.5 sm:my-1 w-full">
                  <span className="text-xs sm:text-sm md:text-base font-black tracking-wider uppercase block">
                    {stage.primary}
                  </span>
                  <span
                    style={{ color: "var(--text-muted)" }}
                    className="text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold block mt-0.5 sm:mt-1"
                  >
                    {stage.layer}
                  </span>
                </div>

                {/* Tags / Pills */}
                <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 my-1.5 sm:my-2">
                  {stage.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                      }}
                      className="px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] font-medium tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div
                  style={{ borderColor: "var(--card-border)" }}
                  className="w-full border-t pt-2 mt-1 sm:mt-2"
                >
                  <p
                    style={{ color: "var(--text-muted)" }}
                    className="text-[10px] sm:text-xs font-light italic leading-relaxed"
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer architecture status strip */}
      <div
        style={{ borderColor: "var(--card-border)" }}
        className="mt-2.5 sm:mt-3.5 md:mt-4 pt-2 border-t w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold tracking-wide"
      >
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
          className="px-2.5 py-1 rounded-full border flex items-center gap-1.5"
        >
          <Workflow className="w-3 h-3 opacity-75" />
          <span>GitOps CI/CD</span>
        </div>
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
          className="px-2.5 py-1 rounded-full border flex items-center gap-1.5"
        >
          <ShieldCheck className="w-3 h-3 opacity-75" />
          <span>Trivy Scanned</span>
        </div>
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
          className="px-2.5 py-1 rounded-full border flex items-center gap-1.5"
        >
          <Zap className="w-3 h-3 opacity-75" />
          <span>Cloudflare Edge</span>
        </div>
      </div>
    </div>
  );
}
