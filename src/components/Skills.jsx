import { portfolio } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="portfolio-grid border-y border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Toolkit
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {portfolio.skills.map((skill, index) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-white/60 transition duration-300 hover:border-white/30 hover:bg-white hover:text-black"
            >
              <span className="mr-2 text-white/20 hover:text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}