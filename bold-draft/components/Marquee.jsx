export default function Marquee() {
  const items = "BOLD ✦ CREATIVE ✦ DIFFERENT ✦ PREMIUM ✦ SCROLL-STOPPING ✦ ";
  const Span = () => (
    <span>
      BOLD <b>✦</b> CREATIVE <b>✦</b> DIFFERENT <b>✦</b> PREMIUM <b>✦</b> SCROLL-STOPPING <b>✦</b>{" "}
    </span>
  );
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        <Span />
        <Span />
      </div>
    </div>
  );
}
