import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "iRunor",
    category: "Marketplace Infrastructure",
    description:
      "A digital marketplace connecting businesses, customers and delivery services through one integrated platform.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/irunor.jpg",
  },
  {
    number: "02",
    title: "Financial Platform",
    category: "Fintech",
    description:
      "A modern financial platform built around wallets, digital assets, transactions and secure account management.",
    technologies: ["React", "Vite", "Tailwind"],
    image: "/projects/finance.jpg",
  },
  {
    number: "03",
    title: "FilePal",
    category: "Connected Systems",
    description:
      "A cross-device file transfer platform connecting mobile and desktop environments over local networks.",
    technologies: ["React Native", "Electron", "WebSocket"],
    image: "/projects/filepal.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-[#101010] px-6 py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Selected work
            </p>

            <h2 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              Built for
              <span className="block text-white/25">
                the real world.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35">
            A selection of platforms, products and systems developed to solve
            practical problems at scale.
          </p>

        </div>

        <div className="space-y-24">

          {projects.map((project) => (
            <article key={project.number} className="group">

              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-white/25">
                  {project.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  {project.category}
                </span>
              </div>

              <div className="relative aspect-[16/8] overflow-hidden rounded-[20px] border border-white/10 bg-[#181818]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:scale-110">
                  <ArrowUpRight size={20} />
                </div>

              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-[1fr_1fr]">

                <div>
                  <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/35"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}