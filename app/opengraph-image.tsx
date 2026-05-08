import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Integrate Claude — AI integration consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundImage: "linear-gradient(135deg, #FAFAF7 0%, #F5F2EA 100%)",
        fontFamily: "system-ui",
        color: "#1F1D1A",
      }}
    >
      {/* Top-left: brand mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "9999px",
            backgroundColor: "#C66E48",
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#1F1D1A",
            letterSpacing: "-0.01em",
          }}
        >
          Integrate Claude
        </div>
      </div>

      {/* Center-left: headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "900px",
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#1F1D1A",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span>We make Claude actually work&nbsp;</span>
          <span style={{ color: "#C66E48" }}>inside your business</span>
        </div>
      </div>

      {/* Bottom-left: subtitle */}
      <div
        style={{
          display: "flex",
          fontSize: 22,
          color: "#7A7268",
        }}
      >
        AI integration consulting — training, workflows, prompts, custom
        software
      </div>
    </div>,
    {
      ...size,
    },
  );
}
