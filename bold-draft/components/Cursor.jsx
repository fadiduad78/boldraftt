"use client";
import { useEffect, useRef } from "react";

const LABELS = { view: "VIEW", open: "OPEN", explore: "EXPLORE", start: "START" };

export default function Cursor() {
  const dot = useRef(null);
  const lab = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = innerWidth / 2, my = innerHeight / 2;
    let cx = mx, cy = my, lx = mx, ly = my, hover = false, raf;

    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      cx += (mx - cx) * 0.25; cy += (my - cy) * 0.25;
      lx += (mx - lx) * 0.18; ly += (my - ly) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      if (lab.current) lab.current.style.transform = `translate(${lx}px,${ly}px) translate(-50%,-50%) scale(${hover ? 1 : 0})`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      const t = e.target.closest?.("[data-cursor]");
      if (t) { hover = true; document.body.classList.add("cur-hover"); if (lab.current) lab.current.textContent = LABELS[t.dataset.cursor] || "VIEW"; }
    };
    const out = (e) => {
      const t = e.target.closest?.("[data-cursor]");
      if (t) { hover = false; document.body.classList.remove("cur-hover"); }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} aria-hidden />
      <div className="cursor-label" ref={lab} aria-hidden>VIEW</div>
    </>
  );
}
