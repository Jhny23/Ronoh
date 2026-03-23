import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-parchment">

      {/* Warm ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[70vw] h-[70vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(224,196,174,0.55) 0%, transparent 65%)",
        }}
      />
      {/* Warm ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(196,122,90,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-[1fr_1fr] min-h-screen items-center gap-8 pt-24 pb-12">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">
              too niche for them badder than ever
            </span>
          </div>

          {/* Script name */}
          <h1
            className="opacity-0 animate-fade-up-2 leading-none mb-2"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(4rem, 9vw, 8rem)",
              color: "#a85c3e",
              lineHeight: 1.05,
            }}
          >
            Chebet Ronoh
          </h1>

          {/* Serif sub-headline */}
          <p
            className="opacity-0 animate-fade-up-3 text-espresso mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.3,
            }}
          >
            Digital Creator.<br />
            <span className="text-rose">Unapologetically real.</span>
          </p>

          <p className="opacity-0 animate-fade-up-4 text-stone text-[1rem] font-light max-w-md leading-[1.9] mb-10">
            I am so powerful.
            My mind. Oh, it amazes me sometimes!
          </p>

          <div className="opacity-0 animate-fade-up-5 flex flex-wrap gap-4 mb-14">
            <Link
              href="#gallery"
              className="bg-rose text-parchment font-body font-medium text-sm tracking-widest px-8 py-3.5 rounded-full hover:bg-terra transition-all duration-300 hover:shadow-lg hover:shadow-rose/20 hover:-translate-y-0.5"
            >
              See the gallery
            </Link>
            <Link
              href="#about"
              className="border border-petal text-stone font-body text-sm tracking-widest px-8 py-3.5 rounded-full hover:border-rose hover:text-rose transition-all duration-300"
            >
              Her story
            </Link>
          </div>

          {/* Stats — elegant horizontal */}
          <div className="opacity-0 animate-fade-up-5 flex gap-10 pt-8 border-t border-blush">
            {[
              { n: "713K",  l: "Instagram"    },
              { n: "5M+",   l: "YouTube views"},
              { n: "2019",  l: "NRG Radio"    },
              { n: "2022",  l: "Silver Button" },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="text-terra leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500 }}
                >
                  {s.n}
                </p>
                <p className="font-mono text-fog text-[0.58rem] tracking-[0.15em] uppercase mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Portrait collage */}
        <div className="relative flex items-center justify-center h-[85vh] lg:h-auto">

          {/* Main large portrait */}
          <div
            className="relative opacity-0 animate-scale-in"
            style={{ width: "min(380px, 82vw)", aspectRatio: "2/3" }}
          >
            {/* Decorative offset frame */}
            <div
              className="absolute inset-0 border border-petal/70 rounded-[2.5rem]"
              style={{ transform: "translate(16px, 16px)" }}
            />
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(122,62,40,0.2)]">
              <Image
                src="/image/1.jpg"
                alt="Chebet Ronoh"
                fill
                className="object-cover object-top img-hover"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
              />
              {/* Warm tone overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(58,28,14,0.4) 0%, transparent 50%)" }}
              />
              {/* Name tag at bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-parchment"
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.2rem", lineHeight: 1 }}
                >
                  She is the moment.
                </p>
              </div>
            </div>
          </div>

          {/* Floating sticker — top right */}
          <div
            className="absolute top-8 right-4 lg:right-[-20px] bg-parchment shadow-[0_12px_40px_rgba(122,62,40,0.15)] rounded-2xl px-5 py-3 animate-float z-10"
            style={{ maxWidth: "160px" }}
          >
            <p
              className="text-rose leading-none"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.4rem" }}
            >
              @rono.h
            </p>
            <p className="font-mono text-fog text-[0.55rem] tracking-widest uppercase mt-1">713K strong</p>
          </div>

          {/* Floating sticker — bottom left */}
          <div
            className="absolute bottom-16 left-[-10px] lg:left-[-30px] bg-rose shadow-[0_12px_40px_rgba(122,62,40,0.25)] rounded-2xl px-5 py-3 animate-float-r z-10"
          >
            <p className="text-parchment font-mono text-[0.6rem] tracking-widest uppercase mb-1">Gemini </p>
            <p
              className="text-parchment/90 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic" }}
            >
              The Source
            </p>
          </div>

          {/* Small accent photo */}
          <div
            className="absolute top-4 left-[-20px] lg:left-[-50px] w-28 h-36 rounded-2xl overflow-hidden shadow-lg opacity-0 animate-fade-in z-10"
            style={{ rotate: "-6deg" }}
          >
            <Image
              src="/image/2.jpg"
              alt=""
              fill
              className="object-cover object-center img-hover"
              style={{ filter: "saturate(0.7)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-stone text-[0.58rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-rose to-transparent" />
      </div>
    </section>
  );
}
