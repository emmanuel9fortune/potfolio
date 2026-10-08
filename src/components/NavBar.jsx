import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-5" data-aos="fade-up">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[15px] border border-white/10 bg-black/70 backdrop-blur-xl h-20 px-5 transition duration-300">
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-white"
        >
          <img src="/mlogo.png" alt="Logo" className="h-18 w-35" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-white/50 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/85 md:block"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="mx-2 mt-2 rounded-3xl border border-white/10 bg-black/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg text-white/70"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}