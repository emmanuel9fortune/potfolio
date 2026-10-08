import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Server,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function About() {
  const capabilities = [
    {
      icon: Code2,
      number: "01",
      title: "Frontend",
      description:
        "Interfaces that feel fast, intentional and effortless to use.",
      technologies: "React · JavaScript · Tailwind",
    },
    {
      icon: Server,
      number: "02",
      title: "Backend",
      description:
        "Reliable APIs and server-side systems designed around real-world needs.",
      technologies: "Node.js · Express · MongoDB",
    },
    {
      icon: Smartphone,
      number: "03",
      title: "Mobile",
      description:
        "Mobile experiences that bring the same attention to detail beyond the browser.",
      technologies: "React Native",
    },
    {
      icon: Layers3,
      number: "04",
      title: "Full Stack",
      description:
        "From the first interface to the database and everything connecting them.",
      technologies: "Architecture · APIs · Deployment",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-32 md:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">

          {/* LEFT */}
          <div className="text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
              About me
            </p>

            <div className="mt-6 h-px w-16 bg-white/20" />

            <h2 className="mt-8 max-w-xl pt-10 text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
              I build digital products
              <span className="text-white/25">
                {" "}
                where design meets engineering.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="flex w-full flex-col items-start gap-8 lg:ml-auto lg:w-[65%]">

              {/* MAIN DESCRIPTION */}
              <p className="w-full max-w-2xl text-left text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                I'm a software developer who enjoys turning ideas into
                products people can actually use. I care about the details
                most people don't notice — the interaction that feels natural,
                the layout that makes sense and the system that keeps
                everything running behind the scenes.
              </p>

              {/* RIGHT DESCRIPTION */}
              <p className="w-full max-w-sm text-left text-sm leading-7 text-white/30">
                My work sits between product thinking, interface design and
                software engineering.
              </p>

            </div>
          </div>

        </div>

        {/* =====================================================
            LARGE PROFILE / PHILOSOPHY BLOCK
        ===================================================== */}
        <div className="mt-28 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Visual */}
          <div className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]">

            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[20%] top-[15%] h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full border border-white/10" />

              <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
            </div>

            {/* Profile image */}
            <img
              src="/profile.jpg"
              alt="Emmanuel Fortune"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Emmanuel Fortune
                </p>

                <p className="mt-2 text-2xl font-medium tracking-tight text-white">
                  Software Developer
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur">
                <ArrowDownRight
                  size={19}
                  className="text-white/60"
                />
              </div>

            </div>
          </div>

          {/* Philosophy */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-10">

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                <Sparkles size={17} className="text-white/60" />
              </div>

              <h3 className="mt-10 max-w-md text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
                Technology should disappear into the experience.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                Good software isn't about showing how complicated the code is.
                It's about making the result feel simple. That's the standard I
                try to bring to every project.
              </p>
            </div>

            <div className="mt-16 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Based in
                </span>

                <span className="text-sm text-white/60">
                  Nigeria
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Focus
                </span>

                <span className="text-sm text-white/60">
                  Web · Mobile · Backend
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}
        <div className="mt-32">

          <div className="mb-12 flex items-end justify-between">

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/30">
                What I do
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
                Capabilities
              </h3>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/20 md:block">
              04 disciplines
            </span>

          </div>

          <div className="border-t border-white/10">

            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.015] md:grid-cols-[80px_220px_1fr_auto] md:items-center"
                >

                  <span className="text-xs text-white/20">
                    {item.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-white/30 transition group-hover:text-white"
                    />

                    <h4 className="text-xl font-medium text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="max-w-lg text-sm leading-6 text-white/35">
                    {item.description}
                  </p>

                  <span className="text-xs text-white/20 md:text-right">
                    {item.technologies}
                  </span>

                </div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            NUMBERS
        ===================================================== */}
        <div className="mt-32 grid border-y border-white/10 sm:grid-cols-3">

          <div className="border-b border-white/10 px-6 py-10 sm:border-b-0 sm:border-r">
            <p className="text-5xl font-medium tracking-[-0.05em] text-white">
              03+
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
              Years building
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-10 sm:border-b-0 sm:border-r">
            <p className="text-5xl font-medium tracking-[-0.05em] text-white">
              10+
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
              Technologies
            </p>
          </div>

          <div className="px-6 py-10">
            <p className="text-5xl font-medium tracking-[-0.05em] text-white">
              ∞
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
              Things left to build
            </p>
          </div>

        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <div className="mt-32 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/25">
              Philosophy
            </p>

            <p className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              "The best products aren't the ones with the most features.
              They're the ones that make the right things feel obvious."
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white/60 transition hover:text-white"
          >
            Work with me

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition group-hover:border-white/40">
              <ArrowUpRight size={16} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}