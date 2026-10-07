import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="bg-[#080808] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
              Selected work
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
              Things I've
              <br />
              <span className="text-white/25">built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            A selection of products and systems I've worked on across web,
            mobile and backend development.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7 transition duration-500 hover:border-white/20 ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] ${
                  index === 0 ? "aspect-[4/4]" : "aspect-[16/10]"
                }`}
              >
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full border border-white/10" />
                  <div className="absolute bottom-[10%] right-[15%] h-56 w-56 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-white/10" />
                </div>

                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/50 backdrop-blur">
                  {project.type}
                </div>
              </div>

              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="mb-3 block text-xs text-white/25">
                    {project.number}
                  </span>

                  <h3 className="text-3xl font-medium tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                    {project.description}
                  </p>
                </div>

                <button className="rounded-full border border-white/10 p-3 text-white/50 transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={19} />
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}