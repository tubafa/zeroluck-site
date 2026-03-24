"use client";

const TEXT = "НЕ УДАЧА. А СИСТЕМА. НЕ ХАОС. А ТОЧНОСТЬ.";
const SEPARATOR = " /// ";
const REPEAT_COUNT = 12;

const repeatedText = Array(REPEAT_COUNT)
  .fill(TEXT)
  .join(SEPARATOR) + SEPARATOR;

export default function Marquee() {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background: "linear-gradient(90deg, #000a4d 0%, #0015cc 20%, #001FFF 50%, #0015cc 80%, #000a4d 100%)",
        overflow: "hidden",
        height: "48px",
        maxHeight: "48px",
        padding: "12px 0",
      }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <span className="marquee-glow marquee-text-mobile" style={{ fontSize: "1.15rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", whiteSpace: "nowrap" }}>
          {repeatedText}
        </span>
        <span className="marquee-glow marquee-text-mobile" style={{ fontSize: "1.15rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", whiteSpace: "nowrap" }}>
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
