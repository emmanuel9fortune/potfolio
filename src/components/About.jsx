import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function About() {
  const capabilities = [
    {
      number: "01",
      title: "Innovation",
      text: "We turn emerging technology into practical business solutions.",
    },
    {
      number: "02",
      title: "Reliability",
      text: "We build systems businesses can depend on every day.",
    },
    {
      number: "03",
      title: "Scalability",
      text: "Our architecture is designed to grow with the organizations we serve.",
    },
    {
      number: "04",
      title: "Impact",
      text: "Technology matters when it creates measurable value.",
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
          <div className="text-left" data-aos="fade-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
              WHO WE ARE
            </p>

            <div className="mt-6 h-px w-16 bg-white/20" />

            <h2 className="mt-8 max-w-xl pt-10 text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
              Technology built around
              <span className="text-white/25">
                {" "}
              the way businesses operate.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full" data-aos="fade-right">
            <div className="flex w-full flex-col items-start gap-8 lg:ml-auto lg:w-[65%]">

              {/* MAIN DESCRIPTION */}
              <p className="w-full max-w-2xl text-left text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                We are a technology-driven enterprise focused on
                building digital products, platforms and systems
                that solve real business problems.
              </p>

              {/* RIGHT DESCRIPTION */}
              <p className="w-full max-w-sm text-left text-sm leading-7 text-white/30">
                From strategy and product development to deployment
                and ongoing improvement, we bring technology,
                design and engineering together to create solutions
                that scale.
              </p>

            </div>
          </div>

        </div>

        {/* =====================================================
            LARGE PROFILE / PHILOSOPHY BLOCK
        ===================================================== */}
        <div className="mt-28 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Visual */}
          <div className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]" data-aos="zoom-in">

            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[20%] top-[15%] h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full border border-white/10" />

              <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
            </div>

            {/* Profile image */}
            <img
              src="/profile.jpg"
              alt="Elvn Enterprise"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Elvn Enterprise
                </p>

                <p className="mt-2 text-2xl font-medium tracking-tight text-white">
                  Software Development Team
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
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-10" data-aos="zoom-in">

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

            <div data-aos="fade-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/30">
                What I do
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
                Capabilities
              </h3>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/20 md:block" data-aos="fade-right">
              04 disciplines
            </span>

          </div>

          <div className="border-t border-white/10">

            {capabilities.map((item) => {
              return (
                <div
                  key={item.number}
                  className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.015] md:grid-cols-[80px_220px_1fr_auto] md:items-center"
                  data-aos="fade-up"
                >

                  <span className="text-xs text-white/20">
                    {item.number}
                  </span>

                  <div className="flex items-center gap-4">

                    <h4 className="text-xl font-medium text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="max-w-lg text-sm leading-6 text-white/35">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            NUMBERS
        ===================================================== */}
        <div className="mt-32 grid border-y border-white/10 sm:grid-cols-3" data-aos="fade-up">

          <div className="border-b border-white/10 px-6 py-10 sm:border-b-0 sm:border-r">
            <p className="text-5xl font-medium tracking-[-0.05em] text-white">
              02+
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

          <div className="max-w-2xl" data-aos="fade-left">
            <p className="text-[11px] w-full uppercase tracking-[0.3em] text-white/25">
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
            data-aos="fade-right"
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