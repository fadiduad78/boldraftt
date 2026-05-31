"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const close = () => setOpen(false);
    document.addEventListener("bd:closemenu", close);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("bd:closemenu", close);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "scrolled " : ""}${open ? "menu-open" : ""}`}>
      <a href="#top" className="logo-lk" data-cursor="explore">
        <span className="bd">BOLD</span>
        <span className="tag">draft</span>
      </a>
      <div className={`links${open ? " open" : ""}`}>
        <a href="#about">Studio</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="navcta" data-cursor="start">Start a Project</a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
