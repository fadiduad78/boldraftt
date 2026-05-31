"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    let p = 0;
    const finish = () => {
      setPct(100);
      setDone(true);
      document.body.classList.remove("no-scroll");
      setTimeout(() => setGone(true), 600);
    };
    const id = setInterval(() => {
      p += Math.random() * 20;
      if (p >= 100) { clearInterval(id); finish(); }
      else setPct(p);
    }, 130);
    const safety = setTimeout(() => { clearInterval(id); finish(); }, 3000);
    return () => { clearInterval(id); clearTimeout(safety); };
  }, []);

  if (gone) return null;

  return (
    <div className={`bd-loader${done ? " hide" : ""}`}>
      <div className="bd-loader-inner">
        <span className="bd-spinner" />
        <div className="logo-lk" style={{ "--ls": "clamp(1.8rem,6vw,3rem)" }}>
          <span className="bd">BOLD</span>
          <span className="tag">draft</span>
        </div>
        <div className="bd-loader-pct">{Math.floor(pct)}%</div>
      </div>
    </div>
  );
}
