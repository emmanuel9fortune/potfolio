import {
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
  Workflow,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Scalable web applications, APIs and enterprise software designed around real business requirements.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Digital Products",
    description:
      "Customer-facing platforms and digital experiences that turn ideas into useful products.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Mobile Solutions",
    description:
      "Modern mobile applications that extend your products beyond the browser.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Business Systems",
    description:
      "Internal platforms, management systems and workflow automation that improve operations.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "APIs, databases, deployments and infrastructure built for reliability and growth.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Security & Reliability",
    description:
      "Technology architecture designed with resilience, security and long-term maintainability in mind.",
    icon: ShieldCheck,
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[#080808] px-6 py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Our capabilities
            </p>

            <h2 className="mt-8 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              Technology for
              <span className="block text-white/25">
                every stage of business.
              </span>
            </h2>
          </div>

          <p className="self-end max-w-sm text-sm leading-7 text-white/40">
            From the first idea to a production-ready system, our capabilities
            cover the technology required to build and operate modern digital
            businesses.
          </p>

        </div>

        <div className="mt-24 border-t border-white/10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative grid gap-6 border-b border-white/10 py-9 transition hover:bg-white/[0.025] md:grid-cols-[80px_1fr_1fr_auto] md:items-center"
              >
                <span className="font-mono text-xs text-white/25">
                  {service.number}
                </span>

                <div className="flex items-center gap-5">
                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#D99A4E] transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-white/35">
                  {service.description}
                </p>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#D99A4E]/50 group-hover:text-[#D99A4E]">
                  <ArrowUpRight size={17} />
                </div>

                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-[#D99A4E] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}