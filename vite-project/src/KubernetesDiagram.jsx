import { Server, Network, Cpu, HardDrive } from "lucide-react";

export default function KubernetesDiagram() {
  const nodes = [
    {
      role: "Control Plane",
      name: "Master Node",
      vcpus: "2 vCPUs",
      ram: "8 GB RAM",
      badge: "Master / Ingress",
    },
    {
      role: "Worker Node 01",
      name: "Worker 1",
      vcpus: "1 vCPU",
      ram: "8 GB RAM",
      badge: "Worker Node",
    },
    {
      role: "Worker Node 02",
      name: "Worker 2",
      vcpus: "1 vCPU",
      ram: "8 GB RAM",
      badge: "Worker Node",
    },
  ];

  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-2 sm:px-4 md:px-6">
      {/* Title and Subtitle matching other portfolio sections */}
      <h2 className="text-base sm:text-xl md:text-3xl font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1 md:mb-2 text-center">
        Cloud Infrastructure Project
      </h2>
      <p
        style={{ color: "var(--text-muted)" }}
        className="text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 md:mb-6 font-semibold text-center max-w-xl px-2"
      >
        Decommissioned following Oracle Cloud (OCI) Free Tier resource policy revisions
      </p>

      {/* Main Diagram Container */}
      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 backdrop-blur-sm shadow-xl flex flex-col items-center"
      >
        {/* MetalLB Ingress Layer */}
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
          className="border rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-sm"
        >
          <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
          <div className="text-center md:text-left">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase block">
              MetalLB
            </span>
            <span
              style={{ color: "var(--text-muted)" }}
              className="text-[9.5px] sm:text-[10.5px] md:text-xs tracking-widest uppercase block font-semibold"
            >
              Load Balancer
            </span>
          </div>
        </div>

        {/* Clean Static Connector SVG Lines */}
        <div className="w-full max-w-md h-4 sm:h-5 md:h-7 flex justify-center items-center my-0.5 md:my-1">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 300 32"
            preserveAspectRatio="none"
          >
            {/* Trunk line */}
            <line
              x1="150"
              y1="0"
              x2="150"
              y2="16"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            {/* Horizontal distributor */}
            <line
              x1="50"
              y1="16"
              x2="250"
              y2="16"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            {/* Left drop to Master */}
            <line
              x1="50"
              y1="16"
              x2="50"
              y2="32"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            {/* Middle drop to Worker 1 */}
            <line
              x1="150"
              y1="16"
              x2="150"
              y2="32"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            {/* Right drop to Worker 2 */}
            <line
              x1="250"
              y1="16"
              x2="250"
              y2="32"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* 3 Nodes Grid - Responsive columns with confident sizing */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-3.5 w-full">
          {nodes.map((node, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
              className="border rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex flex-col items-center text-center transition-colors hover:border-neutral-400/40"
            >
              <div className="flex items-center gap-1 mb-1 sm:mb-1.5">
                <Server className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-75" />
                <span className="text-[9.5px] sm:text-[11px] md:text-xs font-bold tracking-wide sm:tracking-wider uppercase truncate">
                  {node.role}
                </span>
              </div>

              <div
                style={{ color: "var(--text-muted)" }}
                className="text-[9px] sm:text-[10.5px] md:text-xs font-mono mb-1.5 sm:mb-2 md:mb-2.5 uppercase tracking-wider font-semibold"
              >
                {node.name}
              </div>

              {/* Specs */}
              <div
                style={{ borderColor: "var(--card-border)" }}
                className="w-full border-t pt-1.5 sm:pt-2 flex flex-col gap-0.5 sm:gap-1 text-[9.5px] sm:text-[10.5px] md:text-xs"
              >
                <div className="flex items-center justify-center gap-1 font-medium">
                  <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60" />
                  <span>{node.vcpus}</span>
                </div>
                <div className="flex items-center justify-center gap-1 font-medium">
                  <HardDrive className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60" />
                  <span>{node.ram}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer specs / Architecture info */}
        <div
          style={{ borderColor: "var(--card-border)" }}
          className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs tracking-wider md:tracking-widest font-semibold"
        >
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border uppercase"
          >
            ARM64 Ampere
          </span>
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border uppercase"
          >
            3 Nodes Total
          </span>
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border"
          >
            4 vCPUs • 24 GB RAM
          </span>
        </div>
      </div>
    </div>
  );
}
