import Cursor      from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Marquee      from "@/components/Marquee";
import About        from "@/components/About";
import Gallery      from "@/components/Gallery";
import Journey      from "@/components/Journey";
import Content      from "@/components/Content";
import Collab       from "@/components/Collab";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Gallery />
        <Journey />
        <Content />
        <Collab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
