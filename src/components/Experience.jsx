import {
  ArrowUpRight,
  Code2,
  Database,
  Smartphone,
  Server,
  ShoppingBag,
  WalletCards,
  FolderSync,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    year: "2025 — Present",
    title: "iRunor",
    role: "Software Developer",
    category: "Marketplace / Full Stack",
    description:
      "A digital marketplace connecting buyers, sellers, businesses and delivery services. I worked across the frontend and backend, building core product flows and platform infrastructure.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: ShoppingBag,
    featured: true,
  },
  {
    number: "02",
    year: "2026",
    title: "FilePal",
    role: "Full Stack Developer",
    category: "Mobile / Desktop",
    description:
      "A cross-device file transfer system designed to move files between mobile devices and desktop computers over the same local network.",
    stack: ["React Native", "Expo", "Electron", "WebSocket"],
    icon: FolderSync,
    featured: true,
  },
  {
    number: "03",
    year: "2026",
    title: "Crypto Trading Platform",
    role: "Frontend Developer",
    category: "Fintech",
    description:
      "A premium financial platform interface for managing NGN and cryptocurrency transactions, including wallets, deposits, withdrawals, buying, selling and transaction history.",
    stack: ["React", "Vite", "Tailwind CSS", "REST API"],
    icon: WalletCards,
    featured: true,
  },
  {
    number: "04",
    year: "2026",
    title: "Hotel Management System",
    role: "Software Developer",
    category: "Business / Healthcare",
    description:
      "Worked on administrative interfaces and backend systems for managing inventory, bills, staff activity, patients and operational reports.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: Database,
  },
  {
    number: "05",
    year: "2026",
    title: "Luxury Hotel Website",
    role: "Frontend Developer",
    category: "Web / Hospitality",
    description:
      "A modern luxury hotel website focused on immersive visual presentation, booking interactions and a refined hospitality experience across desktop and mobile.",
    stack: ["React", "CSS", "MUI", "JavaScript"],
    icon: Code2,
  },
  {
    number: "06",
    year: "2025 — Present",
    title: "Independent Development",
    role: "Software Developer",
    category: "Freelance / Product Development",
    description:
      "Building and experimenting with web, mobile and backend products while turning ideas into functional production-ready applications.",
    stack: ["JavaScript", "React", "Node.js", "React Native"],
    icon: Server,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background detail */}
      <div className="pointer-events-none absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full border border-[#D99A4E]/2" />
      <div className="pointer-events-none absolute right-[-5rem] top-40 h-[20rem] w-[20rem] rounded-full border border-[#D99A4E]/2" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
              Experience
            </p>

            <div className="mt-6 h-px w-16 bg-white/20" />

            <h2 className="mt-8 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              Things I've
              <span className="block text-white/25">
                built along the way.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-white/45">
              My experience is shaped by building real products across
              marketplaces, fintech, mobile, desktop and business systems.
              Each project has pushed me into a different part of software
              engineering.
            </p>
          </div>
        </div>

        {/* Experience list */}
        <div className="border-t border-white/10">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative border-b border-white/10 py-10 transition-all duration-500 group-hover:text-[#D99A4E] hover:bg-white/[0.025] lg:py-12 ${
                  item.featured ? "lg:py-14" : ""
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[90px_1fr_280px] xl:grid-cols-[100px_1fr_320px]">
                  {/* Number */}
                  <div className="flex items-start">
                    <span className="font-mono text-xs text-[#D99A4E]">
                      {item.number}
                    </span>
                  </div>

                  {/* Main content */}
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:text-white">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <h3 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                        {item.title}
                      </h3>

                      <span className="text-sm text-white/35">
                        {item.role}
                      </span>
                    </div>

                    <p className="mt-6 w-full self-start text-left text-sm leading-7 text-white/45">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors group-hover:border-white/15 group-hover:text-white/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-col justify-between lg:items-end">
                    <div className="flex items-center gap-3 text-xs text-white/25">
                      <span className="h-px w-6 bg-white/15" />
                      {item.year}
                    </div>

                    <div className="mt-8 hidden lg:flex">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-300 group-hover:border-white/30 group-hover:text-white group-hover:translate-x-1">
                        <ArrowUpRight size={18} strokeWidth={1.4} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-24 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Approach
            </p>
            <p className="mt-5 max-w-xl text-xl leading-relaxed tracking-[-0.02em] text-white/70">
              I don't just write interfaces. I like understanding the system
              behind the interface and building the pieces that make the
              product actually work.
            </p>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border-b border-white/20 pb-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              Start a project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}