"use client";
import { useRef } from "react";

export default function Magnetic({ children, as = "a", className = "", strength = 26, ...props }) {
  const ref = useRef(null);
  const Tag = as;

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - (r.left + r.width / 2)) / r.width) * strength;
    const y = ((e.clientY - (r.top + r.height / 2)) / r.height) * strength;
    el.style.transition = "transform .1s";
    el.style.transform = `translate(${x}px,${y}px)`;
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .5s cubic-bezier(.2,.9,.2,1)";
    el.style.transform = "translate(0,0)";
  };

  return (
    <Tag ref={ref} className={className} onMouseMove={move} onMouseLeave={leave} {...props}>
      {children}
    </Tag>
  );
}
