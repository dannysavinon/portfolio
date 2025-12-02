"use client";

import { useState } from "react";

export default function CircuitLogo({ className = "" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      viewBox="0 0 48 48"
      className={`${className} transition-all duration-300 ${isHovered ? "drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" : ""}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated glow filter */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circuit board paths */}
      <path
        d="M24 4V12M24 36V44M4 24H12M36 24H44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-70"}`}
        style={{
          strokeDasharray: isHovered ? "0" : "100",
          strokeDashoffset: isHovered ? "0" : "100",
          transition: "stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease, opacity 0.3s ease",
        }}
      />

      {/* Diagonal traces */}
      <path
        d="M10 10L16 16M32 32L38 38M38 10L32 16M16 32L10 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-70"}`}
      />

      {/* Center chip - DS initials stylized */}
      <rect
        x="14"
        y="14"
        width="20"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className={`transition-all duration-300 ${isHovered ? "stroke-[3px]" : ""}`}
        filter={isHovered ? "url(#glow)" : ""}
      />

      {/* Inner circuit pattern */}
      <path
        d="M18 20H22L24 22L26 20H30M18 28H22L24 26L26 28H30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`}
      />

      {/* Connection nodes - animate on hover */}
      <circle
        cx="24" cy="4" r="2"
        fill="currentColor"
        className={`transition-all duration-300 ${isHovered ? "r-[3]" : ""}`}
        style={{ transform: isHovered ? "scale(1.3)" : "scale(1)", transformOrigin: "24px 4px" }}
      />
      <circle
        cx="24" cy="44" r="2"
        fill="currentColor"
        style={{ transform: isHovered ? "scale(1.3)" : "scale(1)", transformOrigin: "24px 44px", transition: "transform 0.3s ease" }}
      />
      <circle
        cx="4" cy="24" r="2"
        fill="currentColor"
        style={{ transform: isHovered ? "scale(1.3)" : "scale(1)", transformOrigin: "4px 24px", transition: "transform 0.3s ease" }}
      />
      <circle
        cx="44" cy="24" r="2"
        fill="currentColor"
        style={{ transform: isHovered ? "scale(1.3)" : "scale(1)", transformOrigin: "44px 24px", transition: "transform 0.3s ease" }}
      />

      {/* Corner nodes */}
      <circle
        cx="10" cy="10" r="1.5"
        fill="currentColor"
        className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
      />
      <circle
        cx="38" cy="10" r="1.5"
        fill="currentColor"
        className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
      />
      <circle
        cx="10" cy="38" r="1.5"
        fill="currentColor"
        className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
      />
      <circle
        cx="38" cy="38" r="1.5"
        fill="currentColor"
        className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
      />

      {/* Chip pins - pulse on hover */}
      <g className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-70"}`}>
        <rect x="18" y="12" width="2" height="4" fill="currentColor" />
        <rect x="24" y="12" width="2" height="4" fill="currentColor" />
        <rect x="28" y="12" width="2" height="4" fill="currentColor" />
        <rect x="18" y="32" width="2" height="4" fill="currentColor" />
        <rect x="24" y="32" width="2" height="4" fill="currentColor" />
        <rect x="28" y="32" width="2" height="4" fill="currentColor" />
        <rect x="12" y="18" width="4" height="2" fill="currentColor" />
        <rect x="12" y="24" width="4" height="2" fill="currentColor" />
        <rect x="12" y="28" width="4" height="2" fill="currentColor" />
        <rect x="32" y="18" width="4" height="2" fill="currentColor" />
        <rect x="32" y="24" width="4" height="2" fill="currentColor" />
        <rect x="32" y="28" width="4" height="2" fill="currentColor" />
      </g>
    </svg>
  );
}
