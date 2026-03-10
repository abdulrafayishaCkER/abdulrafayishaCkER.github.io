import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #60a5fa, #c084fc)",
          color: "#0b1220",
          fontSize: 32,
          fontWeight: 900,
          borderRadius: 16,
        }}
      >
        AR
      </div>
    ),
    size
  );
}
