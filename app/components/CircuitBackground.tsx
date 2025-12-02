"use client";

import { useEffect, useRef } from "react";

interface Trace {
  points: { x: number; y: number }[];
  width: number;
  glowPhase: number;
  pulseSpeed: number;
  signalProgress: number;
  signalActive: boolean;
}

interface Chip {
  x: number;
  y: number;
  width: number;
  height: number;
  pins: number;
  glowIntensity: number;
}

interface Via {
  x: number;
  y: number;
  radius: number;
  glowPhase: number;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const tracesRef = useRef<Trace[]>([]);
  const chipsRef = useRef<Chip[]>([]);
  const viasRef = useRef<Via[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircuit();
    };

    const initCircuit = () => {
      tracesRef.current = [];
      chipsRef.current = [];
      viasRef.current = [];

      // Create central chips
      const numChips = Math.floor((canvas.width * canvas.height) / 400000) + 2;
      for (let i = 0; i < numChips; i++) {
        const chipWidth = 80 + Math.random() * 60;
        const chipHeight = 60 + Math.random() * 40;
        chipsRef.current.push({
          x: Math.random() * (canvas.width - chipWidth - 100) + 50,
          y: Math.random() * (canvas.height - chipHeight - 100) + 50,
          width: chipWidth,
          height: chipHeight,
          pins: Math.floor(Math.random() * 4) + 6,
          glowIntensity: Math.random(),
        });
      }

      // Create PCB traces with 90-degree turns
      const numTraces = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numTraces; i++) {
        const trace: Trace = {
          points: [],
          width: Math.random() > 0.7 ? 3 : 2,
          glowPhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.5 + Math.random() * 1.5,
          signalProgress: Math.random(),
          signalActive: Math.random() > 0.6,
        };

        // Start point
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        trace.points.push({ x, y });

        // Create path with 90-degree turns (PCB style)
        const segments = 3 + Math.floor(Math.random() * 5);
        let horizontal = Math.random() > 0.5;

        for (let j = 0; j < segments; j++) {
          const length = 40 + Math.random() * 150;
          if (horizontal) {
            x += (Math.random() > 0.5 ? 1 : -1) * length;
          } else {
            y += (Math.random() > 0.5 ? 1 : -1) * length;
          }
          x = Math.max(0, Math.min(canvas.width, x));
          y = Math.max(0, Math.min(canvas.height, y));
          trace.points.push({ x, y });
          horizontal = !horizontal;
        }

        tracesRef.current.push(trace);
      }

