import React from "react";

export default function GradientButton() {
  return (
    <button
      className="relative overflow-hidden rounded-full px-6 py-3 text-base font-semibold shadow-xl cursor-pointer text-white"
      style={{
        background: "linear-gradient(to bottom, #361893 40%, #afbefd 130%)",
        backdropFilter: "blur(20px)",
      }}
    >
      Analyze My Demos
    </button>
  );
}
