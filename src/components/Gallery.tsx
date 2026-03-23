import Image from "next/image";

// Each photo gets a caption that feels personal, like her Instagram captions
const photos = [
  {
    src:     "/image/5.jpg",
    caption: "My face is proof that God exists.",
    tag:     "2024",
    size:    "tall",   // tall card
    pos:     "center top",
  },
  {
    src:     "/image/6.jpg",
    caption: "Yes!",
    tag:     "Studio",
    size:    "square",
    pos:     "center",
  },
  {
    src:     "/image/7.jpg",
    caption: "Caption this",
    tag:     "Nairobi",
    size:    "square",
    pos:     "center",
  },
  {
    src:     "/image/8.jpg",
    caption: "Cras mattis euismod quis viverra nibh cras pulvinar.",
    tag:     "Radio",
    size:    "wide",
    pos:     "center top",
  },
  {
    src:     "/image/9.jpg",
    caption: "Healing isn't linear. But it is possible.",
    tag:     "Personal",
    size:    "square",
    pos:     "center",
  },
  {
    src:     "/image/3.jpg",
    caption: "Life's a beach and so am I",
    tag:     "YouTube",
    size:    "tall",
    pos:     "center",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-28">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-rose" />
              <span className="font-mono text-rose text-[0.62rem] tracking-[0.22em] uppercase">The Gallery</span>
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
              Her world,<br />
              <em className="text-rose">in pictures.</em>
            </h2>
          </div>
          <p className="text-stone text-sm max-w-xs text-right leading-relaxed hidden lg:block">
            Every photo tells the part of the story that words sometimes can&apos;t reach.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {photos.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-blush/30 shadow-[0_8px_30px_rgba(122,62,40,0.1)] hover:shadow-[0_20px_60px_rgba(122,62,40,0.18)] transition-shadow duration-500">
                <div
                  style={{
                    aspectRatio: p.size === "tall" ? "3/4" : p.size === "wide" ? "16/9" : "1/1",
                    position: "relative",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    className="img-hover"
                    style={{
                      objectFit:     "cover",
                      objectPosition: p.pos,
                      filter:        `saturate(0.8) contrast(1.04) ${i % 3 === 1 ? "sepia(0.1)" : ""}`,
                    }}
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(58,28,14,0.65) 0%, transparent 50%)" }}
                  />
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p
                      className="text-parchment leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic" }}
                    >
                      &ldquo;{p.caption}&rdquo;
                    </p>
                  </div>
                </div>
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-parchment/70 text-[0.55rem] tracking-widest uppercase bg-espresso/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload placeholder strip */}
        <div className="mt-16 border border-dashed border-petal rounded-2xl p-10 text-center reveal">

        </div>
      </div>
    </section>
  );
}
