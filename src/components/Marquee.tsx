const words = [
  "Comedian", "✦", "Digital Creator", "✦", "Gemini", "✦",
  "Storyteller", "✦", "YouTube Silver", "✦", "onsteroids", "✦",
  "@rono.h", "✦", " The Source", "✦", "Unapologetically Real", "✦",
  "Aligned", "✦", "Content Creator", "✦", "Gemini", "✦",

];

export default function Marquee() {
  return (
    <div className="bg-rose overflow-hidden py-3 border-y border-terra/20">
      <div className="flex w-max animate-marquee">
        {words.map((w, i) => (
          <span
            key={i}
            className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase whitespace-nowrap px-4
              ${w === "✦" ? "text-parchment/35" : "text-parchment/85"}`}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
