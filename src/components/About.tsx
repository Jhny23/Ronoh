import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-linen">
      <div className="max-w-7xl mx-auto px-8 py-28">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-px bg-rose" />
          <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">About Chebet</span>
        </div>

        {/* Editorial grid */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            {/* Big italic headline */}
            <h2
              className="text-espresso leading-tight mb-12 reveal"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              A voice that<br />
              grew in public<br />
              and chose to{" "}
              <em className="text-rose">stay real.</em>
            </h2>

            <div className="space-y-5 text-stone text-[0.97rem] leading-[1.95] reveal reveal-delay-1">
              <p>
                Chebet Ronoh’s story isn’t a straight line — it’s a series of
                sharp turns, bold choices, and very public lessons. Raised in Nairobi,
                she found herself navigating spaces that demanded confidence long
                before she fully felt it.
              </p>
              <p>
                Her entry into media came early, stepping into radio while still
                figuring out who she was. The spotlight came quickly — and with it,
                the pressure, the noise, and the expectations.
              </p>
              <p>
                Instead of hiding the difficult parts, she chose something rarer:
                honesty. Speaking openly about struggles, growth, and the work it
                takes to rebuild yourself — even when people are watching.
              </p>
              <p>
                That openness became her signature. Not perfection, not polish —
                just truth, in real time.
              </p>
            </div>

            {/* Pullquote */}
            <div className="my-12 pl-6 border-l-[3px] border-rose reveal reveal-delay-2">
              <p
                className="text-terra leading-snug mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                &ldquo;How you see me is how you get me.
                I don&apos;t put on a mask, I don&apos;t pretend.&rdquo;
              </p>
              <p className="font-mono text-fog text-[0.6rem] tracking-[0.18em] uppercase">— Chebet Ronoh</p>
            </div>

            <div className="space-y-5 text-stone text-[0.97rem] leading-[1.95] reveal reveal-delay-2">
              <p>
                Today, she creates content that connects — making people laugh,
                reflect, and sometimes confront things they’d rather avoid. Her
                journey isn’t packaged or perfect, and that’s exactly why it resonates.
              </p>
            </div>

            {/* Fact table */}
            <div className="mt-14 border-t border-blush reveal reveal-delay-3">
              {[
                ["Known for",      "Unfiltered storytelling · Digital content"],
                ["Work",           "Radio · Social media · YouTube"],
                ["Style",          "Honest · Direct · Conversational"],
                ["Milestones",     "Early media breakthrough · Growing online audience"],
                ["Approach",       "Sharing real experiences without filters"],
                ["Focus",          "Growth · Self-awareness · Authenticity"],
                ["Presence",       "Consistent · Personal · Evolving"],
                ["Energy",         "Raw · Reflective · Real"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-8 py-3.5 border-b border-blush/60 last:border-0 items-baseline">
                  <span className="font-mono text-fog text-[0.6rem] tracking-[0.12em] uppercase w-28 shrink-0">{k}</span>
                  <span className="text-espresso text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked photos */}
          <div className="sticky top-24 space-y-5 reveal reveal-delay-1">
            {/* Main portrait */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(122,62,40,0.18)]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/image/2.jpg"
                alt="Chebet Ronoh"
                fill
                className="object-cover object-top img-hover"
                style={{ filter: "saturate(0.82) contrast(1.06)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(58,28,14,0.35) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-6 left-6">
                <p
                  className="text-parchment/90 leading-none"
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem" }}
                >
                  Chebet Ronoh
                </p>
                <p className="font-mono text-parchment/50 text-[0.56rem] tracking-widest uppercase mt-1">
                  Nairobi · Kenya
                </p>
              </div>
            </div>

            {/* Two small portraits side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "1/1.2" }}>
                <Image
                  src="/image/1.jpg"
                  alt=""
                  fill
                  className="object-cover object-[center_20%] img-hover"
                  style={{ filter: "saturate(0.7) sepia(0.15)" }}
                />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-md"
                style={{ aspectRatio: "1/1.2", marginTop: "24px" }}
              >
                <Image
                  src="/image/4.jpg"
                  alt=""
                  fill
                  className="object-cover object-[center_10%] img-hover"
                  style={{ filter: "saturate(0.75) contrast(1.05)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}