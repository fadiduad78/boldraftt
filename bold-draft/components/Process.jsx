"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  const fill = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !fill.current) { if (fill.current) fill.current.style.width = "100%"; return; }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(fill.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: { trigger: track.current, start: "top 70%", end: "bottom 70%", scrub: true },
      });
    }, track);
    return () => ctx.revert();
  }, []);

  return (
    <section data-cursor-section="explore">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">How it works</Reveal>
        <Reveal as="h2" className="big">From draft<br /><span className="gradtext">to dominance.</span></Reveal>
        <div className="proc-track" ref={track}>
          <div className="proc-line"><i ref={fill} /></div>
          {PROCESS.map((p, i) => (
            <Reveal key={p.t} className="proc" delay={i * 0.1}>
              <div className="dotn">{p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
