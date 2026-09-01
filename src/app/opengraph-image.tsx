import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1220 0%, #123b73 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>ACHUTHAM</span>
          <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: 6, color: "#f4986a" }}>
            SOFTWARE
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, marginTop: 48, maxWidth: 950 }}>
          {siteConfig.valueProposition}
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 24, color: "#c7d2e6" }}>
          IT Staffing &amp; Software Engineering Services
        </div>
      </div>
    ),
    { ...size }
  );
}
