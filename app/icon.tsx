import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

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
          background: "linear-gradient(135deg, #0b1020 0%, #1f1a38 55%, #312e81 100%)",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -8,
            right: -6,
            width: 20,
            height: 20,
            borderRadius: "9999px",
            background: "rgba(245, 158, 11, 0.9)",
            filter: "blur(2px)",
          }}
        />
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            background: "linear-gradient(135deg, #7dd3fc 0%, #a78bfa 65%, #f9a8d4 100%)",
            color: "white",
            lineHeight: 1,
          }}
        >
          N
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}