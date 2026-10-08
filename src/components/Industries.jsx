import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    text: "Digital platforms, payment systems and financial infrastructure.",
  },
  {
    number: "02",
    title: "Healthcare",
    text: "Systems that simplify operations, records and service delivery.",
  },
  {
    number: "03",
    title: "Commerce",
    text: "Marketplaces, business platforms and digital commerce experiences.",
  },
  {
    number: "04",
    title: "Hospitality",
    text: "Digital experiences that improve how hospitality businesses serve customers.",
  },
  {
    number: "05",
    title: "Logistics",
    text: "Connected systems for movement, delivery and operational visibility.",
  },
  {
    number: "06",
    title: "Technology",
    text: "Infrastructure and software products for technology-driven organizations.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#f1efe8] px-6 py-28 text-black md:py-36">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-[1fr_0.5fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/35">
              Industries
            </p>

            <h2 className="mt-7 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              Technology that adapts
              <span className="block text-black/25">
                to different industries.
              </span>
            </h2>
          </div>

          <p className="self-end max-w-sm text-sm leading-7 text-black/45">
            Our technology is designed to adapt to the unique requirements,
            workflows and challenges of different business environments.
          </p>

        </div>

        <div className="mt-24 border-t border-black/10">

          {industries.map((industry) => (
            <div
              key={industry.number}
              className="group grid gap-5 border-b border-black/10 py-8 transition hover:bg-black/[0.025] md:grid-cols-[70px_1fr_1fr_auto] md:items-center"
            >

              <span className="font-mono text-xs text-black/25">
                {industry.number}
              </span>

              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {industry.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-black/45">
                {industry.text}
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#D99A4E] group-hover:bg-[#D99A4E]">
                <ArrowUpRight size={17} />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}