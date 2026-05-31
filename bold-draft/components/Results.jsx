"use client";
import { useEffect, useRef } from "react";
import { STATS } from "@/lib/data";
import Reveal from "./Reveal";

function Counter({ count, suffix }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = count + suffix; return; }

    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1800, t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * count) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [count, suffix]);

  return <div className="num" ref={ref}>0</div>;
}

export default function Results() {
  return (
    <section className="results" data-cursor-section="explore">
      <div className="wrap">
        <Reveal as="span" className="eyebrow" style={{ justifyContent: "center" }}>By the numbers</Reveal>
        <Reveal as="h2" className="big">Results that <span className="gradtext">compound.</span></Reveal>
        <div className="stat-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.08}>
              <div className="glow" />
              <Counter count={s.count} suffix={s.suffix} />
              <div className="lbl">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
