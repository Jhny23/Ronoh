import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    name: "Instagram",
    handle: "@rono.h",
    count: "713K followers",
    desc: "Where the magic lives.",
    src: "/image/1.jpg",
    href: "https://instagram.com/rono.h",
    color: "bg-rose",
  },
  {
    name: "YouTube",
    handle: "Chebet Ronoh",
    count: "120K+ · 5M views · Silver Play Button",
    desc: "Long-form storytelling, vlogs, deeper conversations.",
    src: "/image/1.jpg",
    href: "https://youtube.com",
    color: "bg-terra",
  },
  {
    name: "TikTok",
    handle: "@rono.h",
    count: "Growing · fast",
    desc: "Comedic monologues. ",
    src: "/image/1.jpg",
    href: "https://tiktok.com",
    color: "bg-clay",
  },
];

const topics = [
   "Sobriety & recovery", "Mental health",
  "Body image & self-love", "Social commentary", "Relationships",
   "Comedy",
];

export default function Content() {
  return (
    <section id="content" className="bg-linen">
      <div className="max-w-7xl mx-auto px-8 py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 items-end mb-16 reveal">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">Content &amp; Platforms</span>
            </div>
            <h2
              className="text-espresso leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              She says what<br />
              you&apos;re already <em className="text-rose">thinking.</em>
            </h2>
          </div>
          <p className="text-stone text-[0.97rem] leading-[1.9] self-end">
            Chebet&apos;s content sits at the intersection of comedy and radical honesty.
            It hits because it&apos;s real — always has been, from the very first video she
            ever posted with no plan and no audience.
          </p>
        </div>

        {/* Platform cards — big, editorial */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="group rounded-3xl overflow-hidden bg-parchment border border-blush/50 hover:border-blush hover:shadow-[0_24px_60px_rgba(122,62,40,0.12)] transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-cover img-hover"
                  style={{ filter: "saturate(0.7) contrast(1.05)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(58,28,14,0.5) 0%, transparent 60%)" }} />
                {/* Count badge */}
                <div className={`absolute top-4 right-4 ${p.color} text-parchment font-mono text-[0.55rem] tracking-widest uppercase px-3 py-1.5 rounded-full`}>
                  {p.count}
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="text-espresso group-hover:text-rose transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500 }}
                    >
                      {p.name}
                    </p>
                    <p className="font-mono text-rose/70 text-[0.6rem] tracking-widest uppercase mt-0.5">{p.handle}</p>
                  </div>
                </div>
                <p className="text-stone text-sm leading-[1.85]">{p.desc}</p>
                <Link
                  href={p.href}
                  target="_blank"
                  className="inline-block mt-5 font-mono text-rose text-[0.6rem] tracking-widest uppercase hover:text-terra transition-colors link-rose"
                >
                  Follow →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Topic pills */}
        <div className="border-t border-blush pt-12 reveal">
          <p className="font-mono text-fog text-[0.6rem] tracking-[0.2em] uppercase mb-5">She talks about</p>
          <div className="flex flex-wrap gap-2.5">
            {topics.map((t) => (
              <span
                key={t}
                className="text-stone text-sm px-5 py-2 rounded-full border border-blush bg-parchment hover:bg-blush hover:text-terra hover:border-petal transition-all duration-200 cursor-default font-body"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
