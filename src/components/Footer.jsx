import { ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center" >
          <div data-aos="fade-left">
            <p className="font-medium text-white">
              {portfolio.name}
            </p>

            <p className="mt-1 text-xs text-white/30">
              Software Developer · Nigeria
            </p>
          </div>

          <div className="flex items-center gap-3" data-aos="fade-right">
            <a
              href={portfolio.socials.github}
              className="rounded-full border border-white/10 p-3 text-white/40 transition hover:text-white"
            >
              GH
            </a>

            <a
              href={portfolio.socials.linkedin}
              className="rounded-full border border-white/10 p-3 text-white/40 transition hover:text-white"
            >
              in
            </a>

            <a
              href="#"
              className="ml-3 rounded-full border border-white/10 p-3 text-white/40 transition hover:text-white"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-between text-[11px] uppercase tracking-widest text-white/20">
          <span>© {new Date().getFullYear()}</span>
          <span>Designed & built with React</span>
        </div>
      </div>
    </footer>
  );
}