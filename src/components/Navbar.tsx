"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About",    href: "#about"   },
  { label: "Gallery",  href: "#gallery" },
  { label: "Journey",  href: "#journey" },
  { label: "Content",  href: "#content" },
  { label: "Collab",   href: "#collab"  },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setLifted(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
        ${lifted
          ? "bg-parchment/94 backdrop-blur-md shadow-[0_1px_0_#e0c4ae]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-rose group-hover:text-terra transition-colors duration-300"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem", lineHeight: 1 }}
          >
            Chebet Ronoh
          </span>
          <span className="text-fog font-mono text-[0.58rem] tracking-[0.2em] uppercase mt-0.5">
            @rono.h
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-stone font-body text-sm tracking-wide hover:text-rose transition-colors duration-200 link-rose"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="relative overflow-hidden group bg-rose text-parchment font-body text-sm tracking-widest px-6 py-2.5 rounded-full hover:bg-terra transition-colors duration-300"
          >
            Say hello
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px]">
          <span className={`block w-5 h-px bg-espresso transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-espresso transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-px bg-espresso transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-parchment/98 border-t border-blush
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 py-7 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone text-sm tracking-wide hover:text-rose transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="self-start bg-rose text-parchment text-sm px-7 py-2.5 rounded-full"
          >
            Say hello
          </Link>
        </div>
      </div>
    </header>
  );
}
