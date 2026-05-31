"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setPct(100);
        setTimeout(() => {
          setDone(true);
          document.body.classList.remove("no-scroll");
          setTimeout(() => setGone(true), 700);
        }, 300);
      } else {
        setPct(p);
      }
    }, 140);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div className={`loader${done ? " done" : ""}`}>
      <div className="lwrap">
        <div className="logo-lk" style={{ "--ls": "clamp(2rem,7vw,4rem)" }}>
          <span className="bd">BOLD</span>
          <span className="tag">draft</span>
        </div>
        <div className="bar"><i style={{ width: pct + "%" }} /></div>
        <div className="pct">LOADING {Math.floor(pct)}%</div>
      </div>
    </div>
  );
}
