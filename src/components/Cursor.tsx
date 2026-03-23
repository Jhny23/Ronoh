"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100, my = -100, rx = -100, ry = -100;
    let raf: number;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", move);

    const animate = () => {
      if (dot.current) {
        dot.current.style.left  = `${mx - 4}px`;
        dot.current.style.top   = `${my - 4}px`;
      }
      if (ring.current) {
        rx += (mx - rx - 18) * 0.12;
        ry += (my - ry - 18) * 0.12;
        ring.current.style.left = `${rx}px`;
        ring.current.style.top  = `${ry}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Scale on hoverable elements
    const enter = () => {
      dot.current?.style.setProperty("transform", "scale(2.5)");
      ring.current?.style.setProperty("transform", "scale(1.5)");
    };
    const leave = () => {
      dot.current?.style.setProperty("transform", "scale(1)");
      ring.current?.style.setProperty("transform", "scale(1)");
    };
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  style={{ position:"fixed", pointerEvents:"none", zIndex:10000 }} />
      <div ref={ring} className="cursor-ring" style={{ position:"fixed", pointerEvents:"none", zIndex:9999  }} />
    </>
  );
}
