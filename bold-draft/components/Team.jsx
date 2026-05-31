import { TEAM } from "@/lib/data";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" data-cursor-section="open">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">The cousins</Reveal>
        <Reveal as="h2" className="big">Four people.<br /><span className="gradtext">One obsession.</span></Reveal>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <Reveal key={m.n} className="member" data-cursor="open" delay={i * 0.07}>
              <div className="face" style={{ background: `linear-gradient(160deg, ${m.c1}, ${m.c2})` }}>{m.i}</div>
              <div className="info">
                <h4>{m.n}</h4>
                <div className="role">{m.r}</div>
                <div className="socials">
                  <a href="#" data-cursor="open">IG</a>
                  <a href="#" data-cursor="open">in</a>
                  <a href="#" data-cursor="open">↗</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
