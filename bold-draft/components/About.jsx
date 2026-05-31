import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" data-cursor-section="explore">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">The Studio</Reveal>
        <div className="about-grid">
          <div>
            <Reveal as="p" className="story-line">
              Four cousins. <span className="dim">One obsession with making brands impossible to ignore.</span>
            </Reveal>
            <Reveal as="p" className="muted" style={{ marginTop: 28 }} delay={0.1}>
              Bold Draft started the way the best things do — late nights, group chats, and a shared belief that
              most brands online are forgettable. We&apos;re a Gen-Z creative collective building content, campaigns
              and identities that earn attention instead of buying it. We show the draft, ship the bold, and treat
              every brand like it could go viral tomorrow.
            </Reveal>
          </div>
          <div className="about-cards">
            {[
              { n: "04", h: "Cousins, not a corporation", p: "A tight crew that moves fast, talks straight and actually answers your messages." },
              { n: "01", h: "Vision, end to end", p: "Strategy, content, motion and brand — under one roof, with one taste level." },
              { n: "∞", h: "Creativity on tap", p: "We don't recycle templates. Every brand gets ideas built for it alone." },
            ].map((c, i) => (
              <Reveal key={c.h} className="gc glass" delay={i * 0.08}>
                <div className="n">{c.n}</div>
                <div><h4>{c.h}</h4><p>{c.p}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
