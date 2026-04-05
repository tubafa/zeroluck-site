import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "ZeroLuck — Маркетинговые системы для бизнеса";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "public/fonts/clacon2.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          fontFamily: "ClassicConsole",
          position: "relative",
        }}
      >
        {/* Grid lines - horizontal */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={`h${i}`}
            style={{
              position: "absolute",
              top: i * 40,
              left: 0,
              width: "100%",
              height: 1,
              backgroundColor: "rgba(0,31,255,0.18)",
              display: "flex",
            }}
          />
        ))}
        {/* Grid lines - vertical */}
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={`v${i}`}
            style={{
              position: "absolute",
              top: 0,
              left: i * 40,
              width: 1,
              height: "100%",
              backgroundColor: "rgba(0,31,255,0.18)",
              display: "flex",
            }}
          />
        ))}

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          ZEROLUCK
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 280,
            height: 3,
            backgroundColor: "#001FFF",
            marginTop: 12,
            marginBottom: 24,
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#B0B0B0",
            display: "flex",
          }}
        >
          Маркетинговые системы для бизнеса
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#666666",
            display: "flex",
          }}
        >
          zeroluck.solutions
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "ClassicConsole",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
