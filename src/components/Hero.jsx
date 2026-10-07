import { ArrowDown, ArrowUpRight} from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="portfolio-grid relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F3EE]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[55%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-20 pt-32">

        {/* Availability */}
        <div className="mb-14 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            Available for opportunities
          </span>
        </div>

        {/* Main hero */}
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_240px_minmax(280px,0.65fr)] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div className="min-w-0">

            <p className="mb-6 text-sm font-medium text-white/35">
              {portfolio.role}
              <span className="mx-2 text-white/15">/</span>
              {portfolio.location}
            </p>

            <h1 className="max-w-[850px] text-[clamp(4rem,8.5vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-white">

              <span className="block">
                Building
              </span>

              <span className="block text-[#D99A4E]">
                digital
              </span>

              <span className="block">
                experiences.
              </span>

            </h1>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-[240px] lg:mx-0">

            {/* Outer decoration */}
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.06]" />

            <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.035]" />

            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">

              <img
                src="/profile.jpg"
                alt="Emmanuel Fortune"
                className="h-full w-full object-cover grayscale transition duration-700 ease-out hover:scale-105 hover:grayscale-0"
              />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <div className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
                  Developer
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col lg:pb-2">

            <p className="max-w-[360px] text-base leading-7 text-white/45 md:text-lg md:leading-8">
              {portfolio.intro}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white/85"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition duration-300 hover:border-white/35 hover:text-white"
              >
                Contact me
              </a>

            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-2">

              <a
                href={portfolio.socials.github}
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/25 hover:text-white"
              >
                GH
              </a>

              <a
                href={portfolio.socials.linkedin}
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/25 hover:text-white"
              >
                in
              </a>

            </div>

          </div>

        </div>

        {/* Bottom information */}
        <div className="mt-20 flex items-center justify-between border-t border-white/[0.07] pt-5">

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
            Based in Nigeria
          </span>

          <a
            href="#work"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30 transition hover:text-white/60"
          >
            Scroll to explore

            <ArrowDown
              size={13}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
            2026
          </span>

        </div>

      </div>
    </section>
  );
}