import { Globe, Shield, Cloud } from "lucide-react";

export default function WebsiteStack() {
  const pipeline = [
    {
      step: "01",
      layer: "Frontend Engine",
      primary: "React.JS + Vite",
      description: "Fluid Single-Page Architecture",
      icon: Globe,
    },
    {
      step: "02",
      layer: "Domain & DNS",
      primary: "Cloudflare",
      description: "Domain Registrar & DNS Routing",
      icon: Shield,
    },
    {
      step: "03",
      layer: "Hosting & CI/CD",
      primary: "Cloudflare Pages",
      description: "Automated Git Deployment",
      icon: Cloud,
    },
  ];

  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-2 sm:px-4 md:px-6">
      <h2 className="text-base sm:text-xl md:text-3xl font-light tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 md:mb-8 text-center">
        Website Stack
      </h2>

      {/* Main Pipeline Card */}
      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-stretch justify-between gap-2 sm:gap-2.5 md:gap-3 relative"
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
                className="border rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 md:p-4 flex flex-col justify-between h-full text-center items-center transition-colors hover:border-neutral-400/40"
              >
                <div className="flex items-center justify-between w-full mb-1.5 sm:mb-2 md:mb-3">
                  <span
                    style={{ color: "var(--text-muted)" }}
                    className="text-[9px] sm:text-[10px] font-mono font-bold"
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
                    <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-75" />
                  </div>
                </div>

                <div className="my-0.5 sm:my-1">
                  <span className="text-xs sm:text-xs md:text-sm font-bold tracking-wider uppercase block">
                    {stage.primary}
                  </span>
                  <span
                    style={{ color: "var(--text-muted)" }}
                    className="text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-widest uppercase font-semibold block mt-0.5 sm:mt-1"
                  >
                    {stage.layer}
                  </span>
                </div>

                <div
                  style={{ borderColor: "var(--card-border)" }}
                  className="w-full border-t pt-1.5 sm:pt-2 md:pt-2.5 mt-1.5 sm:mt-2 md:mt-3"
                >
                  <p
                    style={{ color: "var(--text-muted)" }}
                    className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-light italic"
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
