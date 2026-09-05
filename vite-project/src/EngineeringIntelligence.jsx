import { Code2, Cpu, Cloud } from "lucide-react";

export default function EngineeringIntelligence() {
  const domains = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: ["Python", "Java", "React.JS"],
    },
    {
      title: "Machine Learning & AI",
      icon: Cpu,
      skills: ["PyTorch", "Scikit-Learn", "Vertex AI"],
    },
    {
      title: "Cloud & Data Systems",
      icon: Cloud,
      skills: ["AWS EKS", "Oracle Cloud", "Argo Workflows", "BigQuery"],
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center px-2 sm:px-4 md:px-6">
      <h2 className="text-base sm:text-xl md:text-3xl font-light tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 md:mb-8 text-center">
        Engineering & Intelligence
      </h2>

      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 backdrop-blur-sm shadow-xl flex flex-col gap-2.5 sm:gap-3 md:gap-3.5"
      >
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
              className="border rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-2.5 md:gap-3 text-left transition-colors hover:border-neutral-400/40"
            >
              {/* Category Label */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                  className="p-1.5 sm:p-2 rounded-md sm:rounded-lg border flex items-center justify-center"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75" />
                </div>
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider">
                  {domain.title}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center md:justify-end gap-1.5 sm:gap-2">
                {domain.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md sm:rounded-lg border text-[9.5px] sm:text-[11px] uppercase tracking-wider font-medium whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
