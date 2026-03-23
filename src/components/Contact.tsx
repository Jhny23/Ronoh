export default function Contact() {
  return (
    <section id="contact" className="bg-linen">
      <div className="max-w-7xl mx-auto px-8 py-28">

        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">Say Hello</span>
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
            Want to work together?<br />
            <em className="text-rose">She reads her messages.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1px_1.2fr] gap-0">

          {/* Left */}
          <div className="lg:pr-16 mb-14 lg:mb-0 reveal">

            {/* Find her */}
            <div className="mb-10">
              <p className="font-mono text-fog text-[0.6rem] tracking-[0.2em] uppercase mb-5">Find Chebet</p>
              <div className="space-y-0">
                {[
                  ["Instagram",  "@rono.h",       "713K"],
                  ["YouTube",    "Chebet Ronoh",  "120K+"],
                  ["TikTok",     "@rono.h",       "Growing"],
                  ["Replies",    "Within 48 hrs", "Business days"],
                ].map(([platform, handle, note]) => (
                  <div key={platform} className="flex items-center gap-6 py-3.5 border-b border-blush/60 last:border-0">
                    <span className="font-mono text-fog text-[0.6rem] tracking-widest uppercase w-20 shrink-0">{platform}</span>
                    <span className="text-espresso text-sm flex-1">{handle}</span>
                    <span className="font-mono text-rose/60 text-[0.6rem] tracking-wide">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick answers */}


            {/* Personal note */}
            <div className="bg-parchment rounded-2xl p-7 border border-blush reveal">
              <p className="font-mono text-rose/70 text-[0.58rem] tracking-widest uppercase mb-4">A note from Chebet</p>
              <p
                className="text-terra leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic" }}
              >
                &ldquo;If you&apos;re reaching out for a collaboration — please be specific.
                Tell me what you want, what your brand is, and why you think we&apos;re
                a good fit. I reply faster when I don&apos;t have to guess.&rdquo;
              </p>
              <p className="font-mono text-fog text-[0.58rem] tracking-wide mt-4">— Chebet</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-blush mx-14 self-stretch" />

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <div className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                {["Your name", "Email address"].map((label) => (
                  <div key={label}>
                    <label className="font-mono text-fog text-[0.58rem] tracking-[0.18em] uppercase block mb-2.5">{label}</label>
                    <input
                      type="text"
                      placeholder={label === "Your name" ? "First & last" : "you@email.com"}
                      className="w-full bg-transparent border-b border-blush pb-2.5 text-espresso text-sm placeholder:text-fog/40 focus:outline-none focus:border-rose transition-colors font-body"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-fog text-[0.58rem] tracking-[0.18em] uppercase block mb-2.5">Nature of enquiry</label>
                <select className="w-full bg-linen border-b border-blush pb-2.5 text-stone text-sm focus:outline-none focus:border-rose transition-colors font-body">
                  <option>Brand partnership / sponsorship</option>
                  <option>Speaking engagement or MC</option>
                  <option>Media / press / interview</option>
                  <option>Content collaboration</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-fog text-[0.58rem] tracking-[0.18em] uppercase block mb-2.5">Company or brand</label>
                <input
                  type="text"
                  placeholder="Where you're from (if applicable)"
                  className="w-full bg-transparent border-b border-blush pb-2.5 text-espresso text-sm placeholder:text-fog/40 focus:outline-none focus:border-rose transition-colors font-body"
                />
              </div>

              <div>
                <label className="font-mono text-fog text-[0.58rem] tracking-[0.18em] uppercase block mb-2.5">Your message</label>
                <textarea
                  rows={5}
                  placeholder="Tell her what you have in mind..."
                  className="w-full bg-transparent border-b border-blush pb-2.5 text-espresso text-sm placeholder:text-fog/40 focus:outline-none focus:border-rose transition-colors resize-none font-body"
                />
              </div>

              <div>
                <button className="bg-rose text-parchment font-body font-medium text-sm tracking-widest px-12 py-4 rounded-full hover:bg-terra transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose/20">
                  Send message
                </button>
                <p className="font-mono text-fog text-[0.58rem] tracking-wide mt-4">Replies within 48 hours · No spam · Real conversations only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
