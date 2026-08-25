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
    <div className="w-full max-w-4xl flex flex-col items-center px-4 md:px-6">
      <h2 className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-8 text-center">
        Engineering & Intelligence
      </h2>

      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-xl flex flex-col gap-3.5"
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
              className="border rounded-xl p-4 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-left transition-colors hover:border-neutral-400/40"
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 shrink-0">
                <div
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                  className="p-2 rounded-lg border flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 opacity-75" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider">
                  {domain.title}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center md:justify-end gap-2">
                {domain.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                    className="px-3.5 py-1.5 rounded-lg border text-[11px] uppercase tracking-wider font-medium whitespace-nowrap"
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
