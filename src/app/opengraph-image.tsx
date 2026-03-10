import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          color: "white",
          background:
            "radial-gradient(1200px 600px at 20% 30%, rgba(96,165,250,0.35), transparent 60%), radial-gradient(900px 500px at 70% 60%, rgba(192,132,252,0.35), transparent 60%), linear-gradient(135deg, #0b1220, #0a0f1a)",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 12, opacity: 0.9 }}>{site.role}</div>
        <div style={{ fontSize: 22, marginTop: 28, opacity: 0.85 }}>{site.seo.description}</div>
        <div style={{ marginTop: 42, fontSize: 18, opacity: 0.8 }}>
          {site.seo.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