      // Create vias (connection points)
      const numVias = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numVias; i++) {
        viasRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 3 + Math.random() * 3,
          glowPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawChip = (ctx: CanvasRenderingContext2D, chip: Chip, time: number) => {
      const glow = Math.sin(time * 2 + chip.glowIntensity * Math.PI * 2) * 0.3 + 0.7;

      // Chip glow
      const glowGradient = ctx.createRadialGradient(
        chip.x + chip.width / 2,
        chip.y + chip.height / 2,
        0,
        chip.x + chip.width / 2,
        chip.y + chip.height / 2,
        Math.max(chip.width, chip.height)
      );
      glowGradient.addColorStop(0, `rgba(239, 68, 68, ${0.15 * glow})`);
      glowGradient.addColorStop(0.5, `rgba(239, 68, 68, ${0.05 * glow})`);
      glowGradient.addColorStop(1, "rgba(239, 68, 68, 0)");

      ctx.fillStyle = glowGradient;
      ctx.fillRect(
        chip.x - chip.width / 2,
        chip.y - chip.height / 2,
        chip.width * 2,
        chip.height * 2
      );

      // Chip body
      ctx.fillStyle = "rgba(20, 20, 25, 0.9)";
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.4 + glow * 0.3})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(chip.x, chip.y, chip.width, chip.height, 4);
      ctx.fill();
      ctx.stroke();

      // Chip pins
      const pinSpacing = chip.width / (chip.pins + 1);
      for (let i = 1; i <= chip.pins; i++) {
        ctx.fillStyle = `rgba(239, 68, 68, ${0.5 + glow * 0.3})`;
        ctx.fillRect(chip.x + i * pinSpacing - 2, chip.y - 8, 4, 10);
        ctx.fillRect(chip.x + i * pinSpacing - 2, chip.y + chip.height - 2, 4, 10);
      }

      // Side pins
      const sidePinSpacing = chip.height / (Math.floor(chip.pins / 2) + 1);
      for (let i = 1; i <= Math.floor(chip.pins / 2); i++) {
        ctx.fillRect(chip.x - 8, chip.y + i * sidePinSpacing - 2, 10, 4);
        ctx.fillRect(chip.x + chip.width - 2, chip.y + i * sidePinSpacing - 2, 10, 4);
      }

      // Inner chip detail
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.2 + glow * 0.2})`;
      ctx.lineWidth = 1;
      ctx.strokeRect(chip.x + 8, chip.y + 8, chip.width - 16, chip.height - 16);

      // Chip center marking
      ctx.beginPath();
      ctx.arc(chip.x + chip.width / 2, chip.y + chip.height / 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(239, 68, 68, ${0.3 + glow * 0.4})`;
      ctx.fill();
    };

    const drawTrace = (ctx: CanvasRenderingContext2D, trace: Trace, time: number) => {
      if (trace.points.length < 2) return;

      const glow = Math.sin(time * trace.pulseSpeed + trace.glowPhase) * 0.3 + 0.7;

      // Draw trace glow
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.1 * glow})`;
      ctx.lineWidth = trace.width + 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(trace.points[0].x, trace.points[0].y);
      for (let i = 1; i < trace.points.length; i++) {
        ctx.lineTo(trace.points[i].x, trace.points[i].y);
      }
      ctx.stroke();

      // Draw main trace
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.25 + glow * 0.15})`;
      ctx.lineWidth = trace.width;
      ctx.beginPath();
      ctx.moveTo(trace.points[0].x, trace.points[0].y);
      for (let i = 1; i < trace.points.length; i++) {
        ctx.lineTo(trace.points[i].x, trace.points[i].y);
      }
      ctx.stroke();

      // Draw signal pulse traveling along trace (slower and dimmer)
      if (trace.signalActive) {
        trace.signalProgress += 0.003;
        if (trace.signalProgress > 1) {
          trace.signalProgress = 0;
          trace.signalActive = Math.random() > 0.5;
        }

        let totalLength = 0;
        const segments: { start: { x: number; y: number }; end: { x: number; y: number }; length: number }[] = [];
        for (let i = 1; i < trace.points.length; i++) {
          const dx = trace.points[i].x - trace.points[i - 1].x;
          const dy = trace.points[i].y - trace.points[i - 1].y;
          const segLength = Math.sqrt(dx * dx + dy * dy);
          segments.push({ start: trace.points[i - 1], end: trace.points[i], length: segLength });
          totalLength += segLength;
        }

        const targetDist = trace.signalProgress * totalLength;
        let accDist = 0;
        for (const seg of segments) {
          if (accDist + seg.length >= targetDist) {
            const t = (targetDist - accDist) / seg.length;
            const signalX = seg.start.x + (seg.end.x - seg.start.x) * t;
            const signalY = seg.start.y + (seg.end.y - seg.start.y) * t;

            const signalGradient = ctx.createRadialGradient(signalX, signalY, 0, signalX, signalY, 10);
            signalGradient.addColorStop(0, "rgba(239, 68, 68, 0.4)");
            signalGradient.addColorStop(0.4, "rgba(239, 68, 68, 0.15)");
            signalGradient.addColorStop(1, "rgba(239, 68, 68, 0)");

            ctx.beginPath();
            ctx.arc(signalX, signalY, 10, 0, Math.PI * 2);
            ctx.fillStyle = signalGradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(signalX, signalY, 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(239, 68, 68, 0.5)";
            ctx.fill();
            break;
          }
          accDist += seg.length;
        }
      } else {
        if (Math.random() > 0.999) {
          trace.signalActive = true;
          trace.signalProgress = 0;
        }
      }

      // Draw endpoints
      ctx.beginPath();
      ctx.arc(trace.points[0].x, trace.points[0].y, trace.width + 1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(239, 68, 68, ${0.4 + glow * 0.3})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(trace.points[trace.points.length - 1].x, trace.points[trace.points.length - 1].y, trace.width + 1, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawVia = (ctx: CanvasRenderingContext2D, via: Via, time: number) => {
      const glow = Math.sin(time * 1.5 + via.glowPhase) * 0.4 + 0.6;

      const gradient = ctx.createRadialGradient(via.x, via.y, 0, via.x, via.y, via.radius * 3);
      gradient.addColorStop(0, `rgba(239, 68, 68, ${0.3 * glow})`);
      gradient.addColorStop(0.5, `rgba(239, 68, 68, ${0.1 * glow})`);
      gradient.addColorStop(1, "rgba(239, 68, 68, 0)");

      ctx.beginPath();
      ctx.arc(via.x, via.y, via.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(via.x, via.y, via.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.5 + glow * 0.3})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(via.x, via.y, via.radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 10, 15, 0.9)";
      ctx.fill();
      ctx.strokeStyle = `rgba(239, 68, 68, ${0.3 + glow * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(10, 10, 15, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle grid
      ctx.strokeStyle = "rgba(239, 68, 68, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const time = Date.now() * 0.001;

      tracesRef.current.forEach((trace) => drawTrace(ctx, trace, time));
      viasRef.current.forEach((via) => drawVia(ctx, via, time));
      chipsRef.current.forEach((chip) => drawChip(ctx, chip, time));

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
