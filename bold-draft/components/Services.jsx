"use client";
import { useState, useRef } from "react";
import { SERVICES } from "@/lib/data";
import Reveal from "./Reveal";

function TiltCard({ s, onOpen }) {
  const ref = useRef(null);
  const glow = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(800px) rotateY(${(px - 0.5) * 10}deg) rotateX(${(0.5 - py) * 10}deg)`;
    if (glow.current) { glow.current.style.left = px * 100 + "%"; glow.current.style.top = py * 100 + "%"; }
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <div className="svc" data-cursor="open" ref={ref} onMouseMove={move} onMouseLeave={leave} onClick={onOpen}>
      <div className="glow" ref={glow} />
      <div className="ico">{s.ic}</div>
      <h3>{s.t}</h3>
      <p>{s.d}</p>
      <div className="more">Explore <span>↗</span></div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(null);

  const open = (s) => {
    setActive(s);
    document.body.classList.add("no-scroll");
    window.__lenis?.stop();
  };
  const close = () => {
    setActive(null);
    document.body.classList.remove("no-scroll");
    window.__lenis?.start();
  };

  return (
    <section id="services" data-cursor-section="open">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">What we do</Reveal>
        <Reveal as="h2" className="big">
          Six ways we make<br /><span className="gradtext">brands unmissable.</span>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <TiltCard key={s.t} s={s} onOpen={() => open(s)} />
          ))}
        </div>
      </div>

      <div className={`modal-overlay${active ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <div className="modal glass">
          <button className="x" data-cursor="open" onClick={close} aria-label="Close">✕</button>
          {active && (
            <>
              <div className="ico">{active.ic}</div>
              <h3>{active.t}</h3>
              <p>{active.d}</p>
              <ul>{active.pts.map((p) => <li key={p}>{p}</li>)}</ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
