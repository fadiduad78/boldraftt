"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WORK } from "@/lib/data";

export default function Portfolio() {
  const section = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.innerWidth < 760) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const dist = () => track.current.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + dist(),
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="portfolio-pin" data-cursor-section="view" ref={section}>
      <div className="h-track" ref={track}>
        <div className="h-intro">
          <span className="eyebrow">Selected work</span>
          <h2 className="big">Proof,<br /><span className="gradtext">not promises.</span></h2>
          <p className="muted" style={{ marginTop: 20 }}>
            Scroll → to move through the case studies. Every one started as a rough draft.
          </p>
        </div>

        {WORK.map((w) => (
          <article className="pcard" data-cursor="view" key={w.t}>
            <div className="media">
              {/* Replace this div with <video muted loop playsInline> or <img> for real media */}
              <div className="ph" style={{ background: `linear-gradient(150deg, ${w.c1}, ${w.c2})` }} />
            </div>
            <div className="meta">
              <div className="cat">{w.cat}</div>
              <h3>{w.t}</h3>
              <span className="res">{w.res}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
