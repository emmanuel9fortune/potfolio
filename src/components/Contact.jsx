import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#e4e4e4]/70 px-7 py-14 text-black md:px-16 md:py-20">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-black/[0.06]" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-[280px] w-[280px] rounded-full border border-black/[0.06]" />

          <div className="pointer-events-none absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full border border-black/[0.05]" />

          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-black" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                Get in touch
              </p>
            </div>

            {/* Heading */}
            <p className="mt-8 pb-10 w-full text-[70px] font-bold leading-[60px]">
              Let's build
              <br />
                <span className="text-[#D99A4E]"> something great.</span>
            </p>

            {/* Description */}
            <p className="mt-8 w-full text-base leading-[30px] text-black/50 text-[20px] font-semibold">
              Have an idea, project, or product you'd like to bring to life? <br/>
              I'm always interested in working on meaningful digital
              experiences.
            </p>

            {/* Button */}
            <a
              href="mailto:hello@example.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-black/80"
            >
              <Mail size={17} />

              Start a conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* Bottom metadata */}
          <div className="relative z-10 mt-16 flex flex-col gap-4 border-t border-black/10 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-black/35 sm:flex-row sm:items-center sm:justify-between">
            <span>Available for freelance work</span>

            <span>Let's create something meaningful</span>
          </div>

        </div>
      </div>
    </section>
  );
}