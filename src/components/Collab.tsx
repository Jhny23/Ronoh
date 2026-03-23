import Link from "next/link";

const offerings = [
  { n: "01", title: "Brand Partnerships",   tag: "Instagram · YouTube · TikTok", desc: "Sponsored content delivered in Chebet's natural, unscripted voice. Her audience trusts her because she only works with brands she'd actually use. That trust is the asset." },
  { n: "02", title: "Speaking & Events",    tag: "Corporate · Community · Media", desc: "MC work, keynotes, panels on content creation, mental health, sobriety, and the Kenyan digital landscape. She speaks exactly the way she creates — honestly." },
  { n: "03", title: "Content Creation",     tag: "Reels · Video · Script",        desc: "Custom content for brands who need creative direction that doesn't feel like an ad. Scripted or freestyle, always recognisably, unmistakably her." },
  { n: "04", title: "Media Appearances",    tag: "Press · Podcast · TV · Radio",  desc: "Interviews, editorial features, podcast guest slots. If the platform is real and the conversation matters, she shows up and makes it memorable." },
];

export default function Collab() {
  return (
    <section id="collab" className="bg-parchment">
      <div className="max-w-7xl mx-auto px-8 py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 items-end mb-16 reveal">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">Collaborations</span>
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
              She only works<br />
              with brands she&apos;d<br />
              <em className="text-rose">actually use.</em>
            </h2>
          </div>
          <div className="space-y-4 self-end reveal reveal-delay-1">
            <p className="text-stone text-[0.97rem] leading-[1.9]">
              713K Instagram followers. 120K+ YouTube subscribers. An audience that
              didn&apos;t arrive through algorithms — it arrived through trust, built one
              honest post at a time.
            </p>
            <p className="text-stone text-[0.97rem] leading-[1.9]">
              When Chebet recommends something, her audience listens. That boundary —
              only working with what she believes — is exactly what makes her
              endorsements carry weight.
            </p>
          </div>
        </div>

        {/* Offerings — clean numbered list, editorial */}
        <div className="space-y-0 border-t border-blush mb-16">
          {offerings.map((o, i) => (
            <div
              key={o.n}
              className="group grid lg:grid-cols-[60px_1fr_1fr] gap-x-10 gap-y-3 py-10 border-b border-blush reveal hover:bg-blush/20 -mx-4 px-4 rounded-xl transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span
                className="font-display text-petal/80 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300 }}
              >
                {o.n}
              </span>
              <div>
                <h3
                  className="text-espresso group-hover:text-rose transition-colors duration-300 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500 }}
                >
                  {o.title}
                </h3>
                <p className="font-mono text-rose/60 text-[0.58rem] tracking-widest uppercase">{o.tag}</p>
              </div>
              <p className="text-stone text-sm leading-[1.85] self-center">{o.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA — warm, beautiful */}
        <div
          className="relative overflow-hidden rounded-3xl p-12 lg:p-16 reveal"
          style={{ background: "linear-gradient(135deg, #a85c3e 0%, #7a3e28 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-parchment/10" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-parchment/10" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p
                className="text-parchment leading-tight mb-3"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem" }}
              >
                Let&apos;s create something beautiful.
              </p>
              <p className="text-parchment/60 text-sm leading-relaxed max-w-lg">
                Get in touch below or DM directly on Instagram{" "}
                <span className="text-parchment/80">@rono.h</span>.
                She reads her messages.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 inline-block bg-parchment text-terra font-body font-medium text-sm tracking-widest px-10 py-4 rounded-full hover:bg-linen transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
