"use client";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const card = useRef(null);

  const celebrate = () => {
    const colors = ["#8D5675", "#A884A7", "#B89EBB", "#DDD0D8", "#ffffff"];
    const r = card.current?.getBoundingClientRect();
    if (!r) return;
    const sx = r.left + r.width / 2, sy = r.top + r.height / 3;
    for (let i = 0; i < 70; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.background = colors[i % colors.length];
      c.style.left = sx + "px";
      c.style.top = sy + "px";
      document.body.appendChild(c);
      const ang = Math.random() * Math.PI * 2;
      const vel = 120 + Math.random() * 260;
      const dx = Math.cos(ang) * vel;
      const dy = Math.sin(ang) * vel - 160;
      const dur = 1400 + Math.random() * 900;
      c.animate(
        [
          { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 420}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
        ],
        { duration: dur, easing: "cubic-bezier(.2,.7,.3,1)" }
      ).onfinish = () => c.remove();
    }
  };

  const submit = () => {
    // TODO: POST to your API route / email service / CMS here
    setSent(true);
    celebrate();
  };

  return (
    <section id="contact" data-cursor-section="start">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Let&apos;s build</Reveal>
        <Reveal as="h2" className="big">Got a brand worth<br /><span className="gradtext">going bold for?</span></Reveal>
        <Reveal className="contact-glass glass" ref={card}>
          {sent ? (
            <div className="success">
              <span className="big-tick">✦</span>
              <h3>Brief received{name ? `, ${name}` : ""}!</h3>
              <p>We&apos;ll be in your inbox within 24 hours with first ideas.</p>
            </div>
          ) : (
            <div>
              <div className="field">
                <label>Your name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Rivera" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@brand.com" />
              </div>
              <div className="field">
                <label>Tell us about the project</label>
                <textarea placeholder="We're a skincare brand and our content feels... beige." />
              </div>
              <Magnetic as="button" className="btn btn-primary submit" data-cursor="send" onClick={submit}>
                Send it →
              </Magnetic>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
