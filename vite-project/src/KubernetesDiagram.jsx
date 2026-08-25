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
    <div className="w-full max-w-3xl flex flex-col items-center px-4 md:px-6">
      {/* Title and Subtitle matching other portfolio sections */}
      <h2 className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-2 text-center">
        Cloud Infrastructure Project
      </h2>
      <p
        style={{ color: "var(--text-muted)" }}
        className="text-[10px] md:text-xs tracking-[0.25em] uppercase mb-8 font-semibold text-center max-w-xl"
      >
        Decommissioned following Oracle Cloud (OCI) Free Tier resource policy revisions
      </p>

      {/* Main Diagram Container */}
      <div
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
        className="w-full border rounded-2xl p-5 md:p-7 backdrop-blur-sm shadow-xl flex flex-col items-center"
      >
        {/* MetalLB Ingress Layer */}
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
          className="border rounded-xl px-5 py-2.5 flex items-center gap-3 shadow-sm"
        >
          <Network className="w-4 h-4 opacity-75" />
          <div className="text-center md:text-left">
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase block">
              MetalLB
            </span>
            <span
              style={{ color: "var(--text-muted)" }}
              className="text-[10px] tracking-widest uppercase block font-medium"
            >
              Load Balancer
            </span>
          </div>
        </div>

        {/* Clean Static Connector SVG Lines */}
        <div className="w-full max-w-md h-8 flex justify-center items-center my-1">
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

        {/* 3 Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full">
          {nodes.map((node, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
              className="border rounded-xl p-4 flex flex-col items-center text-center transition-colors hover:border-neutral-400/40"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <Server className="w-3.5 h-3.5 opacity-70" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  {node.role}
                </span>
              </div>

              <div
                style={{ color: "var(--text-muted)" }}
                className="text-[11px] font-mono mb-3 uppercase tracking-wider"
              >
                {node.name}
              </div>

              {/* Specs */}
              <div
                style={{ borderColor: "var(--card-border)" }}
                className="w-full border-t pt-2.5 flex flex-col gap-1.5 text-[11px]"
              >
                <div className="flex items-center justify-center gap-1.5 font-medium">
                  <Cpu className="w-3 h-3 opacity-60" />
                  <span>
                    {node.vcpus === "2 vCPUs" ? (
                      <>2 vCPUs</>
                    ) : (
                      <>1 vCPU</>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 font-medium">
                  <HardDrive className="w-3 h-3 opacity-60" />
                  <span>{node.ram}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer specs / Architecture info */}
        <div
          style={{ borderColor: "var(--card-border)" }}
          className="mt-5 pt-3.5 border-t w-full flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[10px] tracking-widest font-semibold"
        >
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-3 py-1 rounded-full border uppercase"
          >
            ARM64 Ampere
          </span>
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-3 py-1 rounded-full border uppercase"
          >
            3 Nodes Total
          </span>
          <span
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            className="px-3 py-1 rounded-full border"
          >
            4 vCPUs • 24 GB RAM
          </span>
        </div>
      </div>
    </div>
  );
}
