
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 80px",
        background: "#F8F9F7",
        color: "#16242D",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 82,
            height: 82,
            borderRadius: 20,
            background: "#0E6E68",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          MG.
        </div>
        <div style={{ fontSize: 34, fontWeight: 700 }}>
          Michael Garcia
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.15,
        }}
        >
        <div style={{ display: "flex" }}>
            Building modern applications
        </div>
        <div style={{ display: "flex" }}>
            and tools for the web.
        </div>
        </div>

        <div style={{ fontSize: 28, color: "#52636A" }}>
          Full-Stack Software Developer
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 8,
          borderRadius: 8,
          background: "#0E6E68",
        }}
      />
    </div>,
    { width: 1200, height: 630 }
  );
}
