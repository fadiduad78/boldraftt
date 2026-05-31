import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section data-cursor-section="explore">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Kind words</Reveal>
        <Reveal as="h2" className="big">Brands that <span className="gradtext">trust the draft.</span></Reveal>
      </div>
      <div className="tcarousel">
        <div className="row">
          {loop.map((t, i) => (
            <div className="tcard glass" key={i}>
              <p>“{t.q}”</p>
              <div className="who">
                <div className="av">{t.n[0]}</div>
                <div><b>{t.n}</b><span>{t.r}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
