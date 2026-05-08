import { useEffect, useRef } from "react";

/**
 * Animated hero background:
 * - White base
 * - Slow drifting gradient mesh blobs (CSS animated)
 * - Particle network on canvas with mouse attraction
 */
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let rafId = 0;

    type P = { x: number; y: number; vx: number; vy: number };
    let particles: P[] = [];

    const initParticles = () => {
      const area = width * height;
      // density: ~1 particle per 9000 css px²
      const count = Math.max(30, Math.min(120, Math.round(area / 9000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const LINK_DIST = 120;
    const MOUSE_RADIUS = 150;
    let time = 0;

    const tick = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const m = mouseRef.current;
      for (const p of particles) {
        // mouse attraction
        if (m.active) {
          const dx = m.x - p.x;
          const dy = m.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / MOUSE_RADIUS) * 0.04;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // gentle damping + cap
        p.vx *= 0.985;
        p.vy *= 0.985;
        const sp = Math.hypot(p.vx, p.vy);
        const maxSp = 0.6;
        if (sp > maxSp) {
          p.vx = (p.vx / sp) * maxSp;
          p.vy = (p.vy / sp) * maxSp;
        }

        // soft wave motion keeps the network visibly alive without distraction
        p.vx += Math.sin(time + p.y * 0.018) * 0.006 + (Math.random() - 0.5) * 0.012;
        p.vy += Math.cos(time + p.x * 0.018) * 0.006 + (Math.random() - 0.5) * 0.012;

        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / LINK_DIST) * 0.18;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = "rgba(99, 102, 241, 0.5)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
      {/* Gradient mesh blobs */}
      <div className="absolute inset-0">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "70%",
            height: "85%",
            top: "-16%",
            left: "-18%",
            background: "#E0F2FE",
            opacity: 0.6,
            animation: "heroBlobA 11s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "75%",
            height: "85%",
            top: "2%",
            right: "-24%",
            background: "#CFFAFE",
            opacity: 0.6,
            animation: "heroBlobB 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "80%",
            height: "76%",
            bottom: "-24%",
            left: "10%",
            background: "#A5F3FC",
            opacity: 0.45,
            animation: "heroBlobC 7s ease-in-out infinite",
          }}
        />
      </div>

      {/* Particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <style>{`
        @keyframes heroBlobA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(18%, 12%) scale(1.18); }
        }
        @keyframes heroBlobB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-16%, 10%) scale(1.2); }
        }
        @keyframes heroBlobC {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-12%, -16%) scale(1.14); }
        }
      `}</style>
    </div>
  );
}
