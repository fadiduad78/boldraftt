export default function Background() {
  return (
    <>
      <div className="bg-stage" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
      </div>
      <div className="aurora" aria-hidden />
      <div className="noise" aria-hidden />
    </>
  );
}
