import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronoh — Creative",
  description:
    "Chebet Ronoh is a Kenyan digital creator known for her candid storytelling, humor, and authenticity. With a background in radio and a strong presence on Instagram, YouTube, and TikTok, Chebet shares her journey of growth, sobriety, and self-discovery. Her content resonates with audiences through its raw honesty and relatable themes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
