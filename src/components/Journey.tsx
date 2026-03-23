const milestones = [
  { year: "Start", title: "Before anything had a name",
    note: "It always felt like something was there. Not clear, not visible, but hard to ignore.",
    warm: false },

  { year: "Early", title: "Saying something anyway",
    note: "No audience, no real plan. Just the need to speak instead of staying quiet.",
    warm: true  },

  { year: "Shift", title: "Being seen, suddenly",
    note: "At some point, people started paying attention. Everything got louder after that.",
    warm: false },

  { year: "Proof", title: "Realizing it could work",
    note: "Things started turning into something real. Not perfect, but enough to keep going.",
    warm: true  },

  { year: "Break", title: "Walking away",
    note: "Some things looked right on the outside, but didn’t feel right anymore. So she left.",
    warm: false },

  { year: "Depth", title: "Doing the internal work",
    note: "Not everything needed to be shared. But it still had to be faced.",
    warm: true  },

  { year: "Recognition", title: "Being acknowledged",
    note: "People started calling it success. She didn’t argue, she just kept moving.",
    warm: false },

  { year: "Now", title: "Still becoming",
    note: "Nothing is final. Still learning, still changing, still showing up.",
    warm: true  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-espresso overflow-hidden relative">

      {/* Ambient rose glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(196,122,90,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 items-end mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">The Journey</span>
            </div>
            <h2
              className="text-parchment leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              She didn&apos;t follow<br />
              the expected path.<br />
              <em className="text-rose">Good.</em>
            </h2>
          </div>
          <p className="text-stone text-[0.97rem] leading-[1.9]">
            From a teenager who pressed record with no audience, to one of Kenya&apos;s
            most followed voices online — it&apos;s been anything but straight. And that&apos;s
            exactly what makes it worth every moment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose/20 to-transparent hidden md:block" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="reveal group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div
                  className={`grid md:grid-cols-[88px_1fr] gap-x-10 py-9 border-b transition-colors duration-300
                    ${i < milestones.length - 1 ? "border-white/5" : "border-transparent"}
                    hover:bg-white/[0.025] -mx-4 px-4 rounded-xl`}
                >
                  {/* Year */}
                  <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 mb-3 md:mb-0">
                    <span
                      className="text-rose/70 group-hover:text-rose transition-colors duration-300 text-right leading-none"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500 }}
                    >
                      {m.year}
                    </span>
                    {/* Dot */}
                    <div className="hidden md:block w-2 h-2 rounded-full border border-rose/40 group-hover:bg-rose group-hover:border-rose transition-all duration-300 mt-2 self-end mr-[-1.35rem]" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-parchment/90 group-hover:text-parchment transition-colors duration-200 mb-2 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400 }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed max-w-2xl">{m.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}