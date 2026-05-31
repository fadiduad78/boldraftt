import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer className="footer" data-cursor-section="explore">
      <div className="beams" style={{ position: "absolute" }} aria-hidden>
        <span className="beam" /><span className="beam" />
      </div>
      <div className="wrap">
        <Reveal as="h2">FROM DRAFT<br />TO DOMINANCE.</Reveal>
        <Magnetic href="#contact" className="btn btn-primary fcta" data-cursor="start">Start Your Project</Magnetic>
        <div className="frow">
          <div className="logo-lk" style={{ "--ls": "1.3rem" }}>
            <span className="bd">BOLD</span><span className="tag">draft</span>
          </div>
          <div className="fsoc">
            <a href="#" data-cursor="open">Instagram</a>
            <a href="#" data-cursor="open">TikTok</a>
            <a href="#" data-cursor="open">LinkedIn</a>
            <a href="#" data-cursor="open">Behance</a>
          </div>
          <div>© {new Date().getFullYear()} Bold Draft Studio</div>
        </div>
      </div>
    </footer>
  );
}
