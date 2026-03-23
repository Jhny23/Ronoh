import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-parchment">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start border-b border-parchment/8 pb-12 mb-12">
          <div>
            <p
              className="text-rose leading-none mb-2"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem" }}
            >
              Chebet Ronoh
            </p>
            <p className="font-mono text-parchment/30 text-[0.58rem] tracking-[0.2em] uppercase mb-4">
              
            </p>
            <p className="text-parchment/40 text-sm leading-relaxed max-w-md">
              Rejection is alignment TRUST
            </p>
          </div>
          <Link
            href="#collab"
            className="self-start border border-parchment/15 text-parchment/60 text-sm font-body px-7 py-3 rounded-full hover:border-parchment/30 hover:text-parchment transition-all duration-300 whitespace-nowrap"
          >
            Work with me
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { h: "Navigate",   links: ["About", "Gallery", "Journey", "Content", "Collab", "Contact"] },
            { h: "Find Me",    links: ["Instagram ", "YouTube", "TikTok "] },
            { h: "Topics",     links: ["Comedy", "Mental Health", "Sobriety", "Spirituality"] },
            { h: "For Brands", links: ["Brand Partnerships", "Speaking", "Press Kit", "Media Enquiries"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="font-mono text-rose/60 text-[0.58rem] tracking-[0.2em] uppercase mb-5">{col.h}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-parchment/35 text-sm hover:text-parchment/70 transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-parchment/8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-parchment/20 text-[0.58rem] tracking-wide">
            © {new Date().getFullYear()} Chebet Ronoh · All rights reserved
          </p>
          <p
            className="text-parchment/20"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.3rem" }}
          >
            Made with love ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
