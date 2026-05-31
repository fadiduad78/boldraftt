"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const lineVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { y: "120%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const inner = useRef(null);

  const onMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    if (inner.current) {
      inner.current.style.transform = `translate(${x * 18}px,${y * 14}px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    }
  };
  const onLeave = () => {
    if (inner.current) inner.current.style.transform = "none";
  };

  return (
    <section className="hero" data-cursor-section="explore" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="beams" aria-hidden><span className="beam" /><span className="beam" /><span className="beam" /></div>
      <div className="wrap hero-inner" ref={inner}>
        <motion.div className="tagline-top" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <span className="dot" /> Gen-Z creative studio · Available for new projects
        </motion.div>

        <motion.h1 variants={lineVariants} initial="hidden" animate="show">
          <span className="line"><motion.span variants={itemVariants}>BOLD</motion.span></span>
          <span className="line"><motion.span className="draft" variants={itemVariants}>draft</motion.span></span>
        </motion.h1>

        <p className="sub">
          <motion.span style={{ display: "inline-block" }} initial={{ y: "110%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            We create content people stop scrolling for.
          </motion.span>
        </p>

        <motion.div className="cta-row" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95 }}>
          <Magnetic href="#contact" className="btn btn-primary" data-cursor="start">Start Your Project</Magnetic>
          <Magnetic href="#work" className="btn btn-ghost" data-cursor="view">View Our Work ↗</Magnetic>
        </motion.div>
      </div>

      <div className="scrollcue" aria-hidden><span>Scroll</span><span className="l" /></div>
    </section>
  );
}
